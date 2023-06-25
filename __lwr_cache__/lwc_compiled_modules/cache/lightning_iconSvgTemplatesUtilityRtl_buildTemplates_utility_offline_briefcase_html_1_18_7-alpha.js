import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./offline_briefcase.css";

import _implicitScopedStylesheets from "./offline_briefcase.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M45.2 14.9H6.8A4.77 4.77 0 002 19.6v25.6A4.87 4.87 0 006.8 50h38.4a4.87 4.87 0 004.8-4.8V19.6a4.77 4.77 0 00-4.8-4.7zM17.4 29.8l1.4-1.4a1 1 0 011.4 0l2.4 2.4a.63.63 0 00.9 0 .61.61 0 00.2-.52V21.6a1.08 1.08 0 011-1H27a1 1 0 011 1v8.7a.65.65 0 001.1.5l2.4-2.4a1 1 0 011.4 0l1.4 1.4a1 1 0 010 1.4l-7.8 7.6a1 1 0 01-1.4 0l-7.7-7.6a1 1 0 010-1.4zm17.8 14a1 1 0 01-1 1H17.8a1 1 0 01-1-1v-2.1a1 1 0 011-1h16.4a1 1 0 011 1zM15.7 10h3.2a.74.74 0 00.8-.67V6.8h12.7v2.4a.74.74 0 00.67.8h3.33a.74.74 0 00.8-.67V6.8A4.87 4.87 0 0032.4 2H19.7a4.8 4.8 0 00-4.8 4.8v2.4a.74.74 0 00.67.8z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_offline_briefcase";
freezeTemplate(tmpl);
