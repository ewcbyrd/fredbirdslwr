import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./anywhere_alert.css";

import _implicitScopedStylesheets from "./anywhere_alert.scoped.css?scoped=true";

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
    "d": "M50 47.33A45.34 45.34 0 004.67 2a2.67 2.67 0 100 5.33 40 40 0 0140 40 2.67 2.67 0 105.33 0z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M32.67 47.33a28 28 0 00-28-28 2.67 2.67 0 100 5.34 22.65 22.65 0 0122.66 22.66 2.67 2.67 0 005.34 0zM4.67 36.67a10.66 10.66 0 0110.66 10.66 2.67 2.67 0 11-5.33 0v-.39A5.34 5.34 0 004.67 42a2.67 2.67 0 110-5.33z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_anywhere_alert";
freezeTemplate(tmpl);
