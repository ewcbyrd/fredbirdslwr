import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./serialized_product.css";

import _implicitScopedStylesheets from "./serialized_product.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M77 20H23a3 3 0 00-3 3v11.9a3 3 0 003 3h54a3 3 0 003-3V23a3 3 0 00-3-3zm-22.1 9a4.91 4.91 0 01-4.9 4.9 5 5 0 114.9-5.1zM77 41H23a3 3 0 00-3 3v11.9a3 3 0 003 3h54a3 3 0 003-3V44a3 3 0 00-3-3zm-30.1 8.9a4.81 4.81 0 01-4.9 5 5 5 0 114.9-5.1zm15 0a4.81 4.81 0 01-4.9 5 5 5 0 114.9-5.1zM77 62H23a3 3 0 00-3 3v12a3 3 0 003 3h54a3 3 0 003-3V65a3 3 0 00-3-3zm-37.1 8.9a4.81 4.81 0 01-4.9 5 5 5 0 114.9-5.1zm15 0a4.81 4.81 0 01-4.9 5 5 5 0 114.9-5.1zm15 0a4.81 4.81 0 01-4.9 5 5 5 0 114.9-5.1z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_serialized_product";
freezeTemplate(tmpl);
