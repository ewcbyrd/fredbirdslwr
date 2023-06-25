import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./app.css";

import _implicitScopedStylesheets from "./app.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M62 28H31.5c-1.7 0-3.1 1.4-3.1 3.1v30.5h-4.6c-2.1 0-3.8-1.7-3.8-3.8V23.3c0-2.1 1.7-3.8 3.8-3.8h34.5c2.1 0 3.8 1.7 3.8 3.8V28z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M41.8 37.6h34.5c2.1 0 3.8 1.7 3.8 3.8v34.5c0 2.1-1.7 3.8-3.8 3.8H41.8c-2.1 0-3.8-1.7-3.8-3.8V41.3c0-2 1.7-3.7 3.8-3.7z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_app";
freezeTemplate(tmpl);
