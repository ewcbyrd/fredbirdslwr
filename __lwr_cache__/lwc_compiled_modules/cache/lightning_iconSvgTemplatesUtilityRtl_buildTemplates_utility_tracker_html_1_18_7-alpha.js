import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./tracker.css";

import _implicitScopedStylesheets from "./tracker.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M28.2 39.2c0 6.1 4.9 11 11 11s11-4.9 11-11c0-5.4-3.9-9.9-9-10.8V24c5.1-.9 9-5.4 9-10.8 0-6.1-4.9-11-11-11s-11 4.9-11 11c0 5.4 3.9 9.9 9 10.8v4.4c-5.1 1-9 5.4-9 10.8zm11-19c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7c0 4-3.1 7-7 7zm-15.1-9v4c0 1.1-.9 2-2 2H4.2c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h17.9c1.1 0 2 .9 2 2zm0 26v4c0 1.1-.9 2-2 2H4.2c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h17.9c1.1 0 2 1 2 2z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_tracker";
freezeTemplate(tmpl);
