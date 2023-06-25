import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./description.css";

import _implicitScopedStylesheets from "./description.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M4 8v36c0 2.2 1.8 4 4 4h36c2.2 0 4-1.8 4-4V8c0-2.2-1.8-4-4-4H8C5.8 4 4 5.8 4 8zm36 16c0 .6-.4 1-1 1H29c-.6 0-1-.4-1-1V14c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v10zM16 38c0-.6.4-1 1-1h22c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1H17c-.6 0-1-.4-1-1v-2zm-4-8c0-.6.4-1 1-1h26c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1H13c-.6 0-1-.4-1-1v-2zm0-8c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1H13c-.6 0-1-.4-1-1v-2zm0-8c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1H13c-.6 0-1-.4-1-1v-2z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesActionRtl_description";
freezeTemplate(tmpl);
