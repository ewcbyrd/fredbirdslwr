import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./aggregation_policy.css";

import _implicitScopedStylesheets from "./aggregation_policy.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M79.13 71.32l-9.26-9.19a4.19 4.19 0 00-.34-.28V58h4.91a1 1 0 00.78-1.64l-7.93-9.44-.13-.13a1 1 0 00-1.41.14l-7.91 9.44a1 1 0 00-.23.65 1 1 0 001 1h4.92v3.49a2.85 2.85 0 00-.92.63l-9.25 9.19a3 3 0 000 4.24 3 3 0 004.24 0l5.9-5.87V77a3 3 0 006 0v-6.73l5.32 5.29a3 3 0 004.24 0 3 3 0 00.07-4.24zM37.12 20H26a6 6 0 00-6 6v9a6 6 0 006 6h11.12a6 6 0 006-6v-9a6 6 0 00-6-6zm-4.54 15h-2a4.5 4.5 0 010-9h2a4.5 4.5 0 010 9zM66.31 41a6 6 0 006-6v-9a6 6 0 00-6-6H55.24a6 6 0 00-6 6v9a6 6 0 006 6zm-6.53-15h2a4.5 4.5 0 010 9h-2a4.5 4.5 0 010-9zM37.12 47H26a6 6 0 00-6 6v9a6 6 0 006 6h11.12a6 6 0 006-6v-9a6 6 0 00-6-6zm-4.54 15h-2a4.5 4.5 0 010-9h2a4.5 4.5 0 010 9z",
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_aggregation_policy";
freezeTemplate(tmpl);
