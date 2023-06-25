import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./serialized_product.css";

import _implicitScopedStylesheets from "./serialized_product.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M47.6 2H4.4A2.39 2.39 0 002 4.4v9.52a2.39 2.39 0 002.4 2.4h43.2a2.39 2.39 0 002.4-2.4V4.4A2.39 2.39 0 0047.6 2zM29.92 9.2A3.93 3.93 0 0126 13.12 4 4 0 1129.92 9zM47.6 18.8H4.4A2.39 2.39 0 002 21.2v9.52a2.39 2.39 0 002.4 2.4h43.2a2.39 2.39 0 002.4-2.4V21.2a2.39 2.39 0 00-2.4-2.4zm-24.08 7.12a3.86 3.86 0 01-3.69 4h-.23a4 4 0 113.92-4.08zm12 0a3.86 3.86 0 01-3.69 4h-.23a4 4 0 113.92-4.08zM47.6 35.6H4.4A2.39 2.39 0 002 38v9.6A2.39 2.39 0 004.4 50h43.2a2.39 2.39 0 002.4-2.4V38a2.39 2.39 0 00-2.4-2.4zm-29.68 7.12a3.86 3.86 0 01-3.69 4H14a4 4 0 113.92-4.08zm12 0a3.86 3.86 0 01-3.69 4H26a4 4 0 113.92-4.08zm12 0a3.86 3.86 0 01-3.69 4H38a4 4 0 113.92-4.08z"
  },
  key: 2,
  svg: true
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 52 52",
      "part": "icon"
    },
    key: 0,
    svg: true
  }, [api_element("g", stc0, [api_element("path", stc1)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_serialized_product";
freezeTemplate(tmpl);
