import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./org_chart.css";

import _implicitScopedStylesheets from "./org_chart.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "x": "34.78",
    "y": "2.83",
    "width": "13.16",
    "height": "13.15",
    "rx": "1.21"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "x": "34.78",
    "y": "35.52",
    "width": "13.16",
    "height": "13.15",
    "rx": "1.21"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M46.73 19.18H36a1.2 1.2 0 00-1.2 1.2v3.71h-7.38l-.16-14.65A1.5 1.5 0 0025.76 8H15.65V4a1.22 1.22 0 00-1.2-1.21H3.71A1.21 1.21 0 002.5 4v10.78A1.21 1.21 0 003.7 16h10.75a1.22 1.22 0 001.2-1.21V11h8.62l.17 14.64a1.51 1.51 0 001.5 1.49h8.84v4a1.21 1.21 0 001.22 1.2h10.73a1.22 1.22 0 001.2-1.21V20.38a1.2 1.2 0 00-1.2-1.2z"
  },
  key: 4,
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
  }, [api_element("g", stc0, [api_element("rect", stc1), api_element("rect", stc2), api_element("path", stc3)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_org_chart";
freezeTemplate(tmpl);
