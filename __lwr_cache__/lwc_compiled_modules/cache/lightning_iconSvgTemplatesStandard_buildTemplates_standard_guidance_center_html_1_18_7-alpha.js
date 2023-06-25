import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./guidance_center.css";

import _implicitScopedStylesheets from "./guidance_center.scoped.css?scoped=true";

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
    "height": "7.26",
    "rx": "1.81",
    "width": "7.25",
    "x": "20.02",
    "y": "20.05"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "height": "7.33",
    "rx": "1.83",
    "width": "42",
    "x": "32.24",
    "y": "20.05"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "height": "7.33",
    "rx": "1.83",
    "width": "42",
    "x": "32.24",
    "y": "35.04"
  },
  key: 5,
  svg: true
};
const stc5 = {
  attrs: {
    "height": "7.33",
    "rx": "1.83",
    "width": "7.33",
    "x": "20.02",
    "y": "35.04"
  },
  key: 6,
  svg: true
};
const stc6 = {
  attrs: {
    "height": "7.33",
    "rx": "1.83",
    "width": "7.33",
    "x": "20.02",
    "y": "50.03"
  },
  key: 7,
  svg: true
};
const stc7 = {
  attrs: {
    "d": "M63.71 47.42A16.18 16.18 0 1079.89 63.6a16.22 16.22 0 00-16.18-16.18zm0 28A11.87 11.87 0 1175.58 63.6a11.9 11.9 0 01-11.87 11.86zM70 56.64l-9 3.24a1.61 1.61 0 00-1 1l-3.23 8.95a.55.55 0 00.7.7l8.95-3.23a1.59 1.59 0 001-1l3.24-9a.55.55 0 00-.66-.66zm-6.26 9.11a2.16 2.16 0 112.16-2.15 2.16 2.16 0 01-2.19 2.15zM47.61 50H34.07a1.87 1.87 0 00-1.83 1.83v3.66a1.88 1.88 0 001.83 1.84h9.52A20.89 20.89 0 0147.61 50z"
  },
  key: 8,
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
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("rect", stc2), api_element("rect", stc3), api_element("rect", stc4), api_element("rect", stc5), api_element("rect", stc6), api_element("path", stc7)])])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_guidance_center";
freezeTemplate(tmpl);
