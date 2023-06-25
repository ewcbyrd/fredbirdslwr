import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./steps.css";

import _implicitScopedStylesheets from "./steps.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M44.4 50.2h-7v-4.8h7v4.8zm0-2.3zm-14.1 2.3h-7v-4.8h7v4.8zm-14 0h-7v-4.8h7v4.8zm-9.4-5.9H2.1v-7h4.8v7zm43-1.7h-4.8v-7h4.8v7zm-43-12.3H2.1v-7h4.8v7zm43-1.7h-4.8v-7h4.8v7zm-43-12.3H2.1v-7h4.8v7zm43-1.6h-4.8v-7h4.8v7zm-7.3-8.1h-7V1.8h7v4.8zm-14 0h-7V1.8h7v4.8zm-13.9 0h-7V1.8h7v4.8z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_steps";
freezeTemplate(tmpl);
