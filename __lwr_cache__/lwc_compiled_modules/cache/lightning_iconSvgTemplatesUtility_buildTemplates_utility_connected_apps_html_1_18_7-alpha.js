import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./connected_apps.css";

import _implicitScopedStylesheets from "./connected_apps.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M23.8 31.2L20 48.8c-.2 1 1.1 1.7 1.7.9l21-26c.6-.7.1-1.7-.7-1.7H30.8c-.8 0-1.3-.9-.9-1.5l9.9-16.2c.6-1-.1-2.3-1.3-2.3H20.8c-1.1 0-2 .7-2.4 1.7L10.1 28c-.3 1 .4 2 1.4 2h11.4c.6 0 1.1.6.9 1.2z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_connected_apps";
freezeTemplate(tmpl);
