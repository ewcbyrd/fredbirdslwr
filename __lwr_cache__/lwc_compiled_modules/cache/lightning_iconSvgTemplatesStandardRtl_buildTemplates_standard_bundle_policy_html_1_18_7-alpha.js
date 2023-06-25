import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./bundle_policy.css";

import _implicitScopedStylesheets from "./bundle_policy.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "x": "59.5",
    "y": "45.5",
    "width": "13",
    "height": "22",
    "rx": "2",
    "transform": "rotate(-45 66.003 56.5)"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M53.06 66.2L45.28 74a3 3 0 000 4.24 3 3 0 004.24 0l7.77-7.78a3 3 0 10-4.24-4.24zM77 74H65a3 3 0 000 6h12a3 3 0 000-6zM36 20H26a6 6 0 00-6 6v7a6 6 0 006 6h10a6 6 0 006-6v-7a6 6 0 00-6-6zm-3.5 13h-3a3.5 3.5 0 010-7h3a3.5 3.5 0 010 7zM54 39h10a6 6 0 006-6v-7a6 6 0 00-6-6H54a6 6 0 00-6 6v7a6 6 0 006 6zm3.5-13h3a3.5 3.5 0 010 7h-3a3.5 3.5 0 010-7zM36 45H26a6 6 0 00-6 6v7a6 6 0 006 6h10a6 6 0 006-6v-7a6 6 0 00-6-6zm-3.5 13h-3a3.5 3.5 0 010-7h3a3.5 3.5 0 010 7z",
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
      "viewBox": "0 0 100 100",
      "part": "icon"
    },
    key: 0,
    svg: true
  }, [api_element("g", stc0, [api_element("rect", stc1), api_element("path", stc2)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_bundle_policy";
freezeTemplate(tmpl);
