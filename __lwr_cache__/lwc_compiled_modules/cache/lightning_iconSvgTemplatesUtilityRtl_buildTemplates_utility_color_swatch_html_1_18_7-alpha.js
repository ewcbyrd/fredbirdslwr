import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./color_swatch.css";

import _implicitScopedStylesheets from "./color_swatch.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M35.435 9.494l7.071 7.071.002-.002a4 4 0 010 5.657l-.002.002L24 40.703V15.264l5.777-5.771h.001a4 4 0 015.656.002l.001-.001zM50 36v10a4 4 0 01-4 4H21l18-18h7a4 4 0 014 4zM2 41.046V6a4 4 0 014-4h10a4 4 0 014 4v35.046a9 9 0 01-18 0zM11 45a4 4 0 100-8 4 4 0 000 8z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_color_swatch";
freezeTemplate(tmpl);
