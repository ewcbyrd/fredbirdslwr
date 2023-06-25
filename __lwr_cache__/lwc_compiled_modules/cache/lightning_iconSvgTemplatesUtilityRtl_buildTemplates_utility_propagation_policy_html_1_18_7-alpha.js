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
    "d": "M13.6 2H8a6 6 0 00-6 6v4a6 6 0 006 6h5.6a6 6 0 006-6V8a6 6 0 00-6-6zm-2 11.2H10a3.2 3.2 0 010-6.4h1.6a3.2 3.2 0 010 6.4zM30.4 18H36a6 6 0 006-6V8a6 6 0 00-6-6h-5.6a6 6 0 00-6 6v4a6 6 0 006 6zm2-11.2H34a3.2 3.2 0 110 6.4h-1.6a3.2 3.2 0 110-6.4zM13.6 22.8H8a6 6 0 00-6 6v4a6 6 0 006 6h5.6a6 6 0 006-6v-4a6 6 0 00-6-6zm-2 11.2H10a3.2 3.2 0 110-6.4h1.6a3.2 3.2 0 110 6.4zM47.6 39.6h-8v-2.82a7.2 7.2 0 10-4.8 0v2.82h-8a2.39 2.39 0 00-2.4 2.4v5.62A2.39 2.39 0 0026.8 50a2.39 2.39 0 002.38-2.4v-3.2h5.6v3.22A2.39 2.39 0 0037.2 50a2.39 2.39 0 002.38-2.4v-3.2h5.6v3.22A2.39 2.39 0 0047.6 50a2.39 2.39 0 002.4-2.4V42a2.39 2.39 0 00-2.4-2.4zm-10.4-12a2.4 2.4 0 11-2.4 2.4 2.39 2.39 0 012.42-2.4z",
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_propagation_policy";
freezeTemplate(tmpl);
