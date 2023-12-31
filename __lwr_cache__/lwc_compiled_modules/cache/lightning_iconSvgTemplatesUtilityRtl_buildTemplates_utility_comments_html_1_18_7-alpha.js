import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./comments.css";

import _implicitScopedStylesheets from "./comments.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M47.8 31c-.1-.4-.1-.8.1-1.2 1.3-2.3 2.1-4.9 2.1-7.7 0-8.8-7.6-16-17-16-4.4 0-8.4 1.6-11.4 4.2C31.9 11.5 40 19.9 40 30.1c0 2.5-.5 4.9-1.4 7.1 1.1-.4 2.2-.9 3.2-1.4.4-.2.8-.3 1.2-.1l6.1 2.4c.6.2 1.1-.3.9-.9L47.8 31z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M19 14.1c-9.4 0-17 7.2-17 16 0 2.8.8 5.4 2.1 7.7.2.4.3.8.1 1.2L2 45.1c-.2.6.3 1.1.9.9L9 43.6c.4-.1.8-.1 1.2.1 2.6 1.5 5.6 2.3 8.8 2.3 9.4 0 17-7.2 17-16 0-8.7-7.6-15.9-17-15.9z"
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
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_comments";
freezeTemplate(tmpl);
