import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./collection_alt.css";

import _implicitScopedStylesheets from "./collection_alt.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M13.75 2A2.87 2.87 0 0011 5a2.87 2.87 0 002.75 3h24.5A2.87 2.87 0 0041 5a2.87 2.87 0 00-2.75-3zM7 15a2.87 2.87 0 012.75-3h32.5A2.87 2.87 0 0145 15a2.87 2.87 0 01-2.75 3H9.75A2.87 2.87 0 017 15z",
    "fill-rule": "evenodd"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "x": "2",
    "y": "22",
    "width": "48",
    "height": "28",
    "rx": "4"
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
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("rect", stc2)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_collection_alt";
freezeTemplate(tmpl);
