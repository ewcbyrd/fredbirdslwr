import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./arrow_left.css";

import _implicitScopedStylesheets from "./arrow_left.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M10.17 42.34a2 2 0 01-2 2H4a2 2 0 01-2-2V9.66a2 2 0 012-2h4.13a2 2 0 012 2zM50 28a2.11 2.11 0 01-2 2.05H30.6a1.3 1.3 0 00-.92 2.24l4.69 4.8a2 2 0 010 2.86l-2.75 2.86a1.87 1.87 0 01-2.76 0l-15-15.42a2 2 0 010-2.86l15-15.32a1.87 1.87 0 012.76 0L34.37 12a2 2 0 010 2.86l-4.69 4.8a1.3 1.3 0 00.92 2.24H48a2.2 2.2 0 012 2.1z",
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_arrow_left";
freezeTemplate(tmpl);
