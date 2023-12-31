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
    "d": "M49.29 43.08l-7.4-7.35a2 2 0 00-.23-.18v-3.18h3.48a1 1 0 00.65-.23 1 1 0 00.14-1.4l-5.9-7-.12-.14a1 1 0 00-1.4.17l-5.89 7a1 1 0 00-.23.63 1 1 0 001 1h3.47v2.88a2.3 2.3 0 00-.68.45l-7.48 7.32a2.4 2.4 0 000 3.39 2.45 2.45 0 003.39 0l4.7-4.67v5.86a2.42 2.42 0 004.84 0v-5.4l4.24 4.22a2.45 2.45 0 003.39 0 2.38 2.38 0 00.03-3.37zM14.38 2H8.14A6.07 6.07 0 002 8v4.8a6.07 6.07 0 006.14 6h6.24a6.07 6.07 0 006.14-6V8a6.07 6.07 0 00-6.14-6zM12 14h-1.48a3.6 3.6 0 010-7.2H12a3.6 3.6 0 010 7.2zM37.74 18.8a6.07 6.07 0 006.14-6V8a6.07 6.07 0 00-6.14-6H31.5a6.07 6.07 0 00-6.14 6v4.8a6.07 6.07 0 006.14 6zm-7.47-8.4a3.6 3.6 0 013.6-3.6h1.49a3.6 3.6 0 110 7.2h-1.49a3.6 3.6 0 01-3.6-3.6zM14.38 23.6H8.14a6.07 6.07 0 00-6.14 6v4.8a6.07 6.07 0 006.14 6h6.24a6.07 6.07 0 006.14-6v-4.8a6.07 6.07 0 00-6.14-6zM12 35.6h-1.48a3.6 3.6 0 110-7.2H12a3.6 3.6 0 010 7.2z",
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_aggregation_policy";
freezeTemplate(tmpl);
