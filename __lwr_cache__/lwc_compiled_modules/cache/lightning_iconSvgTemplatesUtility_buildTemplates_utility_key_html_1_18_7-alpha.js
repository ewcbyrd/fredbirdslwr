import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./key.css";

import _implicitScopedStylesheets from "./key.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M6.51 12a.77.77 0 011.41.48v.41c0 9 7.09 16.27 15.74 16.27h.71a1.53 1.53 0 011.57 1.06l4.41 12.69a2.13 2.13 0 01-.08 1.22l-2.36 5.45a.77.77 0 01-1 .41l-5.35-2.52a.84.84 0 01-.48-1l.63-2.52a.82.82 0 00-.39-1.06l-1.81-.81a.9.9 0 01-.39-1l.7-2.52a.82.82 0 00-.39-1.06l-1.26-.57a.79.79 0 01-.39-1l.79-2.36a.82.82 0 00-.4-1.06l-2.36-1.06a.8.8 0 01-.41-.45l-.55-1.54a11.11 11.11 0 01-5.43-2.12 11.74 11.74 0 01-4.17-12.55A10.21 10.21 0 016.51 12zm5.55 2.54A11.28 11.28 0 0123.8 2a11.38 11.38 0 0110 7.6 10.64 10.64 0 01.2 6.49l12.7 13.27a1.4 1.4 0 01.48 1.2v5.84a.76.76 0 01-.8.8h-6a.78.78 0 01-.8-.64L39.21 34a.75.75 0 00-.79-.8h-2a.78.78 0 01-.8-.64l-.4-2.56a.76.76 0 00-.8-.8h-1.35a.79.79 0 01-.8-.72L32 26a.76.76 0 00-.8-.8h-2.69A.73.73 0 0128 25l-1.11-1.19a11.17 11.17 0 01-14.78-9.28zM21.6 7.6a4 4 0 000 8 4 4 0 004-4 4 4 0 00-4-4z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_key";
freezeTemplate(tmpl);
