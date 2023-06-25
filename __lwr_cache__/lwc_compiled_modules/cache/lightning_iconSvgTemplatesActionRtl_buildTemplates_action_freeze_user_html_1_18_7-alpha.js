import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./freeze_user.css";

import _implicitScopedStylesheets from "./freeze_user.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M27 3c.6 0 1 .4 1 1v45.9c0 .6-.4 1-1 1h-2c-.6 0-1-.4-1-1V4c0-.6.4-1 1-1h2z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M26 17.2l-8.1-8.1c-.4-.4-.4-1 0-1.4l1.4-1.4c.4-.4 1-.4 1.4 0l5.3 5.3 5.3-5.3c.4-.4 1-.4 1.4 0l1.4 1.4c.4.4.4 1 0 1.4L26 17.2M26 36.7l8.1 8.1c.4.4.4 1 0 1.4l-1.4 1.4c-.4.4-1 .4-1.4 0L26 42.3l-5.3 5.3c-.4.4-1 .4-1.4 0l-1.4-1.4c-.4-.4-.4-1 0-1.4l8.1-8.1M47.1 15.6c.3.5.2 1.1-.4 1.4L7.2 40.3c-.5.3-1.1.2-1.4-.4l-1-1.7c-.3-.5-.2-1.1.4-1.4l39.5-23.4c.5-.3 1.1-.2 1.4.4l1 1.8z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M34.4 22l2.8-11.1c.1-.6.6-.9 1.2-.7l1.9.5c.6.1.9.6.7 1.2l-1.9 7.3 7.3 1.9c.6.1.9.6.7 1.2l-.5 1.9c-.1.6-.6.9-1.2.7l-11-2.9M17.6 31.9L14.8 43c-.1.6-.6.9-1.2.7l-1.9-.5c-.6-.1-.9-.6-.7-1.2l1.9-7.3-7.3-1.9c-.6-.1-.9-.6-.7-1.2l.5-1.9c.1-.6.6-.9 1.2-.7l11 2.9M5.9 13.9c.3-.5.9-.7 1.4-.4l39.5 23.4c.5.3.7.9.4 1.4l-1 1.7c-.3.5-.9.7-1.4.4L5.2 17c-.5-.3-.7-.9-.4-1.4l1.1-1.7z"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "d": "M17.6 22L6.5 24.9c-.6.1-1.1-.1-1.2-.7l-.5-1.9c-.1-.6.1-1.1.7-1.2l7.3-1.9-1.9-7.3c-.1-.6.1-1.1.7-1.2l1.9-.5c.6-.1 1.1.1 1.2.7L17.6 22M34.3 31.9L45.4 29c.6-.1 1.1.1 1.2.7l.5 1.9c.1.6-.1 1.1-.7 1.2l-7.3 1.9L41 42c.1.6-.1 1.1-.7 1.2l-1.9.5c-.6.1-1.1-.1-1.2-.7l-2.9-11.1"
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
      "viewBox": "0 0 52 52",
      "part": "icon"
    },
    key: 0,
    svg: true
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2), api_element("path", stc3), api_element("path", stc4)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesActionRtl_freeze_user";
freezeTemplate(tmpl);
