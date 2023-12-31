import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./price_sheet.css";

import _implicitScopedStylesheets from "./price_sheet.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M76.6 43.96a6.753 6.753 0 00-3.48-.96c-1.27 0-2.51.36-3.59 1.03A6.884 6.884 0 0067 46.82H33c-.7-1.4-1.85-2.52-3.25-3.18-1.4-.66-2.98-.82-4.48-.45-1.5.37-2.84 1.24-3.79 2.47-.96 1.23-1.48 2.76-1.48 4.33s.52 3.1 1.48 4.33 2.29 2.11 3.79 2.47c1.5.37 3.08.21 4.48-.45 1.4-.66 2.55-1.78 3.25-3.18h34a6.985 6.985 0 002.42 2.72c1.03.67 2.22 1.05 3.44 1.1 1.22.05 2.43-.24 3.51-.82a6.963 6.963 0 002.62-2.52c.64-1.06.99-2.28 1.01-3.52.02-1.24-.28-2.47-.88-3.56a6.969 6.969 0 00-2.52-2.62zM76.6 20.96a6.753 6.753 0 00-3.48-.96c-1.27 0-2.51.36-3.59 1.03A6.884 6.884 0 0067 23.82H33c-.7-1.4-1.85-2.52-3.25-3.18-1.4-.66-2.98-.82-4.48-.45-1.5.37-2.84 1.24-3.79 2.47-.96 1.23-1.48 2.76-1.48 4.33s.52 3.1 1.48 4.33 2.29 2.11 3.79 2.47c1.5.37 3.08.21 4.48-.45 1.4-.66 2.55-1.78 3.25-3.18h34a6.985 6.985 0 002.42 2.72c1.03.67 2.22 1.05 3.44 1.1 1.22.05 2.43-.24 3.51-.82a6.963 6.963 0 002.62-2.52c.64-1.06.99-2.28 1.01-3.52.02-1.24-.28-2.47-.88-3.56a6.969 6.969 0 00-2.52-2.62zM76.6 66.96a6.753 6.753 0 00-3.48-.96c-1.27 0-2.51.36-3.59 1.03A6.884 6.884 0 0067 69.82H33c-.7-1.4-1.85-2.52-3.25-3.18-1.4-.66-2.98-.82-4.48-.45-1.5.37-2.84 1.24-3.79 2.47-.96 1.23-1.48 2.76-1.48 4.33s.52 3.1 1.48 4.33 2.29 2.11 3.79 2.47c1.5.37 3.08.21 4.48-.45 1.4-.66 2.55-1.78 3.25-3.18h34a6.985 6.985 0 002.42 2.72c1.03.67 2.22 1.05 3.44 1.1 1.22.05 2.43-.24 3.51-.82a6.963 6.963 0 002.62-2.52c.64-1.06.99-2.28 1.01-3.52.02-1.24-.28-2.47-.88-3.56a6.969 6.969 0 00-2.52-2.62z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_price_sheet";
freezeTemplate(tmpl);
