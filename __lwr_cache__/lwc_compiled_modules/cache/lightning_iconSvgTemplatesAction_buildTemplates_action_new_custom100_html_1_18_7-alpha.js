import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom100.css";

import _implicitScopedStylesheets from "./new_custom100.scoped.css?scoped=true";

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
    "d": "M35.5 41.5h-19c-.6 0-.9.5-.8 1.1.8 3.1 5.1 5.5 10.2 5.5 5.2 0 9.5-2.4 10.2-5.5.3-.6-.1-1.1-.6-1.1zM45.2 4H6.8C4.2 4 2 6.2 2 8.9v22.8c0 2.7 2.2 4.9 4.8 4.9h38.4c2.6 0 4.8-2.2 4.8-4.9V8.9C50 6.2 47.8 4 45.2 4zm0 26.1c0 .9-.7 1.6-1.6 1.6H8.4c-.9 0-1.6-.7-1.6-1.6V10.5c0-.9.7-1.6 1.6-1.6h35.2c.9 0 1.6.7 1.6 1.6v19.6z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesAction_new_custom100";
freezeTemplate(tmpl);
