import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./cancel_file_request.css";

import _implicitScopedStylesheets from "./cancel_file_request.scoped.css?scoped=true";

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
    "d": "M28.6 11.4h5.1c.6 0 1.1-.5 1.1-1.1 0-.3-.1-.5-.3-.8l-7.2-7.1c-.2-.2-.4-.3-.7-.3-.6 0-1.1.5-1.1 1.1v5.1c0 1.7 1.4 3.1 3.1 3.1z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M24.6 40.6c0-6.8 4.2-12.6 10.2-14.9v-8.1c0-.9-.7-1.6-1.6-1.6h-7.8c-2.6 0-4.7-2.1-4.7-4.6V3.6c.1-.8-.6-1.5-1.5-1.5H6.8c-2.6 0-4.7 2.1-4.7 4.6v29.4c0 2.6 2.1 4.6 4.7 4.6h17.8v-.1zM31.8 34.6l6 6-6 6c-.6.6-.6 1.6 0 2.1l.7.7c.6.6 1.6.6 2.1 0l6-6 6 6c.6.6 1.6.6 2.1 0l.7-.7c.6-.6.6-1.6 0-2.1l-6-6 6-6c.6-.6.6-1.6 0-2.1l-.7-.7c-.6-.6-1.6-.6-2.1 0l-6 6-6-6c-.6-.6-1.6-.6-2.1 0l-.7.7c-.6.5-.6 1.5 0 2.1z"
  },
  key: 4,
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
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("path", stc2), api_element("path", stc3)])])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_cancel_file_request";
freezeTemplate(tmpl);
