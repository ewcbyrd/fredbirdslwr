import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./mark_all_as_read.css";

import _implicitScopedStylesheets from "./mark_all_as_read.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M1.9 16.8v-3.2c0-.9.7-1.6 1.6-1.6h17c.9 0 1.6.7 1.6 1.6v3.2c0 .9-.7 1.6-1.6 1.6h-17c-.9 0-1.6-.7-1.6-1.6zM1.9 31.1v-3.2c0-.9.7-1.6 1.6-1.6h38.6c.9 0 1.6.7 1.6 1.6v3.2c0 .9-.7 1.6-1.6 1.6H3.5c-.9 0-1.6-.7-1.6-1.6zM1.9 45.4v-3.2c0-.9.7-1.6 1.6-1.6h38.6c.9 0 1.6.7 1.6 1.6v3.2c0 .9-.7 1.6-1.6 1.6H3.5c-.9 0-1.6-.7-1.6-1.6zM49.7 7L48 5.3c-.5-.5-1.2-.5-1.7 0L35.7 15.8l-4.3-4.2c-.5-.5-1.2-.5-1.7 0L28 13.3c-.5.5-.5 1.2 0 1.7l5.9 5.9c.5.5 1.1.7 1.7.7s1.2-.2 1.7-.7L49.7 8.7c.4-.4.4-1.2 0-1.7z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_mark_all_as_read";
freezeTemplate(tmpl);
