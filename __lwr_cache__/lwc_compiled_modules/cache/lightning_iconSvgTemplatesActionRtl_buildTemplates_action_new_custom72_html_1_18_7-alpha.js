import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom72.css";

import _implicitScopedStylesheets from "./new_custom72.scoped.css?scoped=true";

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
    "d": "M47.6 2H4.4C3 2 2 3 2 4.4s1 2.4 2.4 2.4h19.2v5C15 12.9 8.4 20.2 8.4 29.1v5.5c0 5.8 4.6 10.6 10.6 10.6h14.2c5.8 0 10.5-4.7 10.5-10.6V29c0-8.9-6.6-16.2-15.2-17.4V6.8h19.2c1.4 0 2.4-1 2.4-2.4S49 2 47.6 2zM37.2 29c0 .1 0 0 0 0 0 2.3-1.8 4.2-4.2 4.2H19c-2.3 0-4.1-1.8-4.2-4.2v.1-.1.1c.1-6.2 5-11.1 11-11.1h.3c6.1 0 11 5 11.1 11z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "cx": "6.8",
    "cy": "46.8",
    "r": "3.2"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "cx": "45.2",
    "cy": "46.8",
    "r": "3.2"
  },
  key: 5,
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
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("path", stc2), api_element("circle", stc3), api_element("circle", stc4)])])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesActionRtl_new_custom72";
freezeTemplate(tmpl);
