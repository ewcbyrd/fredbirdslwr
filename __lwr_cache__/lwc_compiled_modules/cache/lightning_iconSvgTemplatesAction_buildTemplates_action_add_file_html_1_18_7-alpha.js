import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./add_file.css";

import _implicitScopedStylesheets from "./add_file.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M9.7 36.1V11.3c-2.6 0-4.7 2.1-4.7 4.6v29.4C5 47.9 7.1 50 9.7 50H33c2.6 0 4.7-2.1 4.7-4.6H19c-5.1 0-9.3 0-9.3-9.3zm35.7-20.2h-7.8c-2.6 0-4.7-2.1-4.7-4.6V3.5c.1-.8-.6-1.5-1.5-1.5H19c-2.6 0-4.7 2.1-4.7 4.6V36c0 2.6 2.1 4.6 4.7 4.6h23.3c2.6 0 4.7-2.1 4.7-4.6V17.5c0-.9-.7-1.6-1.6-1.6zm1.3-6.5l-7.2-7.1c-.2-.2-.4-.3-.7-.3-.6 0-1.1.5-1.1 1.1v5.1c0 1.7 1.4 3.1 3.1 3.1h5.1c.6 0 1.1-.5 1.1-1.1 0-.3-.1-.5-.3-.8z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesAction_add_file";
freezeTemplate(tmpl);
