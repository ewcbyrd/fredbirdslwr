import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./variation_products.css";

import _implicitScopedStylesheets from "./variation_products.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M45 28.2a1.13 1.13 0 00.7-1.2V5a1.31 1.31 0 00-1.4-1.4h-2.8A1.31 1.31 0 0040.1 5v16.8a7.33 7.33 0 014.9 6.4zM29.3 28.3h1.1a7.36 7.36 0 015.7-6.8V5a1.31 1.31 0 00-1.4-1.4h-5.4A1.31 1.31 0 0027.9 5v22a1.24 1.24 0 001.4 1.3zM16.6 3.7h-1.4a1.31 1.31 0 00-1.4 1.4v22a1.26 1.26 0 001.4 1.4h1.4a1.31 1.31 0 001.4-1.4V5a1.41 1.41 0 00-1.4-1.3zM8.9 3.7H3.5A1.24 1.24 0 002.1 5v22a1.37 1.37 0 001.4 1.4h5.4a1.31 1.31 0 001.4-1.4V5a1.34 1.34 0 00-1.4-1.3zM23.1 3.6H23A1.31 1.31 0 0021.6 5v22c-.1.8.5 1.3 1.5 1.3a1.31 1.31 0 001.4-1.4V5a1.31 1.31 0 00-1.4-1.4zM45.9 39.4a4.07 4.07 0 00-4 3.3h-5.4a.46.46 0 00-.4.5v.4a4.25 4.25 0 01-.2 1.1c-.1.2.2.5.4.5h5.8a3.84 3.84 0 003.7 2.4 4.19 4.19 0 004.1-4.1 4.1 4.1 0 00-4-4.1zM33.6 28.8a4 4 0 005.3 3.8l2.8 5.2c.2.2.4.3.6.2a2.85 2.85 0 011.4-.6.48.48 0 00.2-.6l-3-5.5a3.66 3.66 0 00.9-2.5 4.1 4.1 0 10-8.2 0zM35.1 34.6a10 10 0 01-1.4-.8c-.2-.2-.5-.1-.6.2l-2.8 5.4a1.27 1.27 0 00-.6-.1 4.09 4.09 0 102.8 1.1l2.8-5.2a.85.85 0 00-.2-.6z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_variation_products";
freezeTemplate(tmpl);
