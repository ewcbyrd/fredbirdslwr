import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./document_reference.css";

import _implicitScopedStylesheets from "./document_reference.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M71.4 69.89l-2.58 5.23a1.5 1.5 0 01-1.34.84h-.08a1.5 1.5 0 01-1.33-1l-3.26-8.83-1.45 3A1.51 1.51 0 0160 70h-5.53a11.12 11.12 0 0022-.1z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M59.07 67l2.57-5.31a1.49 1.49 0 011.43-.85 1.53 1.53 0 011.33 1l3.27 8.85 1.45-2.93a1.5 1.5 0 011.34-.84h6A11.12 11.12 0 0054.4 67z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M51.35 68.4a14.16 14.16 0 011.15-5.59h-12a1.7 1.7 0 01-1.7-1.7v-1.69a1.7 1.7 0 011.7-1.7h15.75a14.06 14.06 0 019.23-3.46h.44V40.83a1.69 1.69 0 00-1.69-1.69H52.35A5.11 5.11 0 0147.26 34V22.16a1.71 1.71 0 00-1.7-1.69h-17a5.1 5.1 0 00-5.09 5.09v40.73a5.1 5.1 0 005.09 5.09h23.11a14.23 14.23 0 01-.32-2.98zm6.09-19.17a1.71 1.71 0 011.7 1.7v1.7a1.71 1.71 0 01-1.7 1.69h-17a1.71 1.71 0 01-1.7-1.69v-1.7a1.7 1.7 0 011.7-1.7h17zM35.38 61.11a1.7 1.7 0 01-1.7 1.7H32a1.7 1.7 0 01-1.7-1.7v-1.69a1.7 1.7 0 011.7-1.7h1.7a1.7 1.7 0 011.7 1.7zm0-8.48a1.71 1.71 0 01-1.7 1.69H32a1.71 1.71 0 01-1.7-1.69v-1.7a1.71 1.71 0 011.7-1.7h1.7a1.71 1.71 0 011.7 1.7zM38 42.53a1.71 1.71 0 01-1.7 1.7h-1.7a1.71 1.71 0 01-1.69-1.7v-3.39h-3.4a1.71 1.71 0 01-1.7-1.7v-1.7a1.71 1.71 0 011.7-1.7h3.4v-3.39a1.7 1.7 0 011.7-1.65h1.7A1.71 1.71 0 0138 30.7V34h3.4a1.71 1.71 0 011.7 1.7v1.7a1.71 1.71 0 01-1.7 1.7H38z"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "d": "M55.74 34h9a1.15 1.15 0 001.18-1.12v-.06a1.09 1.09 0 00-.34-.85l-11.2-11.2a1.05 1.05 0 00-.84-.34 1.16 1.16 0 00-1.19 1.13v9.06A3.39 3.39 0 0055.74 34z"
  },
  key: 5,
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
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2), api_element("path", stc3), api_element("path", stc4)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_document_reference";
freezeTemplate(tmpl);
