import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./product_quantity_rules.css";

import _implicitScopedStylesheets from "./product_quantity_rules.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M77 58.48H56.47a1.63 1.63 0 00-1.63 1.63v1.64a1.65 1.65 0 001.63 1.64H77a1.65 1.65 0 001.63-1.64v-1.64A1.63 1.63 0 0077 58.48zM77 70H56.47a1.65 1.65 0 00-1.63 1.64v1.64a1.63 1.63 0 001.63 1.63H77a1.63 1.63 0 001.63-1.63v-1.65A1.64 1.64 0 0077 70zM43.55 58.48H23a1.65 1.65 0 00-1.64 1.63v1.64A1.66 1.66 0 0023 63.39h20.55a1.66 1.66 0 001.64-1.64v-1.64a1.65 1.65 0 00-1.64-1.63zM43.55 70H23a1.66 1.66 0 00-1.64 1.64v1.64A1.64 1.64 0 0023 74.9h20.55a1.65 1.65 0 001.64-1.63v-1.64A1.65 1.65 0 0043.55 70zM66.73 25.14a13 13 0 1013 13 13 13 0 00-13-13zM73.17 39a.82.82 0 01-.82.7H61.11a.78.78 0 01-.81-.7 11.3 11.3 0 010-1.84.82.82 0 01.81-.7h11.24a.82.82 0 01.82.7 11.3 11.3 0 010 1.84zM42.51 28.88a13 13 0 00-18.43 18.43 13 13 0 0018.43-18.43zM42 39.17a.51.51 0 01-.47.55h-6.07a.58.58 0 00-.54.54v6a.58.58 0 01-.54.54h-2.17a.5.5 0 01-.54-.46v-6.08a.51.51 0 00-.48-.54h-6.07a.52.52 0 01-.54-.5V37a.59.59 0 01.54-.55h6a.51.51 0 00.55-.47V30a.58.58 0 01.54-.54h2.17a.54.54 0 01.54.54v6a.5.5 0 00.46.54h6.08A.6.6 0 0142 37z"
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
      "viewBox": "0 0 100 100",
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_product_quantity_rules";
freezeTemplate(tmpl);
