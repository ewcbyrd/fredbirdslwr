import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./replace.css";

import _implicitScopedStylesheets from "./replace.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M20 37.5c0-.8-.7-1.5-1.5-1.5h-15c-.8 0-1.5.7-1.5 1.5v11c0 .8.7 1.5 1.5 1.5h15c.8 0 1.5-.7 1.5-1.5v-11zM8.1 22H3.2c-1 0-1.5.9-.9 1.4l8 8.3c.4.3 1 .3 1.4 0l8-8.3c.6-.6.1-1.4-.9-1.4h-4.7c0-5 4.9-10 9.9-10V6C15 6 8.1 13 8.1 22zM41.8 20.3c-.4-.3-1-.3-1.4 0l-8 8.3c-.6.6-.1 1.4.9 1.4h4.8c0 6-4.1 10-10.1 10v6c9 0 16.1-7 16.1-16H49c1 0 1.5-.9.9-1.4l-8.1-8.3zM50 3.5c0-.8-.7-1.5-1.5-1.5h-15c-.8 0-1.5.7-1.5 1.5v11c0 .8.7 1.5 1.5 1.5h15c.8 0 1.5-.7 1.5-1.5v-11z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_replace";
freezeTemplate(tmpl);
