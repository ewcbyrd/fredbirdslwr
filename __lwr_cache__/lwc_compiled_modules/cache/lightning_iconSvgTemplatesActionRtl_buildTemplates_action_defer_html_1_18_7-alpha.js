import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./defer.css";

import _implicitScopedStylesheets from "./defer.scoped.css?scoped=true";

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
    "d": "M26 2C12.8 2 2 12.8 2 26s10.8 24 24 24 24-10.8 24-24S39.2 2 26 2zm0 42c-9.9 0-18-8.1-18-18S16.1 8 26 8s18 8.1 18 18-8.1 18-18 18z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M29.4 26.2c-.3-.3-.4-.7-.4-1.1v-9.6c0-.8-.7-1.5-1.5-1.5h-3c-.8 0-1.5.7-1.5 1.5v12.1c0 .4.2.8.4 1.1l7.4 7.4c.6.6 1.5.6 2.1 0L35 34c.6-.6.6-1.5 0-2.1l-5.6-5.7z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesActionRtl_defer";
freezeTemplate(tmpl);
