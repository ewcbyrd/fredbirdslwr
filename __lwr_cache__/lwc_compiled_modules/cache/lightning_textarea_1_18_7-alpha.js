import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./textarea.html";
/* eslint-disable @lwc/lwc/no-api-reassignments */

import labelRequired from '@salesforce/label/LightningControl.required';
import labelHelpTextAlternativeText from '@salesforce/label/LightningInput.helptextAlternativeText';
import { classSet, formatLabel } from 'lightning/utils';
import { normalizeBoolean, synchronizeAttrs, getRealDOMId, classListMutation, decorateInputForDragon, setDecoratedDragonInputValueWithoutEvent, computeAriaInvalid } from 'lightning/utilsPrivate';
import { InteractingState, normalizeVariant, FieldConstraintApiWithProxyInput, isEmptyString, VARIANT } from 'lightning/inputUtils';
import { TouchScroller } from 'lightning/touchScrollLibrary';
const i18n = {
  required: labelRequired,
  helpTextAlternativeText: labelHelpTextAlternativeText
};

/**
 * Represents a multiline text input field.
 */
class LightningTextarea extends LightningElement {
  constructor(...args) {
    super(...args);
    /**
     * Controls auto-filling of the field. Set the attribute to pass
     * through autocomplete values to be interpreted by the browser.
     * @type {string}
     */
    this.autocomplete = void 0;
    /**
     * Text that describes the textarea input field.
     * @type {string}
     * @required
     */
    this.label = void 0;
    /**
     * Text that is displayed when the field is empty,
     * to prompt the user for a valid entry.
     * @type {string}
     */
    this.placeholder = void 0;
    /**
     * Specifies the name of an input element.
     * @type {string}
     */
    this.name = void 0;
    // Validity related messages
    /**
     * Error message to be displayed when a bad input is detected.
     * @type {string}
     */
    this.messageWhenBadInput = void 0;
    /**
     * Error message to be displayed when the value is too short.
     * @type {string}
     */
    this.messageWhenTooShort = void 0;
    /**
     * Error message to be displayed when the value is too long.
     * @type {string}
     */
    this.messageWhenTooLong = void 0;
    /**
     * Error message to be displayed when the value is missing.
     * @type {string}
     */
    this.messageWhenValueMissing = void 0;
    /**
     * The keyboard shortcut for input field.
     * @type {string}
     */
    this.accessKey = void 0;
    this._maxLength = void 0;
    this._minLength = void 0;
    this._defaultValue = '';
    this._disabled = false;
    this._required = false;
    this._readOnly = false;
    this._variant = void 0;
    this._helpMessage = void 0;
    this._fieldLevelHelp = void 0;
    /**
     * Aria Described by value on parent lighting-textarea
     * @type {string}
     */
    this.ariaDescribedBy = void 0;
  }
  connectedCallback() {
    this.classList.add('slds-form-element');
    this.updateClassList();
    this._connected = true;
    this.interactingState = new InteractingState();
    this.interactingState.onleave(() => this.showHelpMessageIfInvalid());
  }
  updateClassList() {
    classListMutation(this.classList, {
      'slds-form-element_stacked': this.variant === VARIANT.LABEL_STACKED,
      'slds-form-element_horizontal': this.variant === VARIANT.LABEL_INLINE
    });
  }
  synchronizeA11y() {
    const input = this.template.querySelector('textarea');
    synchronizeAttrs(input, {
      'aria-describedby': this.computedUniqueHelpElementId
    });
  }
  renderedCallback() {
    // IE11: This is needed to work-around IE11 issue where it would append default value to the place holder,
    // instead of actually setting the value on the textarea element.
    if (!this._rendered) {
      this._rendered = true;
      this._setInputValue(this._defaultValue);
      this.synchronizeA11y();

      // For non-desktop cases where ui:scroller prevents scrolling within the textarea.
      // The TouchScroller library allows touchmove events to scroll through the content of
      // the textarea but sets appropriate flags in the event to allow ui:scroller to scroll
      // the page when a content boundary is reached.
      const scrollTarget = this.template.querySelector('.textarea-container');
      this.touchScroller = new TouchScroller(scrollTarget);
    }
    this.synchronizeA11y();
  }
  disconnectedCallback() {
    this._connected = false;
  }

  /**
   * The maximum number of characters allowed in the textarea.
   * @type {number}
   */
  get maxLength() {
    return this._maxLength;
  }
  set maxLength(value) {
    this._maxLength = value;
    this._updateProxyInputAttributes('maxlength');
  }

  /**
   * The minimum number of characters allowed in the textarea.
   * @type {number}
   */
  get minLength() {
    return this._minLength;
  }
  set minLength(value) {
    this._minLength = value;
    this._updateProxyInputAttributes('minlength');
  }

