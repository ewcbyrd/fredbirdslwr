import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./water.css";

import _implicitScopedStylesheets from "./water.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M30.9 13.46c1.04 2.08 2.17 4.11 3.38 6.09.55.91 1.14 1.81 1.74 2.73 2.69 4.13 5.47 8.41 5.3 13.47-.27 7.98-7.28 14.67-15.26 14.67-4.08 0-8.01-1.81-10.89-4.67-3.11-3.1-4.64-7.32-4.31-11.71.33-4.33 2.76-8.02 5.13-11.61.63-.96 1.26-1.91 1.84-2.87 1.15-1.89 2.23-3.81 3.22-5.78.8-1.59 1.55-3.21 2.21-4.86.03-.08.07-.17.1-.25.66-1.66 1.33-3.39 1.65-5.15v-.06c.04-.14.06-.29.12-.43.26-.69 1.28-.82 1.7-.21.14.2.19.46.24.7v.04c.37 1.76 1.01 3.47 1.67 5.13.65 1.63 1.37 3.22 2.15 4.79zm6.84 22.01a1.307 1.307 0 00-2.61-.09c-.16 4.71-4.33 8.71-9.06 8.71-.72 0-1.31.59-1.31 1.31s.59 1.31 1.31 1.31c6.12 0 11.48-5.1 11.68-11.24z",
    "fill-rule": "evenodd"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_water";
freezeTemplate(tmpl);
