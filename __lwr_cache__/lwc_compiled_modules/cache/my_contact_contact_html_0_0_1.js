import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./contact.css";

import _implicitScopedStylesheets from "./contact.scoped.css?scoped=true";

import _lightningInput from "lightning/input";
import _lightningCombobox from "lightning/combobox";
import _lightningTextarea from "lightning/textarea";
import _lightningButton from "lightning/button";
import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<div class="slds-large-size_1-of-4 slds-small-size_1-of-1 no-show${0}"${2}><img class="img-left${0}" src="/images/P1010796.jpeg"${2}></div>`;
const $fragment2 = parseFragment`<div class="slds-text-align_center slds-text-heading_large slds-p-bottom_small${0}"${2}>Contact Us</div>`;
const $fragment3 = parseFragment`<div class="slds-p-bottom_small slds-text-heading_small${0}"${2}>Need to reach us? We would love to hear from you. Just fill out and submit this form. We will get back to you with a response shortly.</div>`;
const $fragment4 = parseFragment`<div class="slds-large-size_1-of-4 slds-small-size_1-of-1 no-show${0}"${2}><img class="img-right${0}" src="/images/P1010820.jpeg"${2}></div>`;
const stc0 = {
  classMap: {
    "slds-grid": true,
    "slds-p-around_medium": true
  },
  key: 0
};
const stc1 = {
  classMap: {
    "contact-us": true,
    "slds-large-size_2-of-4": true,
    "slds-small-size_1-of-1": true,
    "slds-p-around_medium": true
  },
  key: 3
};
const stc2 = {
  classMap: {
    "slds-text-align_center": true
  },
  key: 12
};
const stc3 = {
  "label": "Submit",
  "variant": "brand"
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, b: api_bind, c: api_custom_element, h: api_element} = $api;
  const {_m0, _m1, _m2, _m3, _m4} = $ctx;
  return [api_element("div", stc0, [api_static_fragment($fragment1(), 2), api_element("div", stc1, [api_static_fragment($fragment2(), 5), api_static_fragment($fragment3(), 7), api_custom_element("lightning-input", _lightningInput, {
    props: {
      "name": "name",
      "type": "text",
      "variant": "label-inline",
      "label": "Name",
      "value": $cmp.name,
      "required": true
    },
    key: 8,
    on: {
      "change": _m0 || ($ctx._m0 = api_bind($cmp.handleFormChange))
    }
  }), api_custom_element("lightning-input", _lightningInput, {
    props: {
      "name": "email",
      "type": "email",
      "variant": "label-inline",
      "label": "Email",
      "value": $cmp.email,
      "required": true
    },
    key: 9,
    on: {
      "change": _m1 || ($ctx._m1 = api_bind($cmp.handleFormChange))
    }
  }), api_custom_element("lightning-combobox", _lightningCombobox, {
    props: {
      "name": "topic",
      "label": "Topic",
      "value": $cmp.topic,
      "placeholder": "Select a subject",
      "options": $cmp.options,
      "variant": "label-inline",
      "required": true
    },
    key: 10,
    on: {
      "change": _m2 || ($ctx._m2 = api_bind($cmp.handleFormChange))
    }
  }), api_custom_element("lightning-textarea", _lightningTextarea, {
    props: {
      "name": "message",
      "label": "Message",
      "value": $cmp.message,
      "variant": "label-inline",
      "required": true
    },
    key: 11,
    on: {
      "change": _m3 || ($ctx._m3 = api_bind($cmp.handleFormChange))
    }
  }), api_element("div", stc2, [api_custom_element("lightning-button", _lightningButton, {
    props: stc3,
    key: 13,
    on: {
      "click": _m4 || ($ctx._m4 = api_bind($cmp.handleSubmit))
    }
  })])]), api_static_fragment($fragment4(), 15)])];
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
tmpl.stylesheetToken = "my-contact_contact";
freezeTemplate(tmpl);
