import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./multi_picklist.css";

import _implicitScopedStylesheets from "./multi_picklist.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M44.4 2H18.8C16.2 2 14 4.2 14 6.8v.8c0 .5.3.8.8.8H38c2.6 0 4.8 2.2 4.8 4.8V38c0 .5.3.8.8.8h.8c2.6 0 4.8-2.2 4.8-4.8V6.8C49.2 4.2 47 2 44.4 2z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M33.2 13.2H7.6c-2.6 0-4.8 2.2-4.8 4.8v27.2C2.8 47.8 5 50 7.6 50h25.6c2.6 0 4.8-2.2 4.8-4.8V18c0-2.6-2.2-4.8-4.8-4.8zM23.5 42c0 .9-.7 1.6-1.6 1.6H10.8c-.9 0-1.6-.7-1.6-1.6v-1.6c0-.9.7-1.6 1.6-1.6h11.1c.9 0 1.6.7 1.6 1.6V42zm0-9.6c0 .9-.7 1.6-1.6 1.6H10.8c-.9 0-1.6-.7-1.6-1.6v-1.6c0-.9.7-1.6 1.6-1.6h11.1c.9 0 1.6.7 1.6 1.6v1.6zm0-9.6c0 .9-.7 1.6-1.6 1.6H10.8c-.9 0-1.6-.7-1.6-1.6v-1.6c0-.9.7-1.6 1.6-1.6h11.1c.9 0 1.6.7 1.6 1.6v1.6zM31.6 42c0 .9-.7 1.6-1.6 1.6h-1.6c-.9 0-1.6-.7-1.6-1.6v-1.6c0-.9.7-1.6 1.6-1.6H30c.9 0 1.6.7 1.6 1.6V42zm0-9.6c0 .9-.7 1.6-1.6 1.6h-1.6c-.9 0-1.6-.7-1.6-1.6v-1.6c0-.9.7-1.6 1.6-1.6H30c.9 0 1.6.7 1.6 1.6v1.6zm0-9.6c0 .9-.7 1.6-1.6 1.6h-1.6c-.9 0-1.6-.7-1.6-1.6v-1.6c0-.9.7-1.6 1.6-1.6H30c.9 0 1.6.7 1.6 1.6v1.6z"
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
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_multi_picklist";
freezeTemplate(tmpl);
