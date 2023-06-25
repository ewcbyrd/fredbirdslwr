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
    "d": "M24 7l-1.7-1.7c-.5-.5-1.2-.5-1.7 0L10 15.8l-4.3-4.2c-.5-.5-1.2-.5-1.7 0l-1.7 1.7c-.5.5-.5 1.2 0 1.7l5.9 5.9c.5.5 1.1.7 1.7.7.6 0 1.2-.2 1.7-.7L24 8.7c.4-.4.4-1.2 0-1.7zM48.4 18.4H27.5c-.9 0-1.6-.7-1.6-1.6v-3.2c0-.9.7-1.6 1.6-1.6h20.9c.9 0 1.6.7 1.6 1.6v3.2c0 .9-.7 1.6-1.6 1.6zM48.4 32.7H9.8c-.9 0-1.6-.7-1.6-1.6v-3.2c0-.9.7-1.6 1.6-1.6h38.6c.9 0 1.6.7 1.6 1.6v3.2c0 .9-.7 1.6-1.6 1.6zM48.4 47H9.8c-.9 0-1.6-.7-1.6-1.6v-3.2c0-.9.7-1.6 1.6-1.6h38.6c.9 0 1.6.7 1.6 1.6v3.2c0 .9-.7 1.6-1.6 1.6z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_mark_all_as_read";
freezeTemplate(tmpl);
