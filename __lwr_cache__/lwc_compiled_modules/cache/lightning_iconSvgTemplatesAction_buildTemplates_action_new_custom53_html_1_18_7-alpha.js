import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom53.css";

import _implicitScopedStylesheets from "./new_custom53.scoped.css?scoped=true";

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
    "d": "M45.4 31.6h-.5c-1.8 0-3.2-1.4-3.2-3.3V17.7c0-9.3-8.2-16.7-17.5-15.6-8 .9-13.9 8-13.9 16.3v9.5c0 2-1.7 3.7-3.6 3.7h-.1c-1.4 0-2.6 1.2-2.6 2.6v1.9c0 1.4 1.2 2.6 2.6 2.6h38.8c1.4 0 2.6-1.2 2.6-2.6v-1.9c0-1.4-1.2-2.6-2.6-2.6zM31.2 43.6H20.8c-.6 0-1.2.5-1 1.1.6 3 3.1 5.3 6.3 5.3s5.7-2.2 6.3-5.3c0-.6-.5-1.1-1.2-1.1z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesAction_new_custom53";
freezeTemplate(tmpl);
