import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./preview.css";

import _implicitScopedStylesheets from "./preview.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M51.8 25.1C47.1 15.6 37.3 9 26 9S4.9 15.6.2 25.1c-.3.6-.3 1.3 0 1.8C4.9 36.4 14.7 43 26 43s21.1-6.6 25.8-16.1c.3-.6.3-1.2 0-1.8zM26 37c-6.1 0-11-4.9-11-11s4.9-11 11-11 11 4.9 11 11-4.9 11-11 11z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M26 19c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7z"
  },
  key: 4,
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
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("path", stc2), api_element("path", stc3)])])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_preview";
freezeTemplate(tmpl);
