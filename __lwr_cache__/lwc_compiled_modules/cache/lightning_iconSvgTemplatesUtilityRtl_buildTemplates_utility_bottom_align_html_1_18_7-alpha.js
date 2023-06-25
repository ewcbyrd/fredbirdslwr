import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./bottom_align.css";

import _implicitScopedStylesheets from "./bottom_align.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "x": "2",
    "y": "43.6",
    "width": "48",
    "height": "6.4",
    "rx": "1.6"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "data-name": "Rectangle",
    "x": "18.8",
    "y": "2",
    "width": "14.4",
    "height": "37.6",
    "rx": "3.2"
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
  }, [api_element("g", stc0, [api_element("rect", stc1), api_element("rect", stc2)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_bottom_align";
freezeTemplate(tmpl);
