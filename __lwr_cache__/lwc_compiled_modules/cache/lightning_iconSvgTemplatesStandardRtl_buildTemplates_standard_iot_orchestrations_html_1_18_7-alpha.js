import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./iot_orchestrations.css";

import _implicitScopedStylesheets from "./iot_orchestrations.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "fill-rule": "evenodd"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "cx": "39",
    "cy": "32",
    "r": "12"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "cx": "70",
    "cy": "50",
    "r": "12"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "fill-rule": "nonzero",
    "d": "M39 74a6 6 0 100-12 6 6 0 000 12zm0 6c-6.627 0-12-5.373-12-12s5.373-12 12-12 12 5.373 12 12-5.373 12-12 12zm6.728-38.662c3.582 4.407 8.307 6.98 14.07 7.675a2 2 0 10.479-3.971c-4.741-.571-8.522-2.631-11.445-6.227a2 2 0 10-3.104 2.523z"
  },
  key: 5,
  svg: true
};
const stc5 = {
  attrs: {
    "fill-rule": "nonzero",
    "d": "M43.287 58.624c2.3-5.192 2.449-10.57.45-16.022a2 2 0 10-3.755 1.377c1.644 4.484 1.525 8.788-.352 13.024a2 2 0 103.657 1.62zM47.963 25.753c3.782-2.078 7.668-2.308 11.824-.69 4.007 1.705 6.575 4.907 7.57 8.188.529 1.672.643 2.742.643 6.275a2 2 0 104 0c0-3.906-.154-5.344-.821-7.458-1.312-4.326-4.646-8.482-9.883-10.709-5.308-2.068-10.43-1.765-15.26.888a2 2 0 001.927 3.506zM47.963 74.278c3.782 2.078 7.668 2.308 11.824.689 4.007-1.705 6.575-4.906 7.57-8.187.529-1.672.643-2.742.643-6.276a2 2 0 114 0c0 3.907-.154 5.345-.821 7.459-1.312 4.325-4.646 8.481-9.883 10.708-5.308 2.068-10.43 1.765-15.26-.888a2 2 0 111.927-3.505z"
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
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("circle", stc2), api_element("circle", stc3), api_element("path", stc4), api_element("path", stc5)])])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_iot_orchestrations";
freezeTemplate(tmpl);
