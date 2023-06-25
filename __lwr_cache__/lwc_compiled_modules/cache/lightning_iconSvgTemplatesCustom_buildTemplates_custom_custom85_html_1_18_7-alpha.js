import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom85.css";

import _implicitScopedStylesheets from "./custom85.scoped.css?scoped=true";

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
    "d": "M78 24H28v-2c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v56c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2V32h50c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M74 38H40c-3.3 0-6 2.7-6 6v22c0 3.3 2.7 6 6 6h34c3.3 0 6-2.7 6-6V44c0-3.3-2.7-6-6-6zm-5.5 17H66v10c0 .6-.4 1-1 1h-4c-.6 0-1-.4-1-1v-6c0-.6-.4-1-1-1h-4c-.6 0-1 .4-1 1v6c0 .6-.4 1-1 1h-4c-.6 0-1-.4-1-1V55h-2.5c-.5 0-.7-.6-.3-.9l11.2-10.9c.399-.3.899-.3 1.3 0l11.2 10.9c.3.3.1.9-.4.9z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustom_custom85";
freezeTemplate(tmpl);
