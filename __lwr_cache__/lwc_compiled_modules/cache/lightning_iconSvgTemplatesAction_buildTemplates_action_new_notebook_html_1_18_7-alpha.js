import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_notebook.css";

import _implicitScopedStylesheets from "./new_notebook.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M44 2H14c-2.2 0-4 1.8-4 4v3H7c-1.7 0-3 1.3-3 3s1.3 3 3 3h3v8H7c-1.7 0-3 1.3-3 3s1.3 3 3 3h3v8H7c-1.7 0-3 1.3-3 3s1.3 3 3 3h3v3c0 2.2 1.8 4 4 4h30c2.2 0 4-1.8 4-4V6c0-2.2-1.8-4-4-4zm-7 34c0 .6-.4 1-1 1H22c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h14c.6 0 1 .4 1 1v2zm2-8c0 .6-.4 1-1 1H20c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h18c.6 0 1 .4 1 1v2zm2-10c0 .6-.4 1-1 1H18c-.6 0-1-.4-1-1v-6c0-.6.4-1 1-1h22c.6 0 1 .4 1 1v6z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesAction_new_notebook";
freezeTemplate(tmpl);
