import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./radioGroup.html";
import labelRequired from '@salesforce/label/LightningControl.required';
import { normalizeBoolean, synchronizeAttrs, getRealDOMId, normalizeString as normalize, classListMutation, reflectAttribute } from 'lightning/utilsPrivate';
import { isEmptyString, InteractingState, FieldConstraintApi, generateUniqueId, normalizeVariant, VARIANT } from 'lightning/inputUtils';
import { classSet } from 'lightning/utils';
const i18n = {
  required: labelRequired
};

/**
 * A radio button group that can have a single option selected.
 */
class LightningRadioGroup extends LightningElement {
  constructor(...args) {
    super(...args);
    /**
     * The style of the radio group. Options are radio or button. The default is radio.
     * @type {string}
     * @default radio
     */
    this.type = 'radio';
    /**
     * Text label for the radio group.
     * @type {string}
     * @required
     */
    this.label = void 0;
    /**
     * Array of label-value pairs for each radio button.
     * @type {list}
     * @required
     */
    this.options = void 0;
    // Validity related message
    /**
     * Optional message displayed when no radio button is selected and the required attribute is set to true.
     * @type {string}
     */
    this.messageWhenValueMissing = void 0;
    /**
     * Specifies the name of the radio button group. Only only one button can be selected if a name is specified
     * for the group.
     * @type {string}
     */
    this.name = generateUniqueId();
    this._required = false;
    this._disabled = false;
    this._helpMessage = void 0;
    this._value = void 0;
  }
  synchronizeA11y() {
    const inputs = this.template.querySelectorAll('input');
    Array.prototype.slice.call(inputs).forEach(input => {
      synchronizeAttrs(input, {
        'aria-describedby': this.computedUniqueHelpElementId
      });
    });
  }
  connectedCallback() {
    this.classList.add('slds-form-element');
    this.updateClassList();
    this.interactingState = new InteractingState();
    this.interactingState.onleave(this.showHelpMessageIfInvalid.bind(this));
  }
  updateClassList() {
    classListMutation(this.classList, {
      'slds-form-element_stacked': this.variant === VARIANT.LABEL_STACKED,
      'slds-form-element_horizontal': this.variant === VARIANT.LABEL_INLINE
    });
  }
  get fieldsetElement() {
    return this.template.querySelector('fieldset');
  }
  get ariaInvalid() {
    return this._helpMessage ? true : undefined;
  }
  renderedCallback() {
    this.synchronizeA11y();
    synchronizeAttrs(this.fieldsetElement, {
      'aria-describedby': getRealDOMId(this.template.querySelector('[data-help-message]'))
    });
    reflectAttribute(this, 'type', this.type);
  }

  /**
   * Specifies the value of the selected radio button.
   * @type {object}
   */
  get value() {
    return this._value;
  }
  set value(value) {
    this._value = value;
  }
  get radioButtonElements() {
    return this.template.querySelectorAll('input');
  }

