import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./display_text.css";

import _implicitScopedStylesheets from "./display_text.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M43.5 2.5H8.6c-3.4 0-6.1 2.7-6.1 6.1v34.7c0 3.4 2.7 6.1 6.1 6.1h34.8c3.4 0 6.1-2.7 6.1-6.1V8.6c.1-3.4-2.7-6.1-6-6.1zM10.6 12.7c0-1.1.9-2 2-2h22.9c1.1 0 2 .9 2 2v2.1c0 1.1-.9 2-2 2h-23c-1.1 0-2-.9-2-2v-2.1zm24.1 26.6c0 1.1-.9 2-2 2h-20c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h20c1.1 0 2 .9 2 2v2zM41.4 27c0 1.1-.9 2-2 2H12.7c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h26.6c1.1 0 2 .9 2 2v2z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_display_text";
freezeTemplate(tmpl);
