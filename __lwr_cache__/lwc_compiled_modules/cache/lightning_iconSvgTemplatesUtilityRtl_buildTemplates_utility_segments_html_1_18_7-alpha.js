import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./segments.css";

import _implicitScopedStylesheets from "./segments.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M49.37 22.01l-.81-2.27-18.41 6.57-.41 1.05c-.26.75-.74 1.4-1.38 1.87a3.974 3.974 0 01-6.33-3.25c.01-1.1.41-2.17 1.14-3l.49-.65V1.89l-2.92.65a23.518 23.518 0 00-13.06 8.03c-3.59 4.3-5.57 9.72-5.6 15.33 0 13.26 10.76 24 24.01 24 13.25 0 23.99-10.75 24-24-.06-1.33-.31-2.63-.73-3.89zm-9.81 17.6a18.957 18.957 0 01-13.54 5.6c-5.08 0-9.95-2.01-13.54-5.6-7-7-7.5-18.2-1.14-25.79 2.03-2.42 4.62-4.31 7.54-5.51v12.57a9.338 9.338 0 00-1.62 5.19c-.01 2.35.92 4.6 2.6 6.24a8.956 8.956 0 006.24 2.6c1.87 0 3.69-.59 5.19-1.7a8.44 8.44 0 002.6-3l11.35-4.05a19.33 19.33 0 01-5.68 13.46z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M30.56 21.03l15.81-5.6c.45-.13.71-.6.58-1.05a.782.782 0 00-.18-.32l-.16-.32A24.057 24.057 0 0029.82 2.39c-.7-.1-1.35.39-1.45 1.09 0 .07-.01.14-.01.21v15.89c0 .19.02.38.08.57.34.83 1.28 1.23 2.11.89z"
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
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_segments";
freezeTemplate(tmpl);
