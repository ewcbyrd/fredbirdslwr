import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./service_report.css";

import _implicitScopedStylesheets from "./service_report.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M71.8 25h-2a.94.94 0 00-1 1v4a8 8 0 01-7.93 8H39.1a8 8 0 01-7.93-8v-4a.94.94 0 00-1-1h-2a6 6 0 00-5.95 6v43a6 6 0 005.95 6H71.8a6 6 0 005.95-6V31a6 6 0 00-5.95-6zM43.06 66a2 2 0 01-2 2h-2a2 2 0 01-2-2V56a2 2 0 012-2h2a2 2 0 012 2zM53 66a2 2 0 01-2 2h-2a2 2 0 01-2-2V47a2 2 0 012-2h2a2 2 0 012 2zm9.91 0a2 2 0 01-2 2h-2a2 2 0 01-2-2V51a2 2 0 012-2h2a2 2 0 012 2z",
    "fill-rule": "evenodd"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M39.1 32h21.8a2 2 0 002-2v-4a6 6 0 00-5.95-6H43.06a6 6 0 00-5.95 6v4a2 2 0 001.99 2z",
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_service_report";
freezeTemplate(tmpl);
