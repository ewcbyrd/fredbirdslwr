import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom58.css";

import _implicitScopedStylesheets from "./custom58.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M67 46c-1.7 0-3.1-1.4-3-3.2.1-1.6 1.5-2.8 3.2-2.8h8.6c.4 0 .7-.2.9-.5.8-1.4 1.399-2.8 1.899-4.1.201-.7-.199-1.4-.899-1.4h-6.4c-1.6 0-3.1-1.2-3.2-2.8-.1-1.7 1.3-3.2 3-3.2h8c.601 0 1-.4 1-1v-3c0-1.1-.899-2-2-2H67.4c-3 0-5.4 2.4-5.4 5.4v.1c0 5.6-3.7 10.6-9 12v-8.3c2.1-1.2 3.4-3.5 3-6.2-.4-2.6-2.6-4.7-5.2-5-3.6-.4-6.7 2.4-6.7 6 0 2.2 1.2 4.1 3 5.2v8.4c-5.3-1.4-9-6.4-9-12v-.1c0-3-2.4-5.4-5.4-5.4H22c-1.1 0-2 .9-2 2v3c0 .6.4 1 1 1h7.8c1.6 0 3.1 1.2 3.2 2.8.1 1.7-1.3 3.2-3 3.2h-6.5c-.7 0-1.2.7-.9 1.4.5 1.3 1.1 2.7 1.9 4.1.2.3.5.5.9.5H33c1.6 0 3.1 1.2 3.2 2.8.1 1.7-1.3 3.2-3 3.2h-2.4c-.9 0-1.4 1.2-.6 1.8 4.2 3.6 9.8 6.2 17 6.2v22.8c0 1.6 1.2 3.1 2.8 3.199 1.7.101 3.2-1.3 3.2-3V54c7.2 0 12.8-2.6 17-6.2.7-.6.3-1.8-.601-1.8H67z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustom_custom58";
freezeTemplate(tmpl);
