import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./chevronright.css";

import _implicitScopedStylesheets from "./chevronright.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M17.9 4.4l20.7 20.5c.6.6.6 1.6 0 2.2L17.9 47.6c-.6.6-1.6.6-2.2 0l-2.2-2.2c-.6-.6-.6-1.6 0-2.2l16.3-16.1c.6-.6.6-1.6 0-2.2L13.6 8.8c-.6-.6-.6-1.6 0-2.2l2.2-2.2c.6-.5 1.5-.5 2.1 0z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_chevronright";
freezeTemplate(tmpl);
