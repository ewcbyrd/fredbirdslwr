import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./fulfillment_order.css";

import _implicitScopedStylesheets from "./fulfillment_order.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M47.9 63c.9 0 1.7.1 2.5.4L36.9 25.1l-1.2-3.7c-.4-1.1-1.5-1.6-2.5-1.2L21.4 24c-1.1.4-1.6 1.5-1.2 2.5l1.2 3.7c.4 1.1 1.5 1.6 2.5 1.2l6.1-2 12.4 35.1c1.6-.9 3.5-1.5 5.5-1.5zM69 53.9l-12.4 4.4c-1.2.5-2.7-.2-3.1-1.5l-4.4-12.4c-.5-1.2.2-2.7 1.5-3.1L63 36.9c1.2-.5 2.7.2 3.1 1.5l4.4 12.4c.5 1.2-.2 2.6-1.5 3.1zM57.3 33.5l-8.4 2.9c-1.2.5-2.7-.2-3.1-1.5l-2.9-8.4c-.5-1.2.2-2.7 1.5-3.1l8.4-2.9c1.2-.5 2.7.2 3.1 1.5l2.9 8.4c.5 1.1-.2 2.6-1.5 3.1zm22.6 28.2L78.6 58c-.4-1.1-1.5-1.6-2.5-1.2l-22.7 7.9c2.4 1.5 4 4 4.5 6.9l20.9-7.1c1-.5 1.5-1.6 1.1-2.8zm-32 4.5c-3.7 0-6.9 3.1-6.9 6.9 0 3.7 3.1 6.9 6.9 6.9s6.9-3.1 6.9-6.9c0-3.9-3.2-6.9-6.9-6.9z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_fulfillment_order";
freezeTemplate(tmpl);
