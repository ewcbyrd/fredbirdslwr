import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./practitioner_role.css";

import _implicitScopedStylesheets from "./practitioner_role.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M50.58 70.89a12.79 12.79 0 01-10.11-9.62 1.93 1.93 0 00-1.89-1.51h-1.89A1.94 1.94 0 0034.81 62a18.2 18.2 0 0017.83 14.74H53a17.14 17.14 0 01-2.42-5.85zM54.24 37.12V23a2.78 2.78 0 00-2.83-2.83h-3.77a2.83 2.83 0 100 5.66h.94v11.29a11.32 11.32 0 01-22.64 0V25.8h.94a2.83 2.83 0 100-5.66h-3.77A2.78 2.78 0 0020.28 23v14.12a17 17 0 0034 0zM67.3 54.58a12.63 12.63 0 1012.63 12.63A12.67 12.67 0 0067.3 54.58zm7.1 17.67a1.88 1.88 0 01-1.89 1.81H62.42a1.83 1.83 0 01-1.89-1.81V72c0-1.69 1.85-2.6 3.78-3.38 1.3-.56 1.5-1 1.5-1.58a2.14 2.14 0 00-.81-1.49 3.48 3.48 0 01-1.18-2.76 3.67 3.67 0 117.33 0A3.7 3.7 0 0170 65.55a2.23 2.23 0 00-.88 1.45c0 .55.16 1 1.5 1.58 1.93.78 3.74 1.69 3.78 3.38z"
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
      "viewBox": "0 0 100 100",
      "part": "icon"
    },
    key: 0,
    svg: true
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("path", stc2)])])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_practitioner_role";
freezeTemplate(tmpl);
