import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./work_order_type.css";

import _implicitScopedStylesheets from "./work_order_type.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M39.3 26.9c0 1-.9 1.9-1.9 1.9H14.6c-1 0-1.9-.9-1.9-1.9V25c0-1 .9-1.9 1.9-1.9h22.9c1 0 1.9.9 1.9 1.9v1.9h-.1zm-3.8 11.4c0 1-.9 1.9-1.9 1.9h-19c-1 0-1.9-.9-1.9-1.9v-1.9c0-1 .9-1.9 1.9-1.9h19.1c1 0 1.9.9 1.9 1.9v1.9h-.1zM12.7 13.5c0-1 .9-1.9 1.9-1.9h19.1c1 0 1.9.9 1.9 1.9v1.9c0 1-.9 1.9-1.9 1.9H14.6c-1 0-1.9-.9-1.9-1.9v-1.9zM41.2 4H10.8C7.6 4 5 6.6 5 9.7v32.4c0 3.1 2.6 5.7 5.7 5.7h30.5c3.1 0 5.7-2.6 5.7-5.7V9.7C47 6.6 44.4 4 41.2 4z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_work_order_type";
freezeTemplate(tmpl);
