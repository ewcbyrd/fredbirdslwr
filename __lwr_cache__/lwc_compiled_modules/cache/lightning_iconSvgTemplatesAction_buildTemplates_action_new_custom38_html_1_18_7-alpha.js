import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom38.css";

import _implicitScopedStylesheets from "./new_custom38.scoped.css?scoped=true";

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
    "d": "M26 22c-3.5 0-6.4 2.9-6.4 6.4s2.9 6.4 6.4 6.4 6.4-2.9 6.4-6.4S29.5 22 26 22z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M45.2 14h-6.5c-.6 0-1.2-.3-1.4-1l-2.1-4.4C34.4 7 32.7 6 30.9 6h-9.8c-1.8 0-3.5 1-4.3 2.6L14.7 13c-.2.6-.8 1-1.4 1H6.8C4.2 14 2 16.2 2 18.8v22.4C2 43.8 4.2 46 6.8 46h38.4c2.6 0 4.8-2.2 4.8-4.8V18.8c0-2.6-2.2-4.8-4.8-4.8zM26 39.8c-6.2 0-11.2-5-11.2-11.2s5-11.2 11.2-11.2 11.2 5 11.2 11.2-5 11.2-11.2 11.2z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesAction_new_custom38";
freezeTemplate(tmpl);
