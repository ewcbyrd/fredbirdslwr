import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./hierarchy.css";

import _implicitScopedStylesheets from "./hierarchy.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M23.1 23H10.8c-.7 0-1.4.6-1.4 1.3v10.5H5.3c-.7 0-1.4.7-1.4 1.4v10c0 .7.7 1.4 1.4 1.4H19c.7 0 1.4-.7 1.4-1.4v-10c0-.7-.7-1.4-1.4-1.4h-4.1v-6.4h21.9v6.4h-4.1c-.7 0-1.4.7-1.4 1.4v10c0 .7.7 1.4 1.4 1.4h13.7c.7 0 1.3-.7 1.3-1.4v-10c0-.7-.6-1.4-1.3-1.4h-4.2V24.3c0-.7-.7-1.3-1.4-1.3H28.6v-6.4h4.1c.7 0 1.3-.7 1.3-1.4v-10c0-.7-.6-1.4-1.3-1.4H19c-.7 0-1.4.7-1.4 1.4v10c0 .7.7 1.4 1.4 1.4h4.2V23z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_hierarchy";
freezeTemplate(tmpl);
