import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom69.css";

import _implicitScopedStylesheets from "./new_custom69.scoped.css?scoped=true";

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
    "d": "M28.1 22.1c-4.6-3.4-9.2-1.8-12.2 1.1-1.1 1-2.9 1.7-4.8 2.2-2.2.7-4.6 1.4-6.2 3.1-4.6 4.5-3.7 9.8 2.5 16l.1.1.1.1c3.7 3.6 7 5.4 10.1 5.4 2.2 0 4.2-.9 6.2-2.7 1.7-1.6 2.5-3.9 3.2-6.1.6-1.8 1.3-3.7 2.3-4.7 1.8-1.8 2.9-3.8 3.1-5.9.2-1.5-.2-3.7-1.9-5.9 0-.2-1-1.5-2.5-2.7zm-9.9 19.3c-.4.4-1 .6-1.6.6-.6 0-1.1-.2-1.5-.6L10.6 37c-.9-.9-.9-2.2 0-3.1.9-.9 2.2-.9 3.1 0l4.4 4.4c.9.9.9 2.2.1 3.1zm3.8-6.5c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zM49.5 6.2l-3.7-3.7c-.6-.6-1.8-.6-2.5 0l-4.1 4.1c-.6.6-.6 1.8 0 2.5l.2.2-8.2 8.3c-.3.3-.3.9 0 1.2.6.6 1.7 1.5 2.3 2.2.3.3.8.3 1.1 0l8.2-8.2.2.2c.6.6 1.8.6 2.5 0l4.1-4.1c.6-.9.6-2-.1-2.7z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesAction_new_custom69";
freezeTemplate(tmpl);
