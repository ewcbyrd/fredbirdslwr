import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./steps.css";

import _implicitScopedStylesheets from "./steps.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M73 80.3h-8.8v-6H73v6zm0-2.9v-.1.1zm-17.6 2.9h-8.8v-6h8.8v6zm-17.5 0h-8.8v-6h8.8v6zm-11.8-7.4h-6v-8.8h6v8.8zm53.8-2.1h-6V62h6v8.8zM26.1 55.4h-6v-8.8h6v8.8zm53.8-2.1h-6v-8.8h6v8.8zM26.1 37.9h-6v-8.8h6v8.8zm53.8-2.1h-6V27h6v8.8zm-9.1-10.1H62v-6h8.8v6zm-17.5 0h-8.8v-6h8.8v6zm-17.5 0h-8.7v-6h8.8v6z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_steps";
freezeTemplate(tmpl);
