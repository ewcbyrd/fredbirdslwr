import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./calculated_insights.css";

import _implicitScopedStylesheets from "./calculated_insights.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M44 6.81a6 6 0 00-4.77 9.56l-5 8.82h-.63a6 6 0 00-3 .81l-6.35-4.67A5.9 5.9 0 0024.4 20a6 6 0 10-10.73 3.67L8.52 33.2H8a5.94 5.94 0 00-3.69 1.25 6 6 0 108.41 1.08L17.89 26h.51a5.94 5.94 0 003-.8l6.35 4.67a5.9 5.9 0 00-.15 1.33 6 6 0 1010.78-3.58l5-8.82H44a6 6 0 100-12z",
    "fill-rule": "evenodd"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_calculated_insights";
freezeTemplate(tmpl);
