import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./service_territory_policy.css";

import _implicitScopedStylesheets from "./service_territory_policy.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M39.79 20H26.61A6.36 6.36 0 0020 26.11v10.14a6.37 6.37 0 006.59 6.09h13.2a6.36 6.36 0 006.58-6.09V26.11A6.35 6.35 0 0039.79 20zm-5.5 16.23H32.1a5.29 5.29 0 01-5.49-5.08 5.28 5.28 0 015.49-5.06h2.19a5.29 5.29 0 015.5 5.06 5.3 5.3 0 01-5.5 5.1zM59.54 42.34h13.18a6.37 6.37 0 006.59-6.09V26.11A6.36 6.36 0 0072.72 20H59.54A6.35 6.35 0 0053 26.11v10.14a6.35 6.35 0 006.54 6.09zM65 26.11h2.2a5.28 5.28 0 015.49 5.06 5.29 5.29 0 01-5.49 5.08H65a5.3 5.3 0 01-5.49-5.08A5.28 5.28 0 0165 26.11zM39.79 48.42H26.61A6.35 6.35 0 0020 54.51v10.13a6.35 6.35 0 006.59 6.09h13.2a6.35 6.35 0 006.58-6.09V54.51a6.35 6.35 0 00-6.58-6.09zm-5.5 16.22H32.1a4.51 4.51 0 01-.9 0 5.08 5.08 0 11.9-10.13h2.19a4.51 4.51 0 01.9 0 5.08 5.08 0 11-.9 10.13zM66.47 48.42C59 48.42 53 54 53 61c0 8.68 9.67 16.62 12.66 18.72a1.46 1.46 0 001.77 0C70.43 77.55 80 69.72 80 61c0-7-6-12.58-13.53-12.58zm0 17.73a5.27 5.27 0 115.69-5.25 5.5 5.5 0 01-5.69 5.25z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_service_territory_policy";
freezeTemplate(tmpl);
