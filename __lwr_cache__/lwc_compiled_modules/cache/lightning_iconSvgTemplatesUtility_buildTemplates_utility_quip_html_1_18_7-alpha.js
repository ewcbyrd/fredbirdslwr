import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./quip.css";

import _implicitScopedStylesheets from "./quip.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M24.5 2.1c-12 .7-21.7 10.4-22.4 22.4C1.1 38.3 12.2 50 26 50h24V26C50 12.2 38.3 1.1 24.5 2.1zm-9.9 13.4c0-.9.7-1.6 1.6-1.6h19.6c.9 0 1.6.7 1.6 1.6v1.6c0 .9-.7 1.6-1.6 1.6H16.1c-.9 0-1.6-.7-1.6-1.6.1.1.1-1.6.1-1.6zm22.8 20.8c0 .9-.7 1.6-1.6 1.6H16.1c-.9 0-1.6-.7-1.6-1.6v-1.6c0-.9.7-1.6 1.6-1.6h19.6c.9 0 1.6.7 1.6 1.6v1.6h.1zm6-9.5c0 .9-.7 1.6-1.6 1.6H10.1c-.9 0-1.6-.7-1.6-1.6v-1.6c0-.9.7-1.6 1.6-1.6h31.7c.9 0 1.6.7 1.6 1.6v1.6z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_quip";
freezeTemplate(tmpl);
