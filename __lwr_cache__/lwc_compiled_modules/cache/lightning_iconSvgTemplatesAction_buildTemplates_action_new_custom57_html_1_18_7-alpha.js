import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom57.css";

import _implicitScopedStylesheets from "./new_custom57.scoped.css?scoped=true";

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
    "d": "M28.4 29v20.2c0 .7.7 1 1.2.7 3.9-2.2 15.8-9.1 15.8-9.1 1.5-.9 2.5-2.6 2.5-4.4V18.3c0-.7-.7-1-1.2-.7l-17.5 10c-.4.3-.8.8-.8 1.4zM26.8 23.3l17.6-10c.6-.3.6-1.1 0-1.4-3.9-2.2-15.9-9.2-15.9-9.2-1.5-.9-3.5-.9-5.1 0 0 0-12 6.9-15.9 9.2-.5.3-.5 1.1.1 1.4l17.6 10c.5.3 1.1.3 1.6 0zM22.7 27.5l-17.5-10c-.5-.3-1.2.1-1.2.8v18.1c0 1.8 1 3.5 2.5 4.4 0 0 11.9 6.9 15.8 9.1.6.3 1.2-.1 1.2-.7V29c.1-.6-.3-1.1-.8-1.5z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesAction_new_custom57";
freezeTemplate(tmpl);
