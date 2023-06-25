import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./setup_modal.css";

import _implicitScopedStylesheets from "./setup_modal.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M78.12 20H21.88c-1 0-1.88.88-1.88 1.88v40.5c0 1 .88 1.88 1.88 1.88h56.25c1 0 1.88-.88 1.88-1.88v-40.5c0-1-.88-1.88-1.88-1.88z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M57.5 72.5c1.37 0 2.5 1.13 2.5 2.5s-1.13 2.5-2.5 2.5S55 76.37 55 75s1.12-2.5 2.5-2.5m0-2.5c-2.75 0-5 2.25-5 5s2.25 5 5 5 5-2.25 5-5-2.25-5-5-5z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "cx": "42.5",
    "cy": "75",
    "r": "5"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "cx": "27.5",
    "cy": "75",
    "r": "5"
  },
  key: 5,
  svg: true
};
const stc5 = {
  attrs: {
    "cx": "72.5",
    "cy": "75",
    "r": "5"
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
      "viewBox": "0 0 100 100",
      "part": "icon"
    },
    key: 0,
    svg: true
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2), api_element("circle", stc3), api_element("circle", stc4), api_element("circle", stc5)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_setup_modal";
freezeTemplate(tmpl);
