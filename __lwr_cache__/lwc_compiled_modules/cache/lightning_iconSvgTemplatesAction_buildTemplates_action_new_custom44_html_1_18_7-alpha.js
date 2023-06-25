import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom44.css";

import _implicitScopedStylesheets from "./new_custom44.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M40.7 9.1C36.6 3.8 33.2 2 26 2c-3.2 0-7.1 1.3-8.7 1.6 0-.9-.7-1.6-1.6-1.6h-3.2c-.9 0-1.6.7-1.6 1.6V10c0 .9.7 1.6 1.6 1.6h3.1c.9 0 1.6-.7 1.6-1.6H19c1.3 0 2.3 1 2.3 2.3v.1c0 1.4 1 2.4 2.4 2.4v12.8c-1.7 0-3.1 1.4-3.1 3.2v14.4c0 2.6 2.1 4.8 4.7 4.8h1.6c2.6 0 4.7-2.2 4.7-4.8V30.8c0-1.8-1.4-3.2-3.1-3.2V14.8c1.3 0 2.4-1.8 2.4-3.1v-.1c0-1.2.9-2.2 2.1-2.2 3.1-.2 4.9 1.1 5.7 1.8.5.4 1.3.5 1.7.1.7-.5.9-1.5.3-2.2z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesAction_new_custom44";
freezeTemplate(tmpl);
