import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom1.css";

import _implicitScopedStylesheets from "./new_custom1.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M29.4 45.5c-1.9 2-5 2-6.9 0-5.8-6.1-16.8-17.7-16.8-17.8-5-5.1-5-13.6 0-18.8 2.4-2.5 5.6-3.9 9-3.9s6.6 1.3 9 3.9l1 1.2c.6.8 1.9.8 2.6 0l.8-1 .1-.1c2.5-2.6 5.7-4 9-4 3.4 0 6.6 1.3 9 3.9 5 5.1 5 13.6 0 18.8 0 .1-10.9 11.7-16.8 17.8z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesActionRtl_new_custom1";
freezeTemplate(tmpl);
