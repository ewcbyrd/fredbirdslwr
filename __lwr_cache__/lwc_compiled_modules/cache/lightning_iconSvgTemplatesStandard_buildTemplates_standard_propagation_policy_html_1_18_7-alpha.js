import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./propagation_policy.css";

import _implicitScopedStylesheets from "./propagation_policy.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M36 20H26a6 6 0 00-6 6v8a6 6 0 006 6h10a6 6 0 006-6v-8a6 6 0 00-6-6zm-4 14h-2a4 4 0 010-8h2a4 4 0 010 8zM54 40h10a6 6 0 006-6v-8a6 6 0 00-6-6H54a6 6 0 00-6 6v8a6 6 0 006 6zm4-14h2a4 4 0 010 8h-2a4 4 0 010-8zM36 46H26a6 6 0 00-6 6v8a6 6 0 006 6h10a6 6 0 006-6v-8a6 6 0 00-6-6zm-4 14h-2a4 4 0 010-8h2a4 4 0 010 8zM77 67H67v-3.52a9 9 0 10-6 0V67H51a3 3 0 00-3 3v7a3 3 0 006 0v-4h7v4a3 3 0 006 0v-4h7v4a3 3 0 006 0v-7a3 3 0 00-3-3zM64 52a3 3 0 11-3 3 3 3 0 013-3z",
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_propagation_policy";
freezeTemplate(tmpl);
