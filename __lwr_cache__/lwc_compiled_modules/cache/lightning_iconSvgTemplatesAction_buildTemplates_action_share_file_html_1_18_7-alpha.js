import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./share_file.css";

import _implicitScopedStylesheets from "./share_file.scoped.css?scoped=true";

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
    "d": "M41 16h7.8c.4 0 .7-.5.4-.9l-8.3-8.3c-.4-.3-.9 0-.9.4V15c0 .6.4 1 1 1z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M49 20H38c-1.1 0-2-.9-2-2V7c0-.6-.4-1-1-1H21.5c-.8 0-1.5.7-1.5 1.5v4c0 .4.2.8.4 1.1l5.6 5.6c.8.8 1.4 1.9 1.6 3.1.2 1.6-.3 3.1-1.4 4.3L24.6 27c-.5.5-1 .8-1.6 1.1.7.3 1.5.5 2.3.6 2.6.2 4.7 2.4 4.7 5.1V36c0 1.4-.7 2.8-1.7 3.7-1 1-2.5 1.4-3.9 1.3-1.1-.1-2.1-.3-3.2-.5-.6-.2-1.2.3-1.2 1v3.1c0 .8.7 1.5 1.5 1.5h27c.8 0 1.5-.7 1.5-1.5V21c0-.6-.4-1-1-1z"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "d": "M26 35.9v-2.2c0-.6-.5-1-1.1-1.1-5.4-.5-9.9-5.1-9.9-10.8v-1.2c0-.6.8-1 1.2-.5l4 4c.4.4 1.1.4 1.5 0l1.5-1.5c.4-.4.4-1.1 0-1.5l-9.7-9.7c-.4-.4-1.1-.4-1.5 0l-9.7 9.7c-.4.4-.4 1.1 0 1.5l1.5 1.5c.4.4 1.1.5 1.5.1l4.2-4c.5-.5 1.4-.1 1.4.5v1.9c0 7.2 6.3 13.8 13.9 14.4.7 0 1.2-.5 1.2-1.1z"
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
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("path", stc2), api_element("path", stc3), api_element("path", stc4)])])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesAction_share_file";
freezeTemplate(tmpl);
