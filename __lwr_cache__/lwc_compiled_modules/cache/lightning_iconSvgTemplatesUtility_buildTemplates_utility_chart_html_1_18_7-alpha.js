import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./chart.css";

import _implicitScopedStylesheets from "./chart.scoped.css?scoped=true";

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
    "d": "M45.5 23.4L25 34.7c-1.4.7-3-.3-3-1.8V8.4c0-1-1-1.8-1.9-1.5-10 2.8-17.2 12.5-16 23.6 1.1 10.1 9.2 18.3 19.4 19.4C36.8 51.3 48 41 48 28c0-1.2-.1-2.4-.3-3.6-.2-1-1.3-1.5-2.2-1z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M27.7 28l19.7-10.5c1.2-.6 1.6-2.2.8-3.3C43.7 8 36.7 3.5 28.7 2.2 27.3 1.9 26 3 26 4.4V27c0 .9.9 1.4 1.7 1z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_chart";
freezeTemplate(tmpl);
