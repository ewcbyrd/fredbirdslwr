import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_case.css";

import _implicitScopedStylesheets from "./new_case.scoped.css?scoped=true";

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
    "d": "M15 13h4c.6 0 1-.4 1-1v-2h12v2c0 .6.4 1 1 1h4c.6 0 1-.4 1-1V9.5c0-3-2.5-5.5-5.5-5.5H19.4c-3 0-5.4 2.4-5.4 5.4V12c0 .6.4 1 1 1zM46 17H6c-2.2 0-4 1.8-4 4v23c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V21c0-2.2-1.8-4-4-4z"
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
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("path", stc2)])])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesAction_new_case";
freezeTemplate(tmpl);
