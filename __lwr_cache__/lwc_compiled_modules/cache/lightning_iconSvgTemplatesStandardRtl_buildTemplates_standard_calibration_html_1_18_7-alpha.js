import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./calibration.css";

import _implicitScopedStylesheets from "./calibration.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M31.9 49.7c-.6.1-1.2.1-1.9.1-.6 0-1.2 0-1.9-.1-.6-.1-1.1.4-1.1 1V78c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2V50.7c0-.7-.5-1.1-1.1-1zM51.9 70.7c-.6.1-1.2.1-1.9.1-.6 0-1.2 0-1.9-.1-.6-.1-1.1.4-1.1 1V78c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-6.3c0-.7-.5-1.1-1.1-1zM71.9 55.7c-.6.1-1.2.1-1.9.1-.6 0-1.2 0-1.9-.1-.6-.1-1.1.4-1.1 1V78c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2V56.7c0-.7-.5-1.1-1.1-1zM33 30.7V22c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v8.7c-2.4 1.1-4 3.5-4 6.3 0 3.9 3.1 7 7 7s7-3.1 7-7c0-2.8-1.6-5.2-4-6.3zM53 51.7V22c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v29.7c-2.4 1.1-4 3.5-4 6.3 0 3.9 3.1 7 7 7s7-3.1 7-7c0-2.8-1.6-5.2-4-6.3zM73 36.7V22c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v14.7c-2.4 1.1-4 3.5-4 6.3 0 3.9 3.1 7 7 7s7-3.1 7-7c0-2.8-1.6-5.2-4-6.3z"
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
      "viewBox": "0 0 100 100",
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_calibration";
freezeTemplate(tmpl);
