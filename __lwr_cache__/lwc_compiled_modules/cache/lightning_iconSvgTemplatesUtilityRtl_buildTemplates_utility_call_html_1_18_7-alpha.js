import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./call.css";

import _implicitScopedStylesheets from "./call.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M48.5 37.9L42.4 33c-1.4-1.1-3.4-1.2-4.8-.1l-5.2 3.8c-.6.5-1.5.4-2.1-.2l-7.8-7-7-7.8c-.6-.6-.6-1.4-.2-2.1l3.8-5.2c1.1-1.4 1-3.4-.1-4.8l-4.9-6.1c-1.5-1.8-4.2-2-5.9-.3L3 8.4c-.8.8-1.2 1.9-1.2 3 .5 10.2 5.1 19.9 11.9 26.7S30.2 49.5 40.4 50c1.1.1 2.2-.4 3-1.2l5.2-5.2c1.9-1.5 1.8-4.3-.1-5.7z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_call";
freezeTemplate(tmpl);
