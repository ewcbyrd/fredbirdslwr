import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./meet_present_panel.css";

import _implicitScopedStylesheets from "./meet_present_panel.scoped.css?scoped=true";

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
    "d": "M31.54 4H10.17a4.15 4.15 0 00-4 3.93H4.82a2.69 2.69 0 00-2.69 2.68 2.62 2.62 0 002.67 2.53h1.34v5.33H4.82a2.62 2.62 0 10-.44 5.23 1.62 1.62 0 00.44 0h1.32V29H4.82a2.68 2.68 0 00-2.69 2.65 2.63 2.63 0 002.63 2.63h1.38a3.67 3.67 0 003.39 3.94 3.42 3.42 0 00.64 0H26V37a13.46 13.46 0 019.56-13V7.88A4 4 0 0031.54 4zm-8.62 25.68A1.35 1.35 0 0121.53 31H13.6a1.36 1.36 0 01-1.43-1.29v-1.34a1.37 1.37 0 011.41-1.31h7.91a1.35 1.35 0 011.43 1.28v1.33zm5.14-7.94c0 .73-.77 1.3-1.83 1.3h-12.3c-1 0-1.83-.57-1.83-1.3v-1.25c0-.74.77-1.31 1.83-1.31H26.3c1 0 1.84.57 1.84 1.31zm3.15-7.94a1.45 1.45 0 01-1.58 1.3H13.75a1.45 1.45 0 01-1.58-1.3v-1.31a1.45 1.45 0 011.57-1.32h16a1.45 1.45 0 011.58 1.31zM49.77 32.23a1.3 1.3 0 00-1.23-1.32H37.9a1.3 1.3 0 00-.9.36 1.34 1.34 0 00-.37.74v1.52a1.27 1.27 0 001.23 1.31h5.51l-9.74 10a1.34 1.34 0 000 1.84l.89.92a1.34 1.34 0 001 .4 1.18 1.18 0 00.83-.35l9.74-10.05v5.51a1.3 1.3 0 00.36.94 1.24 1.24 0 00.9.39h1.36a1.21 1.21 0 00.92-.37 1.36 1.36 0 00.37-.7v-.17z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_meet_present_panel";
freezeTemplate(tmpl);
