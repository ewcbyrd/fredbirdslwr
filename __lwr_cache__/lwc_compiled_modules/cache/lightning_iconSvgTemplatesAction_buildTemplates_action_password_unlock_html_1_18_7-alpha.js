import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./password_unlock.css";

import _implicitScopedStylesheets from "./password_unlock.scoped.css?scoped=true";

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
    "d": "M10 18.1v0zM42 23H16v-4.7c0-5.3 4-10 9.3-10.3 4.9-.3 9 2.8 10.3 7.2.1.4.5.8 1 .8h4.1c.6 0 1.1-.6 1-1.2C40.1 7.2 33.3 1.6 25.2 2c-8.5.4-15 7.7-15.2 16.1V23c-2.2 0-4 1.8-4 4v19c0 2.2 1.8 4 4 4h32c2.2 0 4-1.8 4-4V27c0-2.2-1.8-4-4-4zM30.6 42.7c.2.6-.3 1.3-1 1.3h-7.3c-.7 0-1.2-.6-1-1.3l1.8-6c-1.5-1-2.4-2.8-2-4.8.4-1.9 1.9-3.4 3.9-3.8 3.2-.6 6 1.7 6 4.7 0 1.6-.8 3.1-2.1 3.9l1.7 6z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesAction_password_unlock";
freezeTemplate(tmpl);
