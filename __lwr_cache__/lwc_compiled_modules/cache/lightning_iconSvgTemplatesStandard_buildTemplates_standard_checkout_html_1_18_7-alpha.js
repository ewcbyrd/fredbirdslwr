import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./checkout.css";

import _implicitScopedStylesheets from "./checkout.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M65.84 51.69a14.16 14.16 0 11-14.15 14.15 14.2 14.2 0 0114.15-14.15zM43 64.54a5 5 0 11-5 5 5 5 0 015-5zm28-4.46l-7.58 8.49L60 65.14a1 1 0 00-1.42 0l-1.41 1.31a.86.86 0 000 1.32L62 72.52a2 2 0 001.42.6 1.84 1.84 0 001.41-.6l9-9.81a1 1 0 000-1.31l-1.41-1.32a1 1 0 00-1.42 0zM27.75 20a3 3 0 012.8 2.12l.78 2.7h44.13a1.87 1.87 0 011.84 2.41l-5.23 18.3a1.81 1.81 0 01-.65 1 19.75 19.75 0 00-5.58-.8A20 20 0 0059 47H41.68a2.75 2.75 0 00-2.61 3.66v.1a2.82 2.82 0 002.71 2h8.87a20.26 20.26 0 00-3.5 5.78h-9.63a2.9 2.9 0 01-2.8-2.12l-9.1-30.64h-2.71A3 3 0 0120 22.7a3.06 3.06 0 013.1-2.7h4.65z"
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
      "viewBox": "0 0 100 100",
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_checkout";
freezeTemplate(tmpl);
