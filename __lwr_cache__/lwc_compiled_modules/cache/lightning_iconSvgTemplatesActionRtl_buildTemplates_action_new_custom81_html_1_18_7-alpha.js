import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom81.css";

import _implicitScopedStylesheets from "./new_custom81.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M47.5 2c-.8 0-3.1.1-3.9.1-12.3.6-26.5 3.7-27.2 3.9-1 .3-1.6 1.3-1.6 2.2v26.2c-.8-.3-2.1-.5-3.2-.5-5.3 0-9.6 3.6-9.6 8s4.3 8 9.6 8 9.6-3.6 9.6-8V25.6c0-.7.5-1.4 1.2-1.5 3.9-1 9.4-2 19.5-2.6 1-.1 1.7.6 1.7 1.6v8.3c-.8-.3-2.1-.5-3.2-.5-5.3 0-9.6 3.6-9.6 8s4.3 8 9.6 8 9.6-3.6 9.6-8V4.4C50 3 48.9 1.9 47.5 2zm-5.4 12.7c-9.8.6-14.7 1.5-19 2.5-1 .2-1.9-.6-1.9-1.6v-2.5c0-.7.5-1.4 1.3-1.6 4.2-1 9.2-2 19.4-2.6 1-.1 1.7.6 1.7 1.6V13c0 1-.6 1.7-1.5 1.7z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesActionRtl_new_custom81";
freezeTemplate(tmpl);
