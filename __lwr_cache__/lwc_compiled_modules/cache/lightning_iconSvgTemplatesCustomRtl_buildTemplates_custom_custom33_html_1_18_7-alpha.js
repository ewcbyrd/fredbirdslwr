import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom33.css";

import _implicitScopedStylesheets from "./custom33.scoped.css?scoped=true";

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
    "d": "M65 42H36c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h29c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2zm-14 9c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M80 28H20c-1.1 0-2 .9-2 2v2c0 2.2 1.8 4 4 4v36c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2V36h45v36c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2V36h-1c2.2 0 4-1.8 4-4v-2c0-1.1-.9-2-2-2z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustomRtl_custom33";
freezeTemplate(tmpl);
