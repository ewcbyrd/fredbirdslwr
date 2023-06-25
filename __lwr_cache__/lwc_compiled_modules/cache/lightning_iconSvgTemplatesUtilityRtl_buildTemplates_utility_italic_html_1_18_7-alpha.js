import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./italic.css";

import _implicitScopedStylesheets from "./italic.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M38 12.3V11c0-1.1-.9-2-2-2H22c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2 1.7 0 3 1.6 2.6 3.2L21 35.8c-.3 1.3-1.4 2.2-2.6 2.2H16c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2-1.7 0-3-1.6-2.6-3.2L31 17.2c.3-1.3 1.4-2.2 2.6-2.2h1.7c1.5 0 2.7-1.2 2.7-2.7z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_italic";
freezeTemplate(tmpl);
