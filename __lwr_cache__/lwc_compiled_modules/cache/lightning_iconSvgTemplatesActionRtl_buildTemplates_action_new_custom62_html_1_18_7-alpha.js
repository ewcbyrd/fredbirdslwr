import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom62.css";

import _implicitScopedStylesheets from "./new_custom62.scoped.css?scoped=true";

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
    "d": "M47.6 41.2H4.4c-1.3 0-2.4 1-2.4 2.4C2 44.9 3 46 4.4 46h43.2c1.3 0 2.4-1 2.4-2.4s-1-2.4-2.4-2.4zM5.2 36.4h27.2v-3.2c0-.9.7-1.6 1.6-1.6h8c.9 0 1.6.7 1.6 1.6v3.2h3.2c.9 0 1.6-.7 1.6-1.6V7.6c0-.9-.7-1.6-1.6-1.6H5.2c-.9 0-1.6.7-1.6 1.6v27.2c0 .9.7 1.6 1.6 1.6zm7.2-20.8c0-.9.7-1.6 1.6-1.6h23.2c.9 0 1.6.7 1.6 1.6v1.6c0 .9-.7 1.6-1.6 1.6H14c-.9 0-1.6-.7-1.6-1.6v-1.6zm0 9.6c0-.9.7-1.6 1.6-1.6h15.2c.9 0 1.6.7 1.6 1.6v1.6c0 .9-.7 1.6-1.6 1.6H14c-.9 0-1.6-.7-1.6-1.6v-1.6z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesActionRtl_new_custom62";
freezeTemplate(tmpl);
