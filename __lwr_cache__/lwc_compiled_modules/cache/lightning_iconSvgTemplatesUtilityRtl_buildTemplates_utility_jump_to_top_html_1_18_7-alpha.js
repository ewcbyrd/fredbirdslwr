import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./jump_to_top.css";

import _implicitScopedStylesheets from "./jump_to_top.scoped.css?scoped=true";

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
    "d": "M11.4 21.6L24.9 7.9c.6-.6 1.6-.6 2.2 0l13.5 13.7c.6.6.6 1.6 0 2.2L38.4 26c-.6.6-1.6.6-2.2 0l-9.1-9.4c-.6-.6-1.6-.6-2.2 0l-9.1 9.3c-.6.6-1.6.6-2.2 0l-2.2-2.2c-.5-.6-.5-1.5 0-2.1z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M11.4 39.7L24.9 26c.6-.6 1.6-.6 2.2 0l13.5 13.7c.6.6.6 1.6 0 2.2l-2.2 2.2c-.6.6-1.6.6-2.2 0l-9.1-9.4c-.6-.6-1.6-.6-2.2 0L15.8 44c-.6.6-1.6.6-2.2 0l-2.2-2.2c-.5-.6-.5-1.6 0-2.1z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_jump_to_top";
freezeTemplate(tmpl);
