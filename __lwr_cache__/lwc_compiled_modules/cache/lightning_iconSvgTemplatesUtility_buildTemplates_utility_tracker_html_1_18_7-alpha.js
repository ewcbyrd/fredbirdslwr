import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./tracker.css";

import _implicitScopedStylesheets from "./tracker.scoped.css?scoped=true";

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
    "d": "M15.2 28.4V24c5.1-.9 9-5.4 9-10.8 0-6.1-4.9-11-11-11s-11 4.9-11 11c0 5.4 3.9 9.9 9 10.8v4.4c-5.1.9-9 5.4-9 10.8 0 6.1 4.9 11 11 11s11-4.9 11-11c0-5.4-3.9-9.8-9-10.8zm-9-15.2c0-3.9 3.1-7 7-7s7 3.1 7 7-3.1 7-7 7-7-3-7-7zM30.3 9.2h17.9c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2H30.3c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2zM30.3 35.2h17.9c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2H30.3c-1.1 0-2-.9-2-2v-4c0-1 .9-2 2-2z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_tracker";
freezeTemplate(tmpl);
