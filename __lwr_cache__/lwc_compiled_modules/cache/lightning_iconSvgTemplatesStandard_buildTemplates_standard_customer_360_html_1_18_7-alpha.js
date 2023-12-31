import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./customer_360.css";

import _implicitScopedStylesheets from "./customer_360.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M78.8 50.8c.7-.7.7-1.6.4-2.4-.4-.9-1.2-1.4-2.2-1.4-.7 0-1.3.2-1.9.8l-.5.5c-.9-13.2-11.8-23.6-25.2-23.6-13.9 0-25.2 11.3-25.2 25.2s11.3 25.2 25.2 25.2c11.9 0 21.8-8.2 24.5-19.3l4.9-5zM49.4 70.1c-11.2 0-20.2-9.1-20.2-20.2s9.1-20.2 20.2-20.2c10.6 0 19.3 8.2 20.1 18.6l-.5-.5c-.3-.3-.6-.5-1-.6-1-.4-2-.1-2.7.7-.8 1-.8 2.4.1 3.3l3.6 3.6c-2.1 8.7-10.1 15.3-19.6 15.3z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M61.7 57.1v1.1c0 1.4-1.1 2.5-2.5 2.5H39.5c-1.4 0-2.5-1.1-2.5-2.5v-1.1c0-3 3.5-4.8 6.8-6.2.1 0 .2-.1.3-.2.2-.1.5-.1.8 0 1.3.9 2.8 1.4 4.4 1.4s3.1-.5 4.4-1.3c.2-.2.5-.2.8 0 .1 0 .2.1.3.2 3.4 1.3 6.9 3.1 6.9 6.1z"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "cx": "49.4",
    "cy": "42.8",
    "rx": "6.1",
    "ry": "6.8"
  },
  key: 5,
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
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("g", stc2, [api_element("path", stc3), api_element("ellipse", stc4)])])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_customer_360";
freezeTemplate(tmpl);
