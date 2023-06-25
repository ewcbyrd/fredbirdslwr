import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./radioGroup.css";

import _implicitScopedStylesheets from "./radioGroup.scoped.css?scoped=true";

import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<span part="indicator" class="slds-radio_faux${0}"${2}></span>`;
const stc0 = {
  "part": "legend"
};
const stc1 = {
  "slds-required": true
};
const stc2 = {
  classMap: {
    "slds-form-element__control": true
  },
  attrs: {
    "part": "options"
  },
  key: 3
};
const stc3 = {
  "slds-radio": true
};
const stc4 = {
  "slds-radio__label": true
};
const stc5 = {
  classMap: {
    "slds-form-element__label": true
  },
  attrs: {
    "part": "label"
  },
  key: 9
};
const stc6 = [];
const stc7 = {
  classMap: {
    "slds-radio_button-group": true
  },
  key: 10
};
const stc8 = {
  "slds-button": true,
  "slds-radio_button": true
};
const stc9 = {
  "slds-radio_button__label": true
};
const stc10 = {
  classMap: {
    "slds-radio_faux": true
  },
  key: 14
};
const stc11 = {
  "slds-form-element__help": true
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {t: api_text, h: api_element, d: api_dynamic_text, k: api_key, gid: api_scoped_id, b: api_bind, st: api_static_fragment, i: api_iterator, f: api_flatten} = $api;
  const {_m0, _m1, _m2, _m3, _m4, _m5} = $ctx;
  return [api_element("fieldset", {
    attrs: {
      "part": "input-radio-group",
      "aria-invalid": $cmp.ariaInvalid
    },
    key: 0
  }, [api_element("legend", {
    className: $cmp.computedLegendClass,
    attrs: stc0,
    key: 1
  }, [$cmp.required ? api_element("abbr", {
    classMap: stc1,
    attrs: {
      "part": "required",
      "title": $cmp.i18n.required
    },
    key: 2
  }, [api_text("*")]) : null, api_text(api_dynamic_text($cmp.label))]), api_element("div", stc2, api_flatten([$cmp.isRadio ? api_iterator($cmp.transformedOptions, function (option) {
    return api_element("span", {
      classMap: stc3,
      key: api_key(4, option.value)
    }, [api_element("input", {
      attrs: {
        "type": "radio",
        "part": "radio",
        "name": $cmp.name,
        "id": api_scoped_id(option.indexId),
        "required": $cmp.required ? "" : null,
        "disabled": $cmp.disabled ? "" : null
      },
      props: {
        "checked": option.isChecked,
        "value": option.value
      },
      key: 5,
      on: {
        "change": _m0 || ($ctx._m0 = api_bind($cmp.handleChange)),
        "focus": _m1 || ($ctx._m1 = api_bind($cmp.handleFocus)),
        "blur": _m2 || ($ctx._m2 = api_bind($cmp.handleBlur))
      }
    }), api_element("label", {
      classMap: stc4,
      attrs: {
        "part": "input-radio",
        "for": api_scoped_id(option.indexId)
      },
      key: 6
    }, [api_static_fragment($fragment1(), 8), api_element("span", stc5, [api_text(api_dynamic_text(option.label))])])]);
  }) : stc6, $cmp.isButton ? api_element("div", stc7, api_iterator($cmp.transformedOptions, function (option) {
    return api_element("span", {
      classMap: stc8,
      key: api_key(11, option.value)
    }, [api_element("input", {
      attrs: {
        "type": "radio",
        "part": "radio",
        "name": $cmp.name,
        "id": api_scoped_id(option.indexId),
        "required": $cmp.required ? "" : null,
        "disabled": $cmp.disabled ? "" : null
      },
      props: {
        "checked": option.isChecked,
        "value": option.value
      },
      key: 12,
      on: {
        "change": _m3 || ($ctx._m3 = api_bind($cmp.handleChange)),
        "focus": _m4 || ($ctx._m4 = api_bind($cmp.handleFocus)),
        "blur": _m5 || ($ctx._m5 = api_bind($cmp.handleBlur))
      }
    }), api_element("label", {
      classMap: stc9,
      attrs: {
        "part": "input-radio",
        "for": api_scoped_id(option.indexId)
      },
      key: 13
    }, [api_element("span", stc10, [api_text(api_dynamic_text(option.label))])])]);
  })) : null])), $cmp._helpMessage ? api_element("div", {
    classMap: stc11,
    attrs: {
      "data-help-message": "",
      "id": api_scoped_id("help-message"),
      "role": "alert"
    },
    key: 15
  }, [api_text(api_dynamic_text($cmp._helpMessage))]) : null])];
  /*LWC compiler v2.38.1*/
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
tmpl.stylesheetToken = "lightning-radioGroup_radioGroup";
freezeTemplate(tmpl);
