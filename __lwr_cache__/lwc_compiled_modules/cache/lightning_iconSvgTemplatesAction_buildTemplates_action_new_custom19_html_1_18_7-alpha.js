import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom19.css";

import _implicitScopedStylesheets from "./new_custom19.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M49.4 12.2c-.2-.6-.9-.7-1.4-.3L39.9 20c-.6.6-1.6.6-2.2 0L32 14.3c-.6-.6-.6-1.6 0-2.2L40.2 4c.4-.4.2-1.1-.3-1.4-1.4-.4-2.9-.6-4.3-.6-8.5 0-15.3 7.3-14.3 16 .2 1.4.5 2.6 1 3.8L3.6 40.4c-2.2 2.2-2.2 5.8 0 7.9 1.1 1.1 2.6 1.7 4 1.7s2.9-.6 4-1.7l18.6-18.6c1.2.5 2.5.8 3.8 1 8.7 1 16-5.8 16-14.3 0-1.5-.2-2.9-.6-4.2z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesAction_new_custom19";
freezeTemplate(tmpl);
