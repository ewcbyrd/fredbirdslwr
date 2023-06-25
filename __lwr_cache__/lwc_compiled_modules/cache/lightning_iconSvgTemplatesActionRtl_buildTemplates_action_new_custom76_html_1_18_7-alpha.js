import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom76.css";

import _implicitScopedStylesheets from "./new_custom76.scoped.css?scoped=true";

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
    "d": "M25.9 30.4c-.2-.6-.9-1.1-1.6-1h-.7c-9 0-16.3-7.2-16.3-16.1v-.4c0-.8-1.1-1.1-1.5-.5-.6.8-1 1.8-1.3 2.8-1.4 4.6.4 9.6 4.3 12.4 1.8 1.3 3.7 1.9 5.6 2.1l.6 1.5c.1.2.2.4.4.5l2.4 1c.4.2.6.6.4 1l-.8 2.3c-.2.4.1.8.4 1l1.3.6c.4.2.6.6.4 1l-.7 2.5c-.1.4.1.8.4 1l1.9.8c.4.2.6.6.4 1l-.7 2.5c-.1.4.1.8.5 1l5.5 2.5c.4.2.9 0 1.1-.4l2.4-5.4c.2-.4.2-.8.1-1.2l-4.5-12.5z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M47.5 29.6l-13-13.4c.6-2 .6-4.2-.2-6.5-1.5-4.3-5.5-7.4-10.2-7.7-7-.3-12.7 5.6-12 12.6.6 4.8 4.2 8.8 9 9.7 2.1.4 4.2.2 6-.4l1.1 1.2c.2.2.3.2.6.2h2.8c.5 0 .8.3.8.8l.2 2.5c0 .4.4.7.8.7H35c.5 0 .8.3.8.8l.4 2.6c.1.4.4.6.8.6h2c.5 0 .8.3.8.8l.4 2.6c.1.4.4.6.8.6h6.1c.5 0 .8-.3.8-.8v-5.9c.1-.4-.1-.8-.4-1zm-25.6-14c-2.3 0-4.1-1.8-4.1-4s1.8-4 4.1-4 4.1 1.8 4.1 4-1.8 4-4.1 4z"
  },
  key: 4,
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
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("path", stc2), api_element("path", stc3)])])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesActionRtl_new_custom76";
freezeTemplate(tmpl);
