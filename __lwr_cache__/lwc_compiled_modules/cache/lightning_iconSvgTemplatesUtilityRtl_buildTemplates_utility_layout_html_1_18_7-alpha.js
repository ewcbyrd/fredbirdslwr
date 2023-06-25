import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./layout.css";

import _implicitScopedStylesheets from "./layout.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M48 50H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h44c1.1 0 2 .9 2 2v44c0 1.1-.9 2-2 2zM6 46h40V6H6v40z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M39 20H13c-.6 0-1-.4-1-1v-6c0-.6.4-1 1-1h26c.6 0 1 .4 1 1v6c0 .6-.4 1-1 1zM19 40h-6c-.6 0-1-.4-1-1V27c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v12c0 .6-.4 1-1 1zM39 40H27c-.6 0-1-.4-1-1V27c0-.6.4-1 1-1h12c.6 0 1 .4 1 1v12c0 .6-.4 1-1 1z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_layout";
freezeTemplate(tmpl);
