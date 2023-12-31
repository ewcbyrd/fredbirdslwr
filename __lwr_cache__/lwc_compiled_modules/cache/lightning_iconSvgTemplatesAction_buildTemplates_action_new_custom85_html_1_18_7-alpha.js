import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom85.css";

import _implicitScopedStylesheets from "./new_custom85.scoped.css?scoped=true";

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
    "d": "M48.4 5.2h-40V3.6c0-.9-.7-1.6-1.6-1.6H3.6C2.7 2 2 2.7 2 3.6v44.8c0 .9.7 1.6 1.6 1.6h3.2c.9 0 1.6-.7 1.6-1.6V11.6h40c.9 0 1.6-.7 1.6-1.6V6.8c0-.9-.7-1.6-1.6-1.6z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M45.2 16.4H18c-2.6 0-4.8 2.2-4.8 4.8v17.6c0 2.6 2.2 4.8 4.8 4.8h27.2c2.6 0 4.8-2.2 4.8-4.8V21.2c0-2.6-2.2-4.8-4.8-4.8zM40.8 30h-2v8c0 .5-.3.8-.8.8h-3.2c-.5 0-.8-.3-.8-.8v-4.8c0-.5-.3-.8-.8-.8H30c-.5 0-.8.3-.8.8V38c0 .5-.3.8-.8.8h-3.2c-.5 0-.8-.3-.8-.8v-8h-2c-.4 0-.6-.5-.2-.7l9-8.7c.3-.2.7-.2 1 0l9 8.7c.2.2 0 .7-.4.7z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesAction_new_custom85";
freezeTemplate(tmpl);
