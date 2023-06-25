import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./shipment.css";

import _implicitScopedStylesheets from "./shipment.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M53 53.6V78c0 .6.4 1 1 1 .2 0 .4 0 .5-.1 4.8-2.7 19.4-11 19.4-11 1.9-1.1 3.1-3.1 3.1-5.3V40.7c0-.6-.4-1-1-1-.2 0-.4 0-.5.1L54 51.9c-.6.3-1 1-1 1.7zm-2-6.8l21.6-12.1c.5-.3.6-.9.3-1.4l-.3-.3c-4.8-2.7-19.5-11.1-19.5-11.1-1.9-1.1-4.3-1.1-6.2 0 0 0-14.7 8.3-19.5 11.1-.5.3-.6.9-.3 1.4l.3.3L49 46.8c.6.3 1.4.3 2 0zm-5 5.1L24.5 39.8c-.5-.3-1.1-.1-1.4.4-.1.1-.1.3-.1.5v21.8c0 2.2 1.2 4.2 3.1 5.3 0 0 14.6 8.3 19.4 11 .5.3 1.1.1 1.4-.4.1-.2.1-.4.1-.5V53.6c0-.7-.4-1.4-1-1.7z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_shipment";
freezeTemplate(tmpl);
