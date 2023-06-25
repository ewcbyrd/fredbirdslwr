import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./swarm_request.css";

import _implicitScopedStylesheets from "./swarm_request.scoped.css?scoped=true";

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
    "cx": "20.15",
    "cy": "9.99",
    "r": "4.28"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "cx": "31.84",
    "cy": "9.99",
    "r": "4.28"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "cx": "11.36",
    "cy": "19.96",
    "r": "5.42"
  },
  key: 5,
  svg: true
};
const stc5 = {
  attrs: {
    "cx": "40.78",
    "cy": "19.96",
    "r": "5.42"
  },
  key: 6,
  svg: true
};
const stc6 = {
  attrs: {
    "cx": "26.07",
    "cy": "23.06",
    "r": "5.42"
  },
  key: 7,
  svg: true
};
const stc7 = {
  attrs: {
    "d": "M32.19 46.29a2.79 2.79 0 002.17-.93 3.1 3.1 0 00.93-2.17v-7a4.66 4.66 0 00-4.64-4.64h-9.3a4.66 4.66 0 00-4.64 4.64v7a3.18 3.18 0 003.1 3.1zM12 43.19v-7a9.13 9.13 0 012.63-6.42.81.81 0 00-.08-1.13.79.79 0 00-.46-.19H6.65A4.66 4.66 0 002 33.12v7a3.18 3.18 0 003.1 3.1zM46.9 43.19a2.84 2.84 0 002.17-.93 3.1 3.1 0 00.93-2.17v-7a4.66 4.66 0 00-4.65-4.65h-7.43a.77.77 0 00-.54 1.32A9.28 9.28 0 0140 36.22v7z"
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
      "viewBox": "0 0 52 52",
      "part": "icon"
    },
    key: 0,
    svg: true
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("circle", stc2), api_element("circle", stc3), api_element("circle", stc4), api_element("circle", stc5), api_element("circle", stc6), api_element("path", stc7)])])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_swarm_request";
freezeTemplate(tmpl);
