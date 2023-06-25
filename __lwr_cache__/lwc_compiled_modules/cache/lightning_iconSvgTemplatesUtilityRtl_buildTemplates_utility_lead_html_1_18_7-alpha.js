import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./lead.css";

import _implicitScopedStylesheets from "./lead.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "cx": "26",
    "cy": "9.22",
    "r": "7.19"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M48.38 21.21H3.62c-1.6 0-2.24 2-.88 2.88l11.67 7.51c.56.4.88 1.12.64 1.76l-4.4 14.63c-.48 1.6 1.6 2.72 2.8 1.52L24.8 37.52c.64-.72 1.76-.72 2.4 0l11.35 11.99c1.12 1.2 3.2.08 2.8-1.52l-4.4-14.63c-.16-.64.08-1.36.64-1.76l11.67-7.51c1.36-.88.72-2.88-.88-2.88z"
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
  }, [api_element("g", stc0, [api_element("circle", stc1), api_element("path", stc2)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_lead";
freezeTemplate(tmpl);
