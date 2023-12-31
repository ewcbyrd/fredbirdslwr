import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_note.css";

import _implicitScopedStylesheets from "./new_note.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M10 40v2.1c0 2.6 2.2 4.8 4.8 4.8h25.6c2.6 0 4.8-1.6 4.8-4.8h1.6c1.8 0 3.2-1.4 3.2-3.2 0-1.7-1.4-3.2-3.2-3.2h-1.6v-6.5h1.6c1.8 0 3.2-1.4 3.2-3.2s-1.4-3.2-3.2-3.2h-1.6v-6.5h1.6c1.8 0 3.2-1.4 3.2-3.2s-1.4-3.3-3.2-3.3h-1.6C45.2 7.4 43 5 40.4 5H14.8C12.2 5 10 7.2 10 9.8v8.3c0 .4.3 1.1.6 1.4l10.8 11c.5.7 1.4 1.9 1.4 3.9v2.5c0 3.3-2.6 5.2-5 5.2h-2.6c-1.4 0-2.7-.5-3.7-1.5l-.9-.9c-.4-.3-.6-.2-.6.3zm8.8-24.5c0-.9.7-1.6 1.6-1.6h16c.9 0 1.6.7 1.6 1.6v1.6c0 .9-.7 1.6-1.6 1.6h-16c-.9 0-1.6-.7-1.6-1.6v-1.6zM26 34.9c0-.9.7-1.6 1.6-1.6h8.8c.9 0 1.6.7 1.6 1.6v1.6c0 .9-.7 1.6-1.6 1.6h-8.8c-.9 0-1.6-.7-1.6-1.6v-1.6zm-2.4-9.7c0-.9.7-1.6 1.6-1.6h11.2c.9 0 1.6.7 1.6 1.6v1.6c0 .9-.7 1.6-1.6 1.6H25.2c-.9 0-1.6-.7-1.6-1.6v-1.6zm-21-.4l12.3 12.4c.1 0 .2.1.3.1h2.6c.2 0 .2-.2.2-.4v-2.7s0-.2-.1-.2L5.7 21.4c-.6-.6-1.6-.6-2.2 0l-1 1c-.7.7-.7 1.7.1 2.4z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesActionRtl_new_note";
freezeTemplate(tmpl);
