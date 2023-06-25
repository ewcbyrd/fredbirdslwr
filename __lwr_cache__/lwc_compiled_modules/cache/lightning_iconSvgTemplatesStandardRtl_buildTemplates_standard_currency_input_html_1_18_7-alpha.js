import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./currency_input.css";

import _implicitScopedStylesheets from "./currency_input.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M62.7 64.8c3.5-5.7 2.8-13.3-2.2-18.2-5.8-5.8-15.2-5.8-21 0-4.9 4.9-5.7 12.5-2.2 18.2h25.4z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M80 26v48c0 3.3-2.7 6-6 6H26c-3.3 0-6-2.7-6-6V26c0-3.3 2.7-6 6-6h48c3.3 0 6 2.7 6 6zM30 71.9h40c1.1 0 2-.9 2-2V30c0-1.1-.9-2-2-2H30c-1.1 0-2 .9-2 2v39.9c0 1.1.9 2 2 2z"
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
      "viewBox": "0 0 100 100",
      "part": "icon"
    },
    key: 0,
    svg: true
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_currency_input";
freezeTemplate(tmpl);
