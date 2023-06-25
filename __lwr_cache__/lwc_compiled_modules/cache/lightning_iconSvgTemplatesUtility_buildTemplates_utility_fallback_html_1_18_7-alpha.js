import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./fallback.css";

import _implicitScopedStylesheets from "./fallback.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M28 3.5l-3 14.6c0 .6.4.9.9.9h15.6c1.1 0 1.8 1.3 1.3 2.3l-17 27.9c-.7 1.4-2.8.9-2.8-.7l3-17.2c0-.6-.5-.4-1.1-.4H8.5c-1.1 0-1.9-1.6-1.3-2.6l18-25.5c.7-1.3 2.8-.9 2.8.7z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_fallback";
freezeTemplate(tmpl);
