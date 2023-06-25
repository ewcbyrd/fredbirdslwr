import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./field_sales.css";

import _implicitScopedStylesheets from "./field_sales.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M50 20a23.74 23.74 0 00-23.73 23.85c0 16.48 17 31.59 22.23 35.59a2.44 2.44 0 003.12 0c5.25-4.12 22.11-19.11 22.11-35.59A23.74 23.74 0 0050 20zm0 42a18.25 18.25 0 1118.24-18.27A18.3 18.3 0 0150 62z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M43 33.23a5.07 5.07 0 105.08 5.07A5.07 5.07 0 0043 33.23zM43 41a2.66 2.66 0 112.66-2.66A2.66 2.66 0 0143 41zM45.28 54.63a.47.47 0 01-.34.22h-1.62a.43.43 0 01-.37-.22.36.36 0 010-.42l11.68-21.4a.48.48 0 01.37-.21h1.74a.42.42 0 01.2.57zM57 44.13a5.07 5.07 0 105.08 5.06A5.08 5.08 0 0057 44.13zm0 7.72a2.65 2.65 0 112.66-2.64A2.65 2.65 0 0157 51.85z"
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
      "viewBox": "0 0 100 100",
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_field_sales";
freezeTemplate(tmpl);
