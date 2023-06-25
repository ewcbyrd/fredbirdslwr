import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./edit.css";

import _implicitScopedStylesheets from "./edit.scoped.css?scoped=true";

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
    "d": "M48.8 7.4l-4.2-4.2c-1.6-1.6-4.1-1.6-5.6 0l-3.3 3.3c-.4.4-.4 1 0 1.4l8.5 8.5c.4.4 1 .4 1.4 0l3.3-3.3c1.5-1.6 1.5-4.1-.1-5.7zM32.9 10.7c-.4-.4-1-.4-1.4 0L5.4 36.8 2.1 48.1c-.3 1.1.7 2.2 1.8 1.9l11.4-3.2h-.1l26.1-26.1c.4-.4.4-1 0-1.4l-8.4-8.6z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesActionRtl_edit";
freezeTemplate(tmpl);
