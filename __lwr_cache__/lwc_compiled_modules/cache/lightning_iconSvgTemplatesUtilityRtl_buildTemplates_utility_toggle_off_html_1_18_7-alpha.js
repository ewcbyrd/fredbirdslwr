import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./toggle_off.css";

import _implicitScopedStylesheets from "./toggle_off.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M39.2 15.25c6 0 10.8 4.7 10.8 10.7s-4.8 10.8-10.8 10.8H12.4c-5.8-.2-10.4-5-10.4-10.8s4.6-10.5 10.4-10.7h26.8zm.4 3.2H12.3l-.4.03c-3.81.39-6.8 3.61-6.8 7.57s3.2 7.4 7.2 7.6h27.3l.4-.03c3.81-.39 6.8-3.61 6.8-7.57s-3.2-7.4-7.2-7.6zm-26.91 2.3c2.87 0 5.2 2.33 5.2 5.2s-2.33 5.2-5.2 5.2-5.2-2.33-5.2-5.2 2.33-5.2 5.2-5.2z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_toggle_off";
freezeTemplate(tmpl);
