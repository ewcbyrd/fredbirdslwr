import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom29.css";

import _implicitScopedStylesheets from "./new_custom29.scoped.css?scoped=true";

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
    "d": "M45.3 8.4h-1.5c-1 0-1.7.8-1.7 1.8V42c0 .1 0 .2.1.3l2 2.8c.2.2.4.2.6 0l2-2.8c.2-.1.2-.1.2-.3V10.2c0-1-.7-1.8-1.7-1.8zM32.5 2H9.8C7.2 2 5 4.2 5 6.8v38.4C5 47.8 7.2 50 9.8 50h22.6c2.7 0 4.8-2.2 4.8-4.8V6.8c.1-2.6-2.1-4.8-4.7-4.8zM21.2 48.4c-1.4 0-2.4-1-2.4-2.4s1-2.4 2.4-2.4 2.4 1 2.4 2.4-1.1 2.4-2.4 2.4zm11.3-8c0 .9-.7 1.6-1.6 1.6H11.5c-.9 0-1.6-.7-1.6-1.6V10c0-.9.7-1.6 1.6-1.6h19.4c.9 0 1.6.7 1.6 1.6v30.4z"
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
      "viewBox": "0 0 52 52",
      "part": "icon"
    },
    key: 0,
    svg: true
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("path", stc2)])])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesAction_new_custom29";
freezeTemplate(tmpl);
