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
    "cx": "46.7",
    "cy": "26",
    "r": "3.4"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "cx": "25.9",
    "cy": "26",
    "r": "3.4"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "cx": "5.4",
    "cy": "26",
    "r": "3.4"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "d": "M11.6 26c0 7.9 6.5 14.4 14.4 14.4S40.3 33.9 40.3 26 33.9 11.6 26 11.6 11.6 18.1 11.6 26zm23.9 0c0 5.3-4.3 9.6-9.6 9.6s-9.6-4.3-9.6-9.6 4.3-9.6 9.6-9.6 9.6 4.3 9.6 9.6z"
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
      "viewBox": "0 0 52 52",
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_stage";
freezeTemplate(tmpl);
