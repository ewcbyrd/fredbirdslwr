import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./gpres.css";

import _implicitScopedStylesheets from "./gpres.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M5.111.009A5.073 5.073 0 00.039 5.083v53.841a5.073 5.073 0 005.072 5.074h45.775a5.074 5.074 0 005.074-5.074V20.318L37.057.009H5.111z",
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    "fill": "#FCC003"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M10.123 37.465v11.9H22.54v-11.9H10.123zm11.289 9.642h-10.16v-7.386h10.16v7.386zm.674-5.128v2.259h8.386v7.385h-10.16v-2.846h-1.129v5.104h12.419V41.979h-9.516z",
    "fill": "#2E2204"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "d": "M55.96 20.377v1H43.161s-6.312-1.26-6.129-6.707c0 0 .208 5.707 6.004 5.707H55.96z",
    "fill": "#E4A201"
  },
  key: 5,
  svg: true
};
const stc5 = {
  attrs: {
    "d": "M37.058.025v14.561c0 1.656 1.104 5.791 6.104 5.791h12.799L37.058.025z",
    "fill": "#F9E3B6"
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
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2), api_element("g", stc3, [api_element("path", stc4), api_element("path", stc5)])])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesDoctype_gpres";
freezeTemplate(tmpl);
