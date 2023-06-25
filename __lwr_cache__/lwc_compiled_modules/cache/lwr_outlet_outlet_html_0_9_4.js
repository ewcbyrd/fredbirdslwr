import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./outlet.css";

import _implicitScopedStylesheets from "./outlet.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  attrs: {
    "role": "alert"
  },
  key: 0
};
const stc1 = {
  attrs: {
    "name": "error"
  },
  key: 1
};
const stc2 = [];
const stc3 = {
  attrs: {
    "role": "region",
    "tabindex": "-1"
  },
  key: 2
};
const stc4 = {
  key: 3
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {s: api_slot, h: api_element, dc: api_dynamic_component} = $api;
  return [api_element("div", stc0, [$cmp.hasError ? api_slot("error", stc1, stc2, $slotset) : null]), api_element("div", stc3, [api_dynamic_component("lwr-dynamic", $cmp.viewCtor, stc4)])];
  /*LWC compiler v2.38.1*/
}
export default registerTemplate(tmpl);
tmpl.slots = ["error"];
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
tmpl.stylesheetToken = "lwr-outlet_outlet";
freezeTemplate(tmpl);
