import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./return_order_line_item.css";

import _implicitScopedStylesheets from "./return_order_line_item.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M80 25.4v4.7c0 1.2-1.1 2.2-2.3 2.2h-37c-1.2 0-2.2-1.1-2.2-2.3v-4.7c0-1.2 1.1-2.2 2.3-2.2h37c1.3 0 2.3 1.1 2.2 2.3zm-52.8-2.3c1.2.1 2.1 1.1 2 2.3v4.7c0 1.2-1.1 2.2-2.3 2.2h-4.7C21 32.3 20 31.2 20 30v-4.7c0-1.2 1.1-2.2 2.3-2.2H27.2zM24.4 52c-.5-.9-.6-2.9.3-3.3l1.7-1.6c.9-.4 2.7-.2 3.2.6 5 8.3 17.7 12.5 26 8.4l1.7-.8c.3-.1.5-.4.6-.7.2-.7-.1-1.4-.8-1.6l-9-3.6c-1-.3-1.5-1.4-1.2-2.4l1.1-3.5c0-.1.1-.2.1-.3.4-.8 1.3-1.2 2.1-.8l22 8.6c1 .3 1.5 1.4 1.2 2.4l-6.8 22.7c0 .1-.1.2-.1.3-.4.8-1.3 1.2-2.1.8L61 75.9c-.9-.4-1.5-1.4-1.2-2.4l2.8-9.4c.3-1-.7-2.1-1.7-1.6L58 63.8C47.3 69 31.2 63.7 24.4 52z"
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
      "viewBox": "0 0 100 100",
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_return_order_line_item";
freezeTemplate(tmpl);
