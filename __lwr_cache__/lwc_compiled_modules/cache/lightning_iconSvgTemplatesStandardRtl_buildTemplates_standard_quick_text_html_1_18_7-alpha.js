import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./quick_text.css";

import _implicitScopedStylesheets from "./quick_text.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M49.5 21.5c-16.7 0-29.9 12.3-29.9 27.4 0 4.8 1.4 9.3 3.6 13.3.4.6.5 1.4.3 2.1L19.6 75c-.4 1 .6 1.9 1.6 1.6L32 72.5c.6-.3 1.4-.1 2.1.3 4.5 2.5 9.9 4 15.7 4 16.4-.1 29.8-12.3 29.8-27.6-.1-15.4-13.5-27.7-30.1-27.7zm14 38.1c0 .7-.6 1.2-1.2 1.2H36.7c-.7 0-1.2-.6-1.2-1.2v-2.3c0-.7.6-1.2 1.2-1.2h25.6c.7 0 1.2.6 1.2 1.2v2.3zm0-9.3c0 .7-.6 1.2-1.2 1.2H42.8c-.7 0-1.2-.6-1.2-1.2V48c0-.7.6-1.2 1.2-1.2h19.4c.7 0 1.2.6 1.2 1.2h.1v2.3zm0-9.3c0 .7-.6 1.2-1.2 1.2H36.7c-.7 0-1.2-.6-1.2-1.2v-2.3c0-.7.6-1.2 1.2-1.2h25.6c.7 0 1.2.6 1.2 1.2V41z"
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
      "viewBox": "0 0 100 100",
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_quick_text";
freezeTemplate(tmpl);
