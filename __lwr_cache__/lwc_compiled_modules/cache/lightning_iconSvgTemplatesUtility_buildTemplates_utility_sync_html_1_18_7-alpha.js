import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./sync.css";

import _implicitScopedStylesheets from "./sync.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M47.9 29.3c0-.8-.7-1.5-1.5-1.5h-3.5c-.8 0-1.4.6-1.4 1.4 0 .2 0 .5-.1.7-.3 1.3-.8 2.5-1.5 3.7-2.8 4.9-7.7 7.6-12.9 7.6-4 0-7.8-1.6-10.6-4.4-.5-.4-.9-.9-1.2-1.4-.3-.8.4-1.2 1.3-1.2h7c.8 0 1.5-.7 1.5-1.5v-3.1c0-.8-.6-1.4-1.4-1.4H5.3c-.7 0-1.3.6-1.3 1.3v18.2c.1.8.8 1.5 1.6 1.5h3c.8 0 1.5-.7 1.5-1.5v-7c0-.9.5-1.3 1.2-.7.3.4.6.7 1 1 5 5 12 7.1 19.2 5.7 2.5-.5 4.9-1.5 7-2.9 5.2-3.4 8.5-8.6 9.4-14.3v-.2zM4.1 22.7c0 .8.7 1.5 1.5 1.5h3.5c.8 0 1.4-.6 1.4-1.4 0-.2 0-.5.1-.7.3-1.3.8-2.5 1.5-3.7 2.8-4.9 7.7-7.6 12.9-7.6 4 0 7.8 1.6 10.6 4.4.5.4.9.9 1.2 1.4.3.8-.4 1.2-1.3 1.2h-7c-.8 0-1.5.7-1.5 1.5v3.1c0 .8.6 1.4 1.4 1.4h18.3c.7 0 1.3-.6 1.3-1.3V4.3c-.1-.8-.8-1.5-1.6-1.5h-3c-.8 0-1.5.7-1.5 1.5v7c0 .9-.5 1.3-1.2.7-.3-.4-.6-.7-1-1-5-5-12-7.1-19.2-5.7-2.5.5-4.9 1.5-7 2.9-5.2 3.4-8.5 8.6-9.4 14.3v.2z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_sync";
freezeTemplate(tmpl);