  /**
   * The value of the textarea input, also used as the default value during init.
   * @type {string}
   */
  get value() {
    return this._value;
  }
  set value(value) {
    // W-5026729 - On IE11, set same value again, will trigger another input event.
    if (this._value !== value) {
      this._value = value || '';
      if (this._connected) {
        // We're connected, so no longer need to update the default value, change the actual value instead
        this._setInputValue(this._value);
      } else {
        this._defaultValue = this._value;
      }
    }
    this._updateProxyInputAttributes('value');
  }

  /**
   * If present, the textarea field is disabled and users cannot interact with it.
   * @type {boolean}
   * @default false
   */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = normalizeBoolean(value);
    this._updateProxyInputAttributes('disabled');
  }

  /**
   * If present, the textarea field is read-only and cannot be edited.
   * @type {boolean}
   * @default false
   */
  get readOnly() {
    return this._readOnly;
  }
  set readOnly(value) {
    this._readOnly = normalizeBoolean(value);
    this._updateProxyInputAttributes('readonly');
  }

  /**
   * If present, the textarea field must be filled out before the form can be submitted.
   * @type {boolean}
   */
  get required() {
    return this._required;
  }
  set required(value) {
    this._required = normalizeBoolean(value);
    this._updateProxyInputAttributes('required');
  }

  /**
   * The variant changes the appearance of the textarea.
   * Accepted variants include standard, label-hidden, label-inline, and label-stacked.
   * This value defaults to standard.
   * Use label-hidden to hide the label but make it available to assistive technology.
   * Use label-inline to horizontally align the label and textarea.
   * Use label-stacked to place the label above the textarea.
   * @type {string}
   * @default standard
   */
  get variant() {
    return this._variant || VARIANT.STANDARD;
  }
  set variant(value) {
    this._variant = normalizeVariant(value);
    this.updateClassList();
  }

  /**
   * Represents the validity states of the textarea input, with respect to constraint validation.
   * @type {object}
   */
  get validity() {
    return this._constraint.validity;
  }

  /**
   * Returns the valid attribute value (Boolean) on the ValidityState object.
   * @returns {boolean} Indicates whether the textarea meets all constraint validations.
   */
  checkValidity() {
    return this._constraint.checkValidity();
  }

  /**
   * Displays the error messages and returns false if the input is invalid.
   * If the input is valid, reportValidity() clears displayed error messages and returns true.
   * @returns {boolean} - The validity status of the textarea.
   */
  reportValidity() {
    return this._constraint.reportValidity(message => {
      this._helpMessage = message;
    });
  }

  /**
   * Sets a custom error message to be displayed when the textarea value is submitted.
   * @param {string} message - The string that describes the error. If message is an empty string, the error message is reset.
   */
  setCustomValidity(message) {
    this._constraint.setCustomValidity(message);
  }

  /**
   * Displays error messages on invalid fields.
   * An invalid field fails at least one constraint validation and returns false when checkValidity() is called.
   */
  showHelpMessageIfInvalid() {
    this.reportValidity();
  }
  set fieldLevelHelp(value) {
    this._fieldLevelHelp = value;
  }

  /**
   * The help text that appears in a popover.
   * Set field-level help to provide an informational tooltip on the textarea input field.
   */
  get fieldLevelHelp() {
    return this._fieldLevelHelp;
  }

  /**
   * Sets focus on the textarea field.
   */
  focus() {
    if (this._connected) {
      this.inputElement.focus();
    }
  }

  /**
   * Removes focus from the textarea field.
   */
  blur() {
    if (this._connected) {
      this.inputElement.blur();
    }
  }

  /**
   * Replace a range of text in textarea with a new string.
   * @param {string} replacement - The string to insert.
   * @param {number} start - The 0-based index of the first character to replace.
   * @param {number} end - The 0-based index of the character after the last character to replace.
   * @param {string} selectMode - A string defining how the selection should be set after the text has been replaced.
   *     Possible values:
   *       - 'select': selects the newly inserted text.
   *       - 'start': moves the selection to just before the inserted text.
   *       - 'end': moves the selection to just after the inserted text.
   *       - 'preserve': attempts to preserve the selection. This is the default.
   */
  setRangeText() {
    if (this._connected) {
      this.inputElement.setRangeText.apply(this.inputElement, arguments);
      this.value = this.inputElement.value;
    }
  }
  get isLabelHidden() {
    return this.variant === VARIANT.LABEL_HIDDEN;
  }
  get i18n() {
    return i18n;
  }
  get computedLabelClass() {
    return classSet('slds-form-element__label').add({
      'slds-assistive-text': this.isLabelHidden
    }).toString();
  }
  handleFocus() {
    this.interactingState.enter();
    this.dispatchEvent(new CustomEvent('focus'));
  }
  handleBlur() {
    this.interactingState.leave();
    this.dispatchEvent(new CustomEvent('blur'));
  }
  handleChange(event) {
    // we only fire change event oninput
    // so stop native event here
    event.stopPropagation();
  }
  handleInput(event) {
    event.stopPropagation();

    // If the current value is the same as it was prior to last update, don't fire the event.
    // This allows us to fix an issue with IE11 which fires an 'input' event every time the placeholder
    // is changed, since the value isn't affected we're effectively ignoring such events.
    if (!this._connected || this._value === event.target.value) {
      return;
    }
    this.interactingState.interacting();
    this._value = this.inputElement.value;
    this._updateProxyInputAttributes('value');
    // the change event needs to propagate to elements outside of the light-DOM, hence making it composed.
    this.dispatchEvent(new CustomEvent('change', {
      bubbles: true,
      composed: true,
      detail: {
        value: this._value
      }
    }));
  }
  get inputElement() {
    if (this._inputElement) {
      return this._inputElement;
    }
    this._inputElement = this.template.querySelector('textarea');
    decorateInputForDragon(this._inputElement);
    return this._inputElement;
  }
  get computedUniqueHelpElementId() {
    const helpMessage = this.template.querySelector('[data-help-message]');
    let spaceSeperatedDescribedByIds = getRealDOMId(helpMessage);
    if (this.ariaDescribedBy && spaceSeperatedDescribedByIds) {
      spaceSeperatedDescribedByIds += ` ${this.ariaDescribedBy}`;
    } else if (this.ariaDescribedBy) {
      spaceSeperatedDescribedByIds = this.ariaDescribedBy;
    }
    return spaceSeperatedDescribedByIds;
  }
  _setInputValue(value) {
    // The underlying input has been modified to dispatch an 'input' event when a direct value set
    // is used to allow for Dragon Natural Speaking (which sets the value directly on the inputs instead
    // dispatching an input event against the input). Since we're in a programatic set here (ie. set
    // not resulting from a direct user interaction) we want a default setter behaviour that doesn't
    // dispatch any events.
    setDecoratedDragonInputValueWithoutEvent(this.inputElement, value);
  }
  _updateProxyInputAttributes(attributes) {
    if (this._constraintApiProxyInputUpdater) {
      this._constraintApiProxyInputUpdater(attributes);
    }
  }
  get _constraint() {
    if (!this._constraintApi) {
      this._constraintApi = new FieldConstraintApiWithProxyInput(() => this, {
        // Override validity.valueMissing, which was broken in Edge until May 2018.
        // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/291588/
        valueMissing: () => this._required && isEmptyString(this._value),
        tooShort: () => this._connected && this.inputElement.validity.tooShort,
        tooLong: () => this._connected && this.inputElement.validity.tooLong
      }, 'textarea');
      this._constraintApiProxyInputUpdater = this._constraint.setInputAttributes({
        value: () => this.value,
        maxlength: () => this.maxLength,
        minlength: () => this.minLength,
        disabled: () => this.disabled,
        readonly: () => this.readOnly,
        required: () => this.required
      });
    }
    return this._constraintApi;
  }
  get computedAriaInvalid() {
    return computeAriaInvalid(this._helpMessage, this.value);
  }
  get helptextAlternativeText() {
    return formatLabel(i18n.helpTextAlternativeText, this.label);
  }
  /*LWC compiler v2.38.1*/
}
LightningTextarea.delegatesFocus = true;
_registerDecorators(LightningTextarea, {
  publicProps: {
    autocomplete: {
      config: 0
    },
    label: {
      config: 0
    },
    placeholder: {
      config: 0
    },
    name: {
      config: 0
    },
    messageWhenBadInput: {
      config: 0
    },
    messageWhenTooShort: {
      config: 0
    },
    messageWhenTooLong: {
      config: 0
    },
    messageWhenValueMissing: {
      config: 0
    },
    accessKey: {
      config: 0
    },
    ariaDescribedBy: {
      config: 0
    },
    maxLength: {
      config: 3
    },
    minLength: {
      config: 3
    },
    value: {
      config: 3
    },
    disabled: {
      config: 3
    },
    readOnly: {
      config: 3
    },
    required: {
      config: 3
    },
    variant: {
      config: 3
    },
    validity: {
      config: 1
    },
    fieldLevelHelp: {
      config: 3
    }
  },
  publicMethods: ["checkValidity", "reportValidity", "setCustomValidity", "showHelpMessageIfInvalid", "focus", "blur", "setRangeText"],
  track: {
    _maxLength: 1,
    _minLength: 1,
    _defaultValue: 1,
    _disabled: 1,
    _required: 1,
    _readOnly: 1,
    _variant: 1,
    _helpMessage: 1,
    _fieldLevelHelp: 1
  }
});
export default _registerComponent(LightningTextarea, {
  tmpl: _tmpl
});
LightningTextarea.interopMap = {
  exposeNativeEvent: {
    change: true,
    focus: true,
    blur: true
  }
};