import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./asset_audit.css";

import _implicitScopedStylesheets from "./asset_audit.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M21.88 20.6h5a1.88 1.88 0 011.88 1.88v38.74a1.87 1.87 0 01-1.87 1.87h-5A1.87 1.87 0 0120 61.22V22.47a1.87 1.87 0 011.88-1.87zM73.13 20.6h5A1.88 1.88 0 0180 22.47v38.75a1.88 1.88 0 01-1.88 1.88h-5a1.87 1.87 0 01-1.87-1.87V22.47a1.88 1.88 0 011.88-1.87zM64.38 20.6h-3.76a2 2 0 00-1.87 2v15.5a1.19 1.19 0 00.75 1.12 23.32 23.32 0 015.62 4.13c.38.37 1.13.12 1.13-.38V22.6a2 2 0 00-1.87-2zM47.62 37.1A14.67 14.67 0 0150 37a14.67 14.67 0 012.38.13 1.22 1.22 0 001.37-1.25V22.6a2 2 0 00-1.87-2h-3.76a2 2 0 00-1.87 2v13.25a1.22 1.22 0 001.37 1.25zM34.88 43.35a18.67 18.67 0 015.74-4.13 1.3 1.3 0 00.63-1.12V22.6a2 2 0 00-1.87-2h-3.76a2 2 0 00-1.87 2V43c0 .47.63.72 1.13.35zM50 43a15.86 15.86 0 00-15.84 15.79A15.84 15.84 0 1050 43zm8.93 12.27l-10.05 11a2.07 2.07 0 01-1.58.67 2.22 2.22 0 01-1.59-.67L40.36 61l-.1-.12a1 1 0 01.12-1.38l1.53-1.5a1.11 1.11 0 011.55 0l3.83 3.87 8.47-9.49a1.09 1.09 0 011.55 0l1.57 1.46a1.17 1.17 0 01.04 1.4z"
  },
  key: 2,
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
  }, [api_element("g", stc0, [api_element("path", stc1)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_asset_audit";
freezeTemplate(tmpl);
