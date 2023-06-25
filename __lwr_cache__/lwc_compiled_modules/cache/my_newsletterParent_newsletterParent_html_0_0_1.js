import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./newsletterParent.css";

import _implicitScopedStylesheets from "./newsletterParent.scoped.css?scoped=true";

import _myNewsletters from "my/newsletters";
import _myNewsletterDetails from "my/newsletterDetails";
import {registerTemplate} from "lwc";
const stc0 = {
  classMap: {
    "slds-grid": true,
    "slds-wrap": true,
    "slds-gutters": true,
    "slds-p-left_medium": true,
    "slds-p-right_medium": true,
    "main": true,
    "slds-p-bottom_xx-large": true,
    "slds-p-top_medium": true
  },
  key: 0
};
const stc1 = {
  classMap: {
    "slds-col": true,
    "slds-large-size_1-of-4": true,
    "slds-small-size_1-of-1": true,
    "slds-p-left_x-small": true
  },
  key: 1
};
const stc2 = {
  classMap: {
    "slds-col": true,
    "slds-large-size_3-of-4": true,
    "slds-small-size_1-of-1": true
  },
  key: 3
};
const stc3 = {
  key: 4
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, c: api_custom_element, h: api_element} = $api;
  const {_m0} = $ctx;
  return [api_element("div", stc0, [api_element("div", stc1, [api_custom_element("my-newsletters", _myNewsletters, {
    key: 2,
    on: {
      "newsletterclick": _m0 || ($ctx._m0 = api_bind($cmp.handleNewsletterClickEvent))
    }
  })]), api_element("div", stc2, [api_custom_element("my-newsletter-details", _myNewsletterDetails, stc3)])])];
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
tmpl.stylesheetToken = "my-newsletterParent_newsletterParent";
freezeTemplate(tmpl);
