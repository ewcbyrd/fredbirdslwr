import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./insights.css";

import _implicitScopedStylesheets from "./insights.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M78.3 26.9H31c-.9 0-1.7.8-1.7 1.7v35.2c0 1.4-1.3 2.5-2.7 2.3-1.2-.2-2-1.3-2-2.4V38.5c0-.7-.5-1.2-1.2-1.2h-1.7c-.9 0-1.7.8-1.7 1.7v29.4c0 2.5 2.1 4.6 4.6 4.6H75.4c2.5 0 4.6-2.1 4.6-4.6V28.7c0-1-.8-1.8-1.7-1.8zm-26 33.5c0 .7-.5 1.2-1.2 1.2H37.3c-.7 0-1.2-.5-1.2-1.2v-2.3c0-.7.5-1.2 1.2-1.2h13.8c.7 0 1.2.5 1.2 1.2v2.3zm0-9.2c0 .7-.5 1.2-1.2 1.2H37.3c-.7 0-1.2-.5-1.2-1.2v-2.3c0-.7.5-1.2 1.2-1.2h13.8c.7 0 1.2.5 1.2 1.2v2.3zm20.8 9.2c0 .7-.5 1.2-1.2 1.2H58.1c-.7 0-1.2-.5-1.2-1.2v-2.3c0-.7.5-1.2 1.2-1.2h13.8c.7 0 1.2.5 1.2 1.2v2.3zm0-9.2c0 .7-.5 1.2-1.2 1.2H58.1c-.7 0-1.2-.5-1.2-1.2v-2.3c0-.7.5-1.2 1.2-1.2h13.8c.7 0 1.2.5 1.2 1.2v2.3zm0-9.3c0 .7-.5 1.2-1.2 1.2H37.3c-.7 0-1.2-.5-1.2-1.2V35c0-.7.5-1.2 1.2-1.2h34.6c.7 0 1.2.5 1.2 1.2v6.9z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_insights";
freezeTemplate(tmpl);
