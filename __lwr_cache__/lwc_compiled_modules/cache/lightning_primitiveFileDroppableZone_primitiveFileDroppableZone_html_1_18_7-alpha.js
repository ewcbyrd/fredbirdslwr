import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./primitiveFileDroppableZone.css";

import _implicitScopedStylesheets from "./primitiveFileDroppableZone.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 0
};
const stc1 = [];
function tmpl($api, $cmp, $slotset, $ctx) {
  const {s: api_slot} = $api;
  return [api_slot("", stc0, stc1, $slotset)];
  /*LWC compiler v2.38.1*/
}
export default registerTemplate(tmpl);
tmpl.slots = [""];
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets);
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets);
}
tmpl.stylesheetToken = "lightning-primitiveFileDroppableZone_primitiveFileDroppableZone";
freezeTemplate(tmpl);
