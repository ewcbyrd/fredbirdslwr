import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./orders.css";

import _implicitScopedStylesheets from "./orders.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M49.04 35.67l-2.88-1.36c-.4-.24-.96-.24-1.36 0l-17.2 8.16c-.96.48-2.16.48-3.12 0L7.19 34.31c-.4-.24-.96-.24-1.36 0l-2.88 1.36c-1.28.64-1.28 2.32 0 2.96l21.44 10.16c.96.48 2.16.48 3.12 0l21.44-10.16c1.36-.64 1.36-2.4.08-2.96z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M49.04 24.47l-2.96-1.36c-.4-.24-.96-.24-1.36 0L27.6 31.27c-.96.48-2.16.48-3.12 0L7.27 23.11c-.4-.24-.96-.24-1.36 0l-2.96 1.36c-1.28.64-1.28 2.32 0 2.96l21.44 10.24c.96.48 2.16.48 3.12 0l21.44-10.16c1.36-.64 1.36-2.4.08-3.04z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M2.95 16.23l21.44 10.16c.96.48 2.16.48 3.12 0l21.44-10.16c1.28-.64 1.28-2.32 0-2.96L27.52 3.11a3.56 3.56 0 00-3.12 0L2.95 13.35a1.56 1.56 0 000 2.88z"
  },
  key: 4,
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
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2), api_element("path", stc3)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_orders";
freezeTemplate(tmpl);
