import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./advanced_function.css";

import _implicitScopedStylesheets from "./advanced_function.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M43 6.9V4c0-.8-.7-1.5-1.5-1.5H11.8c-.8 0-1.5.7-1.5 1.5v3.1c0 .3 0 .7.3 1L25.2 26 10.6 43.9c-.2.3-.3.6-.3 1V48c0 .8.7 1.5 1.5 1.5h29.7c.8 0 1.5-.7 1.5-1.5v-2.9c0-.8-.7-1.5-1.5-1.5H18.4l13.3-16.3c.3-.4.4-.8.4-1.4 0-.5-.2-1-.5-1.4L18.4 8.4h23.1c.8 0 1.5-.7 1.5-1.5z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_advanced_function";
freezeTemplate(tmpl);
