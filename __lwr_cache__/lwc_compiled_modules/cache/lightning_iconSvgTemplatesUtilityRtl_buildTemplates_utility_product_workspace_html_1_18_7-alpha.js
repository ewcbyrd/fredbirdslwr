import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./product_workspace.css";

import _implicitScopedStylesheets from "./product_workspace.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M15.2 2.2a1.63 1.63 0 011.7 1.7V5a1.63 1.63 0 01-1.7 1.7h-5.1a3.4 3.4 0 00-3.4 3.2v32a3.4 3.4 0 003.2 3.4h32a3.4 3.4 0 003.4-3.2v-5.3a1.63 1.63 0 011.7-1.7h1.1a1.63 1.63 0 011.7 1.7V43a6.81 6.81 0 01-6.8 6.8H9A6.81 6.81 0 012.2 43V9A6.81 6.81 0 019 2.2z",
    "fill-rule": "evenodd"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M40.4 25.4l3.1-3.1a1 1 0 000-1.5L31 8.2a1 1 0 00-1.5 0l-3.1 3.1a1 1 0 000 1.5l12.5 12.5a1 1 0 001.5.1zM47.4 18.3l1.5-1.5a1 1 0 000-1.5L36.5 2.7a1 1 0 00-1.5 0l-1.5 1.5a1 1 0 000 1.5L46 18.3a1 1 0 001.4 0zM36.8 28.9c.6-.6.5-1.1.1-1.5L24.4 14.9a1 1 0 00-1.5 0l-.1.1a1 1 0 000 1.5L35.3 29a1 1 0 001.5-.1zM32.4 33.3l.7-.7a1 1 0 000-1.5L20.7 18.5a1 1 0 00-1.5 0l-.7.7a1 1 0 000 1.5L31 33.2c.3.6.9.6 1.4.1zM25.7 40.1l3.1-3.1a1 1 0 000-1.5L16.3 22.9a1 1 0 00-1.5 0L11.7 26a1 1 0 000 1.5L24.2 40a1 1 0 001.5.1z"
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
      "viewBox": "0 0 52 52",
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_product_workspace";
freezeTemplate(tmpl);
