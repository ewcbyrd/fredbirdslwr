import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./menuSubheader.css";

import _implicitScopedStylesheets from "./menuSubheader.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  classMap: {
    "slds-dropdown__header": true,
    "slds-truncate": true
  },
  attrs: {
    "part": "menu-subheader"
  },
  key: 0
};
const stc1 = {
  key: 1
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {d: api_dynamic_text, t: api_text, h: api_element} = $api;
  return [api_element("div", stc0, [api_element("span", stc1, [api_text(api_dynamic_text($cmp.label))])])];
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
tmpl.stylesheetToken = "lightning-menuSubheader_menuSubheader";
freezeTemplate(tmpl);
