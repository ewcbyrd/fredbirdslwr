import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./expense_report_entry.css";

import _implicitScopedStylesheets from "./expense_report_entry.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M37 31.6h20.4a1.84 1.84 0 001.9-1.9v-3.8a5.66 5.66 0 00-5.5-5.7h-13a5.59 5.59 0 00-5.5 5.7v3.8a1.74 1.74 0 001.7 1.9zM67.3 54.5A12.7 12.7 0 1080 67.2a12.72 12.72 0 00-12.7-12.7zm8.2 9.2L66.2 73a1.94 1.94 0 01-2.6 0L59 68.4a.85.85 0 010-1.3l1.3-1.3a.85.85 0 011.3 0l3.2 3.2 8.1-8.1a.85.85 0 011.3 0l1.3 1.3c.7.6.2 1.2 0 1.5z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M59.8 52.3a3.91 3.91 0 01-2.7-3.8H37.3a4 4 0 01-4 4V61a4 4 0 014 4h13.6a16.74 16.74 0 018.9-12.7zm-12.6 9.6a5.4 5.4 0 115.4-5.4 5.38 5.38 0 01-5.4 5.4z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M67.6 25h-1.9a.84.84 0 00-.9.9v3.8a7.56 7.56 0 01-7.4 7.6H37a7.49 7.49 0 01-7.4-7.6v-3.8a.84.84 0 00-.9-.9h-1.9a5.59 5.59 0 00-5.5 5.7v40.6a5.66 5.66 0 005.5 5.7H54a17 17 0 01-3.1-7.7H32.6a3.37 3.37 0 01-3.4-3.4V47.8a3.37 3.37 0 013.4-3.4H62a3.37 3.37 0 013.4 3.4v2.9a13.4 13.4 0 012-.1 15.75 15.75 0 015.8 1.1v-21a5.74 5.74 0 00-5.6-5.7z"
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
      "viewBox": "0 0 100 100",
      "part": "icon"
    },
    key: 0,
    svg: true
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2), api_element("path", stc3)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_expense_report_entry";
freezeTemplate(tmpl);
