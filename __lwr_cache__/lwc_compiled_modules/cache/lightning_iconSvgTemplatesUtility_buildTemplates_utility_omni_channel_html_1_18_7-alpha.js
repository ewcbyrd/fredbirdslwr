import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./omni_channel.css";

import _implicitScopedStylesheets from "./omni_channel.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M47.2 2.7H34.6c-.8 0-1.1.7-.4 1.4l4 4 .5.5-7.5 7.4c-.6.6-.6 1.6-.1 2.2 0 0 5.1 5.2 4.6 11.1 0 8.4-6.1 15.1-14.5 15.1-6.2.6-11.1-5.1-11.1-5.1-.6-.6-1.5-.6-2.1 0L4.3 43c-.6.6-.6 1.5 0 2.1l1.2 1.2c.6.6 1.5.6 2.1 0L9 45c3.4 2.7 7.7 4.2 12.3 4.2 11 0 19.9-8.9 19.9-19.9 0-4.6-1.6-8.9-4.2-12.3l5.1-5.1.7.7 4 4c.6.7 1.4.4 1.4-.4V3.6c-.1-.5-.5-.9-1-.9z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "cx": "21.1",
    "cy": "29.5",
    "r": "9.9"
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
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("circle", stc2)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_omni_channel";
freezeTemplate(tmpl);
