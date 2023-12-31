import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./muted.css";

import _implicitScopedStylesheets from "./muted.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M48.5 5.6l-2.1-2.1c-.6-.6-1.7-.5-2.4.3l-10 10V9.9C34 5.5 30.5 2 26.1 2h-.2C21.5 2 18 5.5 18 9.9v14.5c0 1.5.4 3 1.2 4.2l-3.5 3.5C14 30 13 27.3 13 24.4v-4c0-1.4-1.1-2.4-2.5-2.4S8 19 8 20.4v4c0 4.3 1.6 8.2 4.2 11.2L3.8 44c-.7.7-.8 1.8-.3 2.4l2.1 2.1c.6.6 1.7.5 2.4-.3L48.2 8c.8-.7.9-1.8.3-2.4zM39 23.2v1.2c0 7-5.8 12.8-13 12.8h-.9l-3.9 4.1c.8.2 1.8.4 2.8.6V45h-4.5c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5h13.1c1.4 0 2.5-1.1 2.5-2.5S33.9 45 32.5 45H28v-3.2c9-1.2 16-8.6 16-17.4v-4c0-.6-.3-1.2-.6-1.6L39 23.2z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_muted";
freezeTemplate(tmpl);
