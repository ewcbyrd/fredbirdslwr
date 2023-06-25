import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./type_tool.css";

import _implicitScopedStylesheets from "./type_tool.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M50.37 47.59L32.74 4a2.41 2.41 0 00-2.2-1.47H20.11A2.21 2.21 0 0018.06 4L1.9 47.59a1.43 1.43 0 001.32 1.91h6a2.36 2.36 0 002.06-1.62L16 34.81h19.68l5.14 13.07a2.36 2.36 0 002.06 1.62h6a1.52 1.52 0 001.49-1.91zM19.08 26l5.73-14.69H26L32.3 26z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_type_tool";
freezeTemplate(tmpl);
