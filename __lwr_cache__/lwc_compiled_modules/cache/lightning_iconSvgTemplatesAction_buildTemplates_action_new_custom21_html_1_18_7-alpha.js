import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom21.css";

import _implicitScopedStylesheets from "./new_custom21.scoped.css?scoped=true";

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
    "d": "M32.1 42.9c-.2-.6-.8-.9-1.4-.9h-9.3c-.6 0-1.2.3-1.4.9l-2.2 5.9c-.2.6.2 1.1.7 1.1h15c.6 0 1-.6.7-1.1l-2.1-5.9zM45.2 2H6.8C4.2 2 2 4.1 2 6.8v25.6c0 2.6 2.2 4.8 4.8 4.8h38.4c2.6 0 4.8-2.2 4.8-4.8V6.8C50 4.1 47.8 2 45.2 2zM26 35.6c-1.4 0-2.4-1-2.4-2.4s1-2.4 2.4-2.4 2.4 1 2.4 2.4-1 2.4-2.4 2.4zm19.2-8c0 .9-.7 1.6-1.6 1.6H8.4c-.9 0-1.6-.7-1.6-1.6V8.4c0-.9.7-1.6 1.6-1.6h35.2c.9 0 1.6.7 1.6 1.6v19.2z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesAction_new_custom21";
freezeTemplate(tmpl);
