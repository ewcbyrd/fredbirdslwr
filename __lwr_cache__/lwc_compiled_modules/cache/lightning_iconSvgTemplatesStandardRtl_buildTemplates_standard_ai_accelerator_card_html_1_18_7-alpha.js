import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./ai_accelerator_card.css";

import _implicitScopedStylesheets from "./ai_accelerator_card.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M77.33 30H22.67A2.66 2.66 0 0020 32.67v34.66A2.66 2.66 0 0022.67 70h54.66A2.66 2.66 0 0080 67.33V32.67A2.66 2.66 0 0077.33 30zM63.52 42.24v7a2.14 2.14 0 01-.31 1.13 1.31 1.31 0 01-1 .6 2.5 2.5 0 01-1.5-.4c-.34-.2-.65-.44-1-.66h-.15c-.61.85-1.2 1.72-1.8 2.58l-2.47 3.58-1.86 2.46a2.68 2.68 0 01-1.34 1.08 2.1 2.1 0 01-2.05-.4 2.86 2.86 0 01-.73-.89c-1-1.65-2-3.33-3-5-.12-.2-.26-.4-.38-.61s0 0-.09 0c-.4.5-.73 1.06-1.09 1.6l-2.92 4.37a2.55 2.55 0 01-1.55 1 5.21 5.21 0 01-.79 0 1.58 1.58 0 01-.61-.12 2.17 2.17 0 01-1.11-1.08 2.69 2.69 0 010-2.22 3.87 3.87 0 01.38-.61l3.13-4.53 2.81-4a2.56 2.56 0 011.34-1 2.12 2.12 0 012.14.4 2.62 2.62 0 01.62.82c.92 1.64 1.88 3.28 2.82 4.92.15.24.28.5.44.72s0 .08.11 0c.84-1.24 1.69-2.46 2.55-3.69l1.44-2.08v-.15l-1.88-1.33a1.6 1.6 0 01-.67-1.34 1.35 1.35 0 01.72-1.34 8.89 8.89 0 011-.46l2.67-1.23L60.17 40c.34-.16.68-.34 1-.48a1.89 1.89 0 011.26-.11 1.53 1.53 0 011.08 1 1.88 1.88 0 01.08.52z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_ai_accelerator_card";
freezeTemplate(tmpl);
