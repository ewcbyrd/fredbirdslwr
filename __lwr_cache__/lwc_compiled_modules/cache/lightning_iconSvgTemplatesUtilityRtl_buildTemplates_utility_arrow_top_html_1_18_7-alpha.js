import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./arrow_top.css";

import _implicitScopedStylesheets from "./arrow_top.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M9.66 10.17a2 2 0 01-2-2V4a2 2 0 012-2h32.68a2 2 0 012 2v4.13a2 2 0 01-2 2zM24 50a2.12 2.12 0 01-2.05-2V30.6a1.3 1.3 0 00-2.24-.92l-4.8 4.69a2 2 0 01-2.86 0l-2.9-2.75a1.86 1.86 0 010-2.76l15.42-15a2 2 0 012.86 0l15.32 15a1.86 1.86 0 010 2.76L40 34.37a2 2 0 01-2.86 0l-4.8-4.69a1.3 1.3 0 00-2.24.92V48a2.19 2.19 0 01-2.1 2h-4z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_arrow_top";
freezeTemplate(tmpl);
