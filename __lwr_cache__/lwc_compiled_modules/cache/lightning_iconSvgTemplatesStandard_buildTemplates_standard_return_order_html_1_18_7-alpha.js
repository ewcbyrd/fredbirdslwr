import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./return_order.css";

import _implicitScopedStylesheets from "./return_order.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M22 22.3h36.9c1.2 0 2.3 1 2.3 2.2v4.7c0 1.2-1 2.3-2.2 2.3H22c-1.2 0-2.3-1-2.3-2.2v-4.7c-.1-1.2.9-2.3 2.3-2.3-.1 0-.1 0 0 0zm50.8 0h4.6c1.2 0 2.3 1 2.3 2.2v4.7c0 1.2-1 2.3-2.2 2.3h-4.7c-1.2 0-2.3-1-2.3-2.2v-4.7c-.1-1.2.9-2.2 2.1-2.3h.2zM45.6 42.8c1.2 0 2.3 1 2.3 2.2v4.7c0 1.2-1 2.3-2.2 2.3H22c-1.2 0-2.3-1-2.3-2.2v-4.7c0-1.2 1-2.3 2.2-2.3h23.7zm-8.8 20.5c1.2 0 2.3 1 2.3 2.2v4.7c0 1.2-1 2.3-2.2 2.3H22c-1.2 0-2.3-1-2.3-2.2v-4.7c0-1.2 1-2.3 2.2-2.3h14.9zm41.8-21.1c1.2 10.7-7.2 21.8-17.2 23.7l-2.7.6c-.5.1-.9.6-.8 1.2 0 .3.2.5.4.6l6.7 4.5c.7.5.8 1.4.3 2v.1l-1.7 2.5c-.4.7-1.4.9-2 .4h-.1L45.4 66.9c-.7-.4-.9-1.4-.4-2v-.1l11-16.2c.4-.7 1.4-.9 2-.4h.1l2.5 1.7c.7.4.9 1.4.4 2v.1l-4.4 6.7c-.3.4-.3 1.1.2 1.4.2.2.5.3.8.2l1.6-.3c7.8-1.5 14.4-10.3 13.7-17.9 0-.7 1.1-1.7 1.9-1.9h1.9c.9-.1 1.9 1.1 1.9 2z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_return_order";
freezeTemplate(tmpl);
