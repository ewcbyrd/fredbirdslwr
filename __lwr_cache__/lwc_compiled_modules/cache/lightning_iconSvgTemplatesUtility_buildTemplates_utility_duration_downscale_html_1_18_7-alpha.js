import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./duration_downscale.css";

import _implicitScopedStylesheets from "./duration_downscale.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M17.08 2H8a6 6 0 00-6 6v5.68a6 6 0 006.08 5.92h9.06a6 6 0 006-6V7.94A6 6 0 0017.08 2zm-3.26 12.8h-2.5a4 4 0 010-8h2.5a4 4 0 010 8zM34.5 19.6h9.06a6 6 0 006-6V7.94A6 6 0 0043.5 2h-9.06a6 6 0 00-6 6v5.66a6 6 0 006.06 5.94zm3.24-12.8h2.5a4 4 0 010 8h-2.5a4 4 0 010-8zM17.08 24.4H8a6 6 0 00-6 6v5.68A6 6 0 008.08 42h9.06a6 6 0 006-6v-5.66a6 6 0 00-6.06-5.94zm-3.26 12.8h-2.5a4 4 0 110-8h2.5a4 4 0 010 8zM49.83 40.12a.84.84 0 00-.23-.23l-1.84-1.52a1.42 1.42 0 00-1.84 0L42.82 41c-.53.45-1.45.17-1.45-.5v-15a1.27 1.27 0 00-1.32-1.12h-2.63a1.33 1.33 0 00-1.32 1.12v14.95c0 .67-.92.95-1.45.5l-3.09-2.58a1.44 1.44 0 00-1.85 0l-1.77 1.52a.92.92 0 00-.23 1.28.84.84 0 00.23.23l9.88 8.26a1.42 1.42 0 001.84 0l9.94-8.26a.92.92 0 00.23-1.28z"
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
      "viewBox": "0 0 52 52",
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_duration_downscale";
freezeTemplate(tmpl);
