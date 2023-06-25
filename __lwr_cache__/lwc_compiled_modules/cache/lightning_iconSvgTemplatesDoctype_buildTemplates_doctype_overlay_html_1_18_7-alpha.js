import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./overlay.css";

import _implicitScopedStylesheets from "./overlay.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M5.15.008A5.073 5.073 0 00.078 5.082v53.841a5.073 5.073 0 005.072 5.074h45.775a5.074 5.074 0 005.074-5.074V20.317L37.096.008H5.15z",
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    "fill": "#730394"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M10.123 34.515v14.081h14.694V34.515H10.123zm5.344 5.343v14.081h14.694V39.858H15.467z",
    "fill": "#fff"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "fill": "#E5B9FE",
    "d": "M15.467 39.858h9.351v8.737h-9.351z"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd"
  },
  key: 5,
  svg: true
};
const stc5 = {
  attrs: {
    "d": "M55.977 20.352v1H43.178s-6.312-1.26-6.129-6.707c0 0 .208 5.707 6.004 5.707h12.924z",
    "fill": "#3D0157"
  },
  key: 6,
  svg: true
};
const stc6 = {
  attrs: {
    "d": "M37.074 0v14.561c0 1.656 1.104 5.791 6.104 5.791h12.799L37.074 0z",
    "fill": "#E5B9FE"
  },
  key: 7,
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
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2), api_element("path", stc3), api_element("g", stc4, [api_element("path", stc5), api_element("path", stc6)])])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesDoctype_overlay";
freezeTemplate(tmpl);
