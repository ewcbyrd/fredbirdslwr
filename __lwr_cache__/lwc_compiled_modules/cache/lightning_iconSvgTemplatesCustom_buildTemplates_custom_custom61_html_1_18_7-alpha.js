import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom61.css";

import _implicitScopedStylesheets from "./custom61.scoped.css?scoped=true";

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
    "d": "M73 20h-4c-1.1 0-2 .9-2 2v4c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2v-4c0-1.1-.8-2-2-2h-4c-1.1 0-2 .9-2 2v4c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2v-4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v4c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2v-4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v10c0 3.3 2.7 6 6 6h38c3.3 0 6-2.7 6-6V22c0-1.1-.9-2-2-2zM68.5 45.7c-.1-1-1-1.7-2-1.7h-33c-1 0-1.9.7-2 1.7l-4.5 32c-.2 1.2.8 2.3 2 2.3h12.9c1.1 0 2.1-.9 2.1-2v-9.7c0-3.3 2.5-6.2 5.8-6.2 3.4-.1 6.2 2.601 6.2 6v10c0 1.101 1 2 2.1 2H71c1.2 0 2.2-1.1 2-2.3l-4.5-32.1z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustom_custom61";
freezeTemplate(tmpl);
