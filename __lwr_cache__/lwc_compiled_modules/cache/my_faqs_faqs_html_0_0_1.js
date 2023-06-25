import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./faqs.css";

import _implicitScopedStylesheets from "./faqs.scoped.css?scoped=true";

import _lightningCombobox from "lightning/combobox";
import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<div class="slds-large-size_1-of-3 slds-small-size_1-of-1 slds-p-bottom_small no-show${0}"${2}><img src="/images/P1010796.jpeg"${3}><img src="/images/P1010808.jpeg"${3}><img src="/images/P1010820.jpeg"${3}></div>`;
const $fragment2 = parseFragment`<div class="slds-text-heading_large slds-text-align_center${0}"${2}>Frequently Asked Questions</div>`;
const stc0 = {
  classMap: {
    "slds-grid": true,
    "slds-wrap": true,
    "slds-p-around_medium": true,
    "main": true
  },
  key: 0
};
const stc1 = {
  classMap: {
    "slds-small-size-of-1": true,
    "slds-large-size_2-of-3": true
  },
  key: 3
};
const stc2 = {
  classMap: {
    "select": true,
    "slds-p-top_small": true
  },
  key: 6
};
const stc3 = {
  classMap: {
    "slds-p-around_large": true
  },
  key: 8
};
const stc4 = {
  "question": true
};
const stc5 = {
  "answer": true,
  "slds-p-bottom_small": true
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, b: api_bind, c: api_custom_element, h: api_element, k: api_key, d: api_dynamic_text, t: api_text, i: api_iterator} = $api;
  const {_m0} = $ctx;
  return [api_element("div", stc0, [api_static_fragment($fragment1(), 2), api_element("div", stc1, [api_static_fragment($fragment2(), 5), api_element("div", stc2, [api_custom_element("lightning-combobox", _lightningCombobox, {
    props: {
      "name": "category",
      "value": $cmp.category,
      "options": $cmp.options,
      "variant": "label-hidden"
    },
    key: 7,
    on: {
      "change": _m0 || ($ctx._m0 = api_bind($cmp.handleCategoryChange))
    }
  })]), api_element("div", stc3, api_iterator($cmp.selectedFaqs, function (faq) {
    return [api_element("div", {
      classMap: stc4,
      key: api_key(9, faq._id)
    }, [api_text("Q. " + api_dynamic_text(faq.question))]), api_element("div", {
      classMap: stc5,
      key: api_key(10, faq._id)
    }, [api_text("A. " + api_dynamic_text(faq.answer))])];
  }))])])];
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
tmpl.stylesheetToken = "my-faqs_faqs";
freezeTemplate(tmpl);
