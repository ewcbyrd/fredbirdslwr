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
    "d": "M78.8 62.1l-3.6-1.7c-.5-.3-1.2-.3-1.7 0L52 70.6c-1.2.6-2.7.6-3.9 0L26.5 60.4c-.5-.3-1.2-.3-1.7 0l-3.6 1.7c-1.6.8-1.6 2.9 0 3.7L48 78.5c1.2.6 2.7.6 3.9 0l26.8-12.7c1.7-.8 1.7-3 .1-3.7z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M78.8 48.1l-3.7-1.7c-.5-.3-1.2-.3-1.7 0L52 56.6c-1.2.6-2.7.6-3.9 0L26.6 46.4c-.5-.3-1.2-.3-1.7 0l-3.7 1.7c-1.6.8-1.6 2.9 0 3.7L48 64.6c1.2.6 2.7.6 3.9 0l26.8-12.7c1.7-.8 1.7-3 .1-3.8z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M21.2 37.8L48 50.5c1.2.6 2.7.6 3.9 0l26.8-12.7c1.6-.8 1.6-2.9 0-3.7L51.9 21.4c-1.2-.6-2.7-.6-3.9 0L21.2 34.2c-1.6.7-1.6 2.9 0 3.6z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_orders";
freezeTemplate(tmpl);
