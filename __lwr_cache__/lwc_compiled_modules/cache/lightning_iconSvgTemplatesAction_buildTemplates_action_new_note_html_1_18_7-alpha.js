import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_note.css";

import _implicitScopedStylesheets from "./new_note.scoped.css?scoped=true";

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
    "d": "M41.4 39.7l-.9.9c-1 1-2.3 1.5-3.7 1.5h-2.6c-2.4 0-5-1.9-5-5.2v-2.5c0-2 .9-3.2 1.4-3.9l10.8-11c.3-.3.6-1 .6-1.4V9.8C42 7.2 39.8 5 37.2 5H11.6C9 5 6.8 7.4 6.8 9.8H5.2C3.4 9.8 2 11.3 2 13.1s1.4 3.2 3.2 3.2h1.6v6.5H5.2C3.4 22.8 2 24.2 2 26s1.4 3.2 3.2 3.2h1.6v6.5H5.2c-1.8 0-3.2 1.5-3.2 3.2 0 1.8 1.4 3.2 3.2 3.2h1.6c0 3.2 2.2 4.8 4.8 4.8H37.2c2.6 0 4.8-2.2 4.8-4.8V40c0-.5-.2-.6-.6-.3zm-8.2-22.6c0 .9-.7 1.6-1.6 1.6h-16c-.9 0-1.6-.7-1.6-1.6v-1.6c0-.9.7-1.6 1.6-1.6h16c.9 0 1.6.7 1.6 1.6v1.6zM26 36.5c0 .9-.7 1.6-1.6 1.6h-8.8c-.9 0-1.6-.7-1.6-1.6v-1.6c0-.9.7-1.6 1.6-1.6h8.8c.9 0 1.6.7 1.6 1.6v1.6zm2.4-9.7c0 .9-.7 1.6-1.6 1.6H15.6c-.9 0-1.6-.7-1.6-1.6v-1.6c0-.9.7-1.6 1.6-1.6h11.2c.9 0 1.6.7 1.6 1.6v1.6z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M49.5 22.4l-1-1c-.6-.6-1.6-.6-2.2 0L34.1 34c-.1 0-.1.2-.1.2v2.7c0 .2 0 .4.2.4h2.6c.1 0 .2-.1.3-.1l12.3-12.4c.8-.7.8-1.7.1-2.4z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesAction_new_note";
freezeTemplate(tmpl);
