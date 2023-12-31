import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./pricing_workspace.css";

import _implicitScopedStylesheets from "./pricing_workspace.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M15.1 2.1a1.63 1.63 0 011.7 1.7v1.1a1.63 1.63 0 01-1.7 1.7H10a3.4 3.4 0 00-3.4 3.2V42a3.4 3.4 0 003.2 3.4H42a3.4 3.4 0 003.4-3.2v-5.3a1.63 1.63 0 011.7-1.7h1.1a1.63 1.63 0 011.7 1.7v6.2a6.81 6.81 0 01-6.8 6.8H8.9a6.81 6.81 0 01-6.8-6.8V8.9a6.81 6.81 0 016.8-6.8z",
    "fill-rule": "evenodd"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M29.7 4.9l8.4.2a4 4 0 011.8.7l3.3 3.3 3.3 3.3a2.41 2.41 0 01.7 1.8l.2 8.4a2.64 2.64 0 01-.7 1.9L32.9 38.4a2.53 2.53 0 01-3.6 0l-7.6-7.6-7.6-7.6a2.53 2.53 0 010-3.6L27.9 5.7a2.34 2.34 0 011.8-.8zM25 18.4l-1.4 1.4a.75.75 0 000 .9l8.1 8.1a.75.75 0 00.9 0l1.4-1.4a.75.75 0 000-.9l-8.1-8.1a.56.56 0 00-.9 0zm3.8-3.8L27.5 16a.75.75 0 000 .9l8.1 8.1a.75.75 0 00.9 0l1.4-1.4a.75.75 0 000-.9l-8.1-8.1c-.3-.3-.6-.3-1 0zm13.1-4.1a2.55 2.55 0 100 3.6 2.54 2.54 0 000-3.6z"
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
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_pricing_workspace";
freezeTemplate(tmpl);
