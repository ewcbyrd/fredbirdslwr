import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./checkout.css";

import _implicitScopedStylesheets from "./checkout.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M38.67 27.35a11.33 11.33 0 11-11.32 11.32 11.34 11.34 0 0111.32-11.32zM20.36 37.63a4 4 0 11-4 4 4 4 0 014-4zm22.44-3.56l-6.06 6.79L34 38.09a.79.79 0 00-1.11 0l-1.11 1.07a.7.7 0 00-.07 1l.07.08L35.6 44a1.62 1.62 0 001.14.48 1.47 1.47 0 001.13-.48l7.19-7.87a.83.83 0 000-1l-1.12-1.05a.79.79 0 00-1.11 0zM8.2 2a2.42 2.42 0 012.25 1.7l.62 2.16h35.29a1.5 1.5 0 011.54 1.45 1.24 1.24 0 01-.06.47l-4.18 14.65a1.42 1.42 0 01-.52.82 16.42 16.42 0 00-4.47-.64 16 16 0 00-5.47 1H19.36a2.2 2.2 0 00-2.22 2.18 2.11 2.11 0 00.13.75v.08a2.26 2.26 0 002.17 1.62h7.1a16 16 0 00-2.77 4.61H16a2.32 2.32 0 01-2.25-1.7L6.5 6.62H4.33A2.37 2.37 0 012 4.22v-.06A2.46 2.46 0 014.48 2H8.2z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_checkout";
freezeTemplate(tmpl);
