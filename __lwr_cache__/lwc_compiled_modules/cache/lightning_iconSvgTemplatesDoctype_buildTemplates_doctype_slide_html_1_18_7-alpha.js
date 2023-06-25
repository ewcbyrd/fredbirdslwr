import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./slide.css";

import _implicitScopedStylesheets from "./slide.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M5.15.008A5.074 5.074 0 00.078 5.082v53.842a5.072 5.072 0 005.072 5.073h45.775a5.074 5.074 0 005.074-5.073V20.318L37.096.008H5.15z",
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    "fill": "#0D9DDA"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M10.121 34.772v19.09h19.918v-19.09H10.121zM28.226 50.24H11.931V38.396h16.295V50.24z",
    "fill": "#fff"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M55.977 20.352v1H43.178s-6.312-1.26-6.129-6.707c0 0 .208 5.707 6.004 5.707h12.924z",
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    "fill": "#05628A"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "d": "M37.074 0v14.561c0 1.656 1.104 5.791 6.104 5.791h12.799L37.074 0z",
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    "fill": "#90D0FE"
  },
  key: 5,
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
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2), api_element("path", stc3), api_element("path", stc4)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesDoctype_slide";
freezeTemplate(tmpl);