  /**
   * If present, the radio group is disabled and users cannot interact with it.
   * @type {boolean}
   * @default false
   */
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    this._disabled = normalizeBoolean(value);
    reflectAttribute(this, 'disabled', this._disabled);
  }

  /**
   * If present, a radio button must be selected before the form can be submitted.
   * @type {boolean}
   * @default false
   */
  get required() {
    return this._required;
  }
  set required(value) {
    this._required = normalizeBoolean(value);
  }

  /**
   * The variant changes the appearance of the radio group.
   * Accepted variants include standard, label-hidden, label-inline, and label-stacked.
   * This value defaults to standard.
   * Use label-hidden to hide the label but make it available to assistive technology.
   * Use label-inline to horizontally align the label and radio group.
   * Use label-stacked to place the label above the radio group.
   * @type {string}
   * @default standard
   */
  get variant() {
    return this._variant || VARIANT.STANDARD;
  }
  set variant(value) {
    this._variant = normalizeVariant(value);
    this.updateClassList();
    reflectAttribute(this, 'variant', this._variant);
  }
  get i18n() {
    return i18n;
  }
  get transformedOptions() {
    const {
      options,
      value
    } = this;
    if (Array.isArray(options)) {
      return options.map((option, index) => ({
        label: option.label,
        value: option.value,
        isChecked: value === option.value,
        indexId: `radio-${index}`
      }));
    }
    return [];
  }
  get isRadio() {
    return this.normalizedType === 'radio';
  }
  get isButton() {
    return this.normalizedType === 'button';
  }
  get normalizedType() {
    return normalize(this.type, {
      fallbackValue: 'radio',
      validValues: ['radio', 'button']
    });
  }

  /**
   * Represents the validity states that an element can be in, with respect to constraint validation.
   * @type {object}
   */
  get validity() {
    return this._constraint.validity;
  }

  /**
   * Returns the valid attribute value (Boolean) on the ValidityState object.
   * @returns {boolean} Indicates whether the radio group has any validity errors.
   */
  checkValidity() {
    return this._constraint.checkValidity();
  }

  /**
   * Displays the error messages and returns false if the input is invalid.
   * If the input is valid, reportValidity() clears displayed error messages and returns true.
   * @returns {boolean} - The validity status of the input fields.
   */
  reportValidity() {
    return this._constraint.reportValidity(message => {
      this._helpMessage = message;
    });
  }

  /**
   * Sets a custom error message to be displayed when the radio group value is submitted.
   * @param {string} message - The string that describes the error. If message is an empty string, the error message
   *     is reset.
   */
  setCustomValidity(message) {
    this._constraint.setCustomValidity(message);
  }

  /**
   * Shows the help message if the form control is in an invalid state.
   */
  showHelpMessageIfInvalid() {
    this.reportValidity();
  }

  /**
   * Sets focus on the first radio input element.
   */
  focus() {
    const firstRadio = this.template.querySelector('input');
    if (firstRadio) {
      firstRadio.focus();
    }
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
    event.stopPropagation(); // Stop input element from propagating event up and instead propagate from radio group

    this.interactingState.interacting();
    const value = Array.from(this.radioButtonElements).filter(radioButton => radioButton.checked).map(radioButton => radioButton.value).toString();
    this._value = value;
    this.dispatchEvent(new CustomEvent('change', {
      detail: {
        value
      },
      composed: true,
      bubbles: true,
      cancelable: true
    }));
  }
  get computedUniqueHelpElementId() {
    return getRealDOMId(this.template.querySelector('[data-help-message]'));
  }
  get _constraint() {
    if (!this._constraintApi) {
      this._constraintApi = new FieldConstraintApi(() => this, {
        valueMissing: () => !this.disabled && this.required && isEmptyString(this.value)
      });
    }
    return this._constraintApi;
  }
  get computedLegendClass() {
    const classnames = classSet('slds-form-element__legend slds-form-element__label');
    return classnames.add({
      'slds-assistive-text': this.variant === VARIANT.LABEL_HIDDEN
    }).toString();
  }
  /*LWC compiler v2.38.1*/
}
LightningRadioGroup.delegatesFocus = true;
_registerDecorators(LightningRadioGroup, {
  publicProps: {
    type: {
      config: 0
    },
    label: {
      config: 0
    },
    options: {
      config: 0
    },
    messageWhenValueMissing: {
      config: 0
    },
    name: {
      config: 0
    },
    value: {
      config: 3
    },
    disabled: {
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
    }
  },
  publicMethods: ["checkValidity", "reportValidity", "setCustomValidity", "showHelpMessageIfInvalid", "focus"],
  track: {
    _required: 1,
    _disabled: 1,
    _helpMessage: 1,
    _value: 1
  }
});
export default _registerComponent(LightningRadioGroup, {
  tmpl: _tmpl
});