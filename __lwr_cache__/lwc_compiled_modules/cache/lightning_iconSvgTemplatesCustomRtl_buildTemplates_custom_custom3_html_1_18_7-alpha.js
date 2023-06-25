import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom3.css";

import _implicitScopedStylesheets from "./custom3.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M50 38c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M80 50c0-3.5-8.4-5.3-9.7-8.4-1.3-3.2 3.3-10.4.9-12.8-2.4-2.4-9.601 2.2-12.8.9-3.1-1.3-4.9-9.7-8.4-9.7s-5.3 8.4-8.4 9.7c-3.2 1.3-10.4-3.3-12.8-.9-2.4 2.4 2.2 9.6.9 12.8-1.3 3.1-9.7 4.9-9.7 8.4s8.4 5.3 9.7 8.4c1.3 3.2-3.3 10.4-.9 12.8 2.4 2.399 9.6-2.2 12.8-.9 3.1 1.3 4.9 9.7 8.4 9.7s5.3-8.4 8.4-9.7c3.2-1.3 10.4 3.3 12.8.9 2.4-2.4-2.2-9.6-.9-12.8 1.3-3.1 9.7-4.9 9.7-8.4zM50 68c-9.9 0-18-8.1-18-18s8.1-18 18-18 18 8.1 18 18-8.1 18-18 18z"
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
      "viewBox": "0 0 100 100",
      "part": "icon"
    },
    key: 0,
    svg: true
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("path", stc2), api_element("path", stc3)])])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustomRtl_custom3";
freezeTemplate(tmpl);
