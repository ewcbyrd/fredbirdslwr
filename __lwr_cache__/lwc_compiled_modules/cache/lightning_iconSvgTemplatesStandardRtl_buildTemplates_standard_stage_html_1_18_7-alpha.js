import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./stage.css";

import _implicitScopedStylesheets from "./stage.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "cx": "75.9",
    "cy": "50",
    "r": "4.2"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "cx": "49.8",
    "cy": "50",
    "r": "4.2"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "cx": "24.1",
    "cy": "50",
    "r": "4.2"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "d": "M31.9 50c0 9.9 8.1 18 18 18s18-8.1 18-18-8.1-18-18-18-18 8.1-18 18zm30 0c0 6.6-5.4 12-12 12s-12-5.4-12-12 5.4-12 12-12 12 5.4 12 12z"
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
      "viewBox": "0 0 100 100",
      "part": "icon"
    },
    key: 0,
    svg: true
  }, [api_element("g", stc0, [api_element("circle", stc1), api_element("circle", stc2), api_element("circle", stc3), api_element("path", stc4)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_stage";
freezeTemplate(tmpl);
