import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./dial_in.css";

import _implicitScopedStylesheets from "./dial_in.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "cx": "10",
    "cy": "10",
    "r": "6"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "cx": "10",
    "cy": "26",
    "r": "6"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "cx": "26",
    "cy": "10",
    "r": "6"
  },
  key: 5,
  svg: true
};
const stc5 = {
  attrs: {
    "cx": "42",
    "cy": "10",
    "r": "6"
  },
  key: 6,
  svg: true
};
const stc6 = {
  attrs: {
    "cx": "26",
    "cy": "26",
    "r": "6"
  },
  key: 7,
  svg: true
};
const stc7 = {
  attrs: {
    "cx": "42",
    "cy": "26",
    "r": "6"
  },
  key: 8,
  svg: true
};
const stc8 = {
  attrs: {
    "cx": "10",
    "cy": "42",
    "r": "6"
  },
  key: 9,
  svg: true
};
const stc9 = {
  attrs: {
    "cx": "26",
    "cy": "42",
    "r": "6"
  },
  key: 10,
  svg: true
};
const stc10 = {
  attrs: {
    "cx": "42",
    "cy": "42",
    "r": "6"
  },
  key: 11,
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
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("circle", stc2), api_element("circle", stc3), api_element("circle", stc4), api_element("circle", stc5), api_element("circle", stc6), api_element("circle", stc7), api_element("circle", stc8), api_element("circle", stc9), api_element("circle", stc10)])])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesActionRtl_dial_in";
freezeTemplate(tmpl);
