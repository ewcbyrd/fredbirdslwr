import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./stypi.css";

import _implicitScopedStylesheets from "./stypi.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    "fill": "#FCC003",
    "d": "M5.1 0C2.3 0 0 2.3 0 5.1v53.8C0 61.7 2.3 64 5.1 64h45.7c2.8 0 5.1-2.3 5.1-5.1V20.3L37 0H5.1z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    "fill": "#E4A201",
    "d": "M56 20.4v1H43.2s-6.3-1.3-6.2-6.8c0 0 .3 5.8 6.1 5.8H56z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    "fill": "#F9E3B6",
    "d": "M37.1 0v14.6c0 1.6 1.1 5.8 6.1 5.8H56L37.1 0z"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    "fill": "#2E2204",
    "d": "M10.2 36.4v11.5l6.1 6h13.1c.9 0 1.6-.7 1.6-1.5v-16c0-.9-.7-1.6-1.6-1.6H11.8c-.9 0-1.6.7-1.6 1.6z"
  },
  key: 5,
  svg: true
};
const stc5 = {
  attrs: {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    "fill": "#FCC003",
    "d": "M27.5 45.2H13.8v-1.6h13.7v1.6zm0-3.6H13.8V40h13.7v1.6zm0 7.2h-8.9v-1.7h8.9v1.7z"
  },
  key: 6,
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
      "viewBox": "0 0 56 64",
      "part": "icon"
    },
    key: 0,
    svg: true
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2), api_element("path", stc3), api_element("path", stc4), api_element("path", stc5)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesDoctypeRtl_stypi";
freezeTemplate(tmpl);
