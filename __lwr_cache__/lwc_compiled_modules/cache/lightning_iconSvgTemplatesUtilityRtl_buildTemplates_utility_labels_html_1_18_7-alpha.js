import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./labels.css";

import _implicitScopedStylesheets from "./labels.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M41.92 26.35L32.58 17c-.63-.7-1.51-1.11-2.45-1.13l-24.25-.19a3.91 3.91 0 00-3.81 3.78L2 38.42a3.909 3.909 0 003.78 3.8l23.92.15c.88.06 1.73-.26 2.35-.89l9.79-9.72a4 4 0 00.08-5.41z",
    "fill-rule": "evenodd"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M46 28.82a3.996 3.996 0 00.08-5.48l-9.34-9.53a3.297 3.297 0 00-2.45-1.13L10 12.53c-.27 0-.54.04-.81.1a4 4 0 013.71-3l24.26.16c.94.01 1.82.43 2.44 1.13l9.4 9.53a3.996 3.996 0 01-.08 5.48",
    "fill-rule": "evenodd"
  },
  key: 3,
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
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_labels";
freezeTemplate(tmpl);
