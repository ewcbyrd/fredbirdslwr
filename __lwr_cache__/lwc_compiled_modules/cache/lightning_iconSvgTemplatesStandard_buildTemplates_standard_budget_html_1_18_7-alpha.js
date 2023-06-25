import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./budget.css";

import _implicitScopedStylesheets from "./budget.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M75.63 20H24.38a1.93 1.93 0 00-1.88 1.88v6.25A1.92 1.92 0 0024.38 30h51.25a1.92 1.92 0 001.87-1.87v-6.25A1.93 1.93 0 0075.63 20zm-40 15H24.38a1.93 1.93 0 00-1.88 1.88v3.75a1.92 1.92 0 001.88 1.87h11.25a1.92 1.92 0 001.87-1.87v-3.75A1.93 1.93 0 0035.63 35zm20 0H44.38a1.92 1.92 0 00-1.88 1.88v3.75a1.92 1.92 0 001.88 1.87h11.24a1.92 1.92 0 001.88-1.87v-3.75A1.92 1.92 0 0055.62 35zm20 0H64.37a1.93 1.93 0 00-1.87 1.88v3.75a1.92 1.92 0 001.87 1.87h11.26a1.92 1.92 0 001.87-1.87v-3.75A1.93 1.93 0 0075.63 35zm-40 12.5H24.38a1.92 1.92 0 00-1.88 1.88v3.75A1.93 1.93 0 0024.38 55h11.25a1.93 1.93 0 001.87-1.87v-3.75a1.92 1.92 0 00-1.87-1.88zm20 0H44.38a1.92 1.92 0 00-1.88 1.88v3.75A1.92 1.92 0 0044.38 55h11.24a1.92 1.92 0 001.88-1.87v-3.75a1.92 1.92 0 00-1.88-1.88zm20 0H64.37a1.92 1.92 0 00-1.87 1.88v3.75A1.93 1.93 0 0064.37 55h11.26a1.93 1.93 0 001.87-1.87v-3.75a1.92 1.92 0 00-1.87-1.88zm-40 12.5H24.38a1.93 1.93 0 00-1.88 1.88v3.75a1.92 1.92 0 001.88 1.87h11.25a1.92 1.92 0 001.87-1.87v-3.75A1.93 1.93 0 0035.63 60zm20 0H44.38a1.92 1.92 0 00-1.88 1.88v3.75a1.92 1.92 0 001.88 1.87h11.24a1.92 1.92 0 001.88-1.87v-3.75A1.92 1.92 0 0055.62 60zm20 0H64.37a1.93 1.93 0 00-1.87 1.88v3.75a1.92 1.92 0 001.87 1.87h11.26a1.92 1.92 0 001.87-1.87v-3.75A1.93 1.93 0 0075.63 60zm-40 12.5H24.38a1.93 1.93 0 00-1.88 1.87v3.76A1.92 1.92 0 0024.38 80h11.25a1.92 1.92 0 001.87-1.87v-3.76a1.93 1.93 0 00-1.87-1.87zm20 0H44.38a1.92 1.92 0 00-1.88 1.87v3.76A1.92 1.92 0 0044.38 80h11.24a1.92 1.92 0 001.88-1.87v-3.76a1.92 1.92 0 00-1.88-1.87zm20 0H64.37a1.93 1.93 0 00-1.87 1.87v3.76A1.92 1.92 0 0064.37 80h11.26a1.92 1.92 0 001.87-1.87v-3.76a1.93 1.93 0 00-1.87-1.87z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_budget";
freezeTemplate(tmpl);
