import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./alert.css";

import _implicitScopedStylesheets from "./alert.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M34.7 31l-.4.1c-1.5.5-3.1-.2-3.7-1.7l-3.3-8.8c-2.6-7-10.5-10.4-17.4-7.5C3.4 15.8.5 23.4 2.9 30L6 38.5c.5 1.5-.3 3.1-1.7 3.6l-.4.1c-1.7.6-2.5 2.6-1.9 4.3l.4 1.1c.2.5.9.9 1.5.6l34.4-12.7c.6-.2.9-1 .7-1.6l-.4-1.1c-.3-1.6-2.2-2.5-3.9-1.8zm-8.4 12.6l-7.5 2.8c-.5.2-.7.8-.4 1.2 1.2 2 3.7 2.8 5.9 2 2.2-.8 3.5-3.1 3.2-5.3-.2-.5-.8-.8-1.2-.7zM49.2 28.6c1.7-5.7.8-11.8-2.3-16.8-3.1-5.1-8.2-8.6-14-9.7-.5-.1-.9.2-.9.6l-.5 2.8c-.1.4.2.7.6.8 4.5.9 8.5 3.7 11 7.7s3.1 8.8 1.9 13.3c-.1.4.1.8.5.9l2.7.9c.5 0 .9-.1 1-.5zM38.2 17c-1.6-2.6-4.2-4.3-7.2-4.9-.4-.1-.8.2-.9.6l-.3 2.9c0 .4.2.7.6.8 1.7.4 3.2 1.4 4.1 2.9.9 1.5 1.2 3.3.7 4.9-.1.3.1.7.4.8l2.7 1.1c.4.2.8-.1 1-.5.9-2.9.5-6-1.1-8.6z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_alert";
freezeTemplate(tmpl);
