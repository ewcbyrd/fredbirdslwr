import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./formattedDateTime.css";

import _implicitScopedStylesheets from "./formattedDateTime.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
function tmpl($api, $cmp, $slotset, $ctx) {
  const {d: api_dynamic_text, t: api_text} = $api;
  return [api_text(api_dynamic_text($cmp.formattedValue))];
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
tmpl.stylesheetToken = "lightning-formattedDateTime_formattedDateTime";
freezeTemplate(tmpl);
