import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./data_mapping.css";

import _implicitScopedStylesheets from "./data_mapping.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M44.5 21a5.5 5.5 0 11-4.9 8h-.91c-5.39.06-7.29 1.7-10.31 7.34l-.17.33-.2.38c-1.8 3.37-2.82 4.9-4.66 6.52C20.76 45.84 17.42 47 13 47h-.6a5.5 5.5 0 110-5h.91c5.49-.06 7.36-1.76 10.48-7.67L24 34a27.18 27.18 0 013.11-5H12.4a5.5 5.5 0 110-5h27.2a5.53 5.53 0 014.68-3zm0-19a5.5 5.5 0 11-4.9 8H12.4a5.5 5.5 0 110-5h27.2a5.5 5.5 0 014.9-3z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_data_mapping";
freezeTemplate(tmpl);
