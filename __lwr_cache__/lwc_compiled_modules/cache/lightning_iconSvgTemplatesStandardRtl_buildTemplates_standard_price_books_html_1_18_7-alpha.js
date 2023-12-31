import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./price_books.css";

import _implicitScopedStylesheets from "./price_books.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M77.4 72.9c0 3.2-2.8 6.3-5.9 6.4h-37c-3.2 0-5.8-3-6-5.9v-2h-2a3.9 3.9 0 01-.2-7.8h2.2v-9.8h-2a3.9 3.9 0 01-.2-7.8h2.2v-9.8h-2a3.9 3.9 0 01-.2-7.8h2.2v-2.2a6 6 0 015.7-5.7l37 .08c3.2 0 6 2.12 6.2 5.22zM51.8 34.7a2.5 2.5 0 00-1.8.8L36.2 49.2a2.53 2.53 0 000 3.6L51.4 68a2.53 2.53 0 003.6 0l13.8-13.8a2.5 2.5 0 00.8-1.8l-.3-8.4a2.14 2.14 0 00-.8-1.7L62 35.6a3.37 3.37 0 00-1.7-.8zm-4.7 13.4a.56.56 0 01.9 0l8 8a.56.56 0 010 .9l-1.3 1.3a.56.56 0 01-.9 0l-8-8a.56.56 0 010-.9zm3.9-3.8a.56.56 0 01.9 0l8 8a.56.56 0 010 .9l-1.3 1.3a.56.56 0 01-.9 0l-8-8a.56.56 0 010-.9zm12.9-4a2.55 2.55 0 11-3.6 0 2.54 2.54 0 013.6 0z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_price_books";
freezeTemplate(tmpl);
