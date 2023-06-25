import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./gdoc.css";

import _implicitScopedStylesheets from "./gdoc.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    "fill": "#1B96FF",
    "d": "M5.1 0C2.3 0 0 2.3 0 5.1v53.8C0 61.7 2.3 64 5.1 64h45.8c2.8 0 5.1-2.3 5.1-5.1V20.3L37.1 0h-32z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "fill": "#FFF",
    "d": "M31.7 39.5H10.1v-2.1h21.6v2.1zm0 4.8H10.1v-2.1h21.6v2.1zm0 4.8H10.1V47h21.6v2.1zm0 4.8H19.4v-2.1h12.3v2.1z"
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
    "fill": "#0B5CAB",
    "d": "M56 20.4v1H43.2s-6.4-1.3-6.2-6.7c0 0 .2 5.7 6 5.7h13z"
  },
  key: 5,
  svg: true
};
const stc5 = {
  attrs: {
    "fill": "#AACBFF",
    "d": "M37.1 0v14.6c0 1.6 1.1 5.8 6.1 5.8H56L37.1 0z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesDoctypeRtl_gdoc";
freezeTemplate(tmpl);
