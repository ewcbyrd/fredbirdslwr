import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./live_chat_visitor.css";

import _implicitScopedStylesheets from "./live_chat_visitor.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M50 22.2c-16.6 0-30 12.5-30 28 0 5 1.4 9.6 3.8 13.7.3.5.4 1.1.2 1.6l-2.8 8.9c-.5 1.6 1 3 2.6 2.5l8.8-3.1c.6-.2 1.2-.1 1.7.2 4.6 2.7 10 4.2 15.8 4.2 16.6 0 30-12.5 30-28-.1-15.5-13.6-28-30.1-28zm-5.5 26.5c2.4-1 2.7-1.9 2.7-2.9 0-1.1-.6-2-1.4-2.7-1.4-1.2-2.2-3-2.2-5 0-3.8 2.4-7 6.4-7s6.3 3.2 6.3 7c0 2-.7 3.8-2.1 5-.8.7-1.4 1.6-1.4 2.7 0 1 .3 1.9 2.6 2.8C58.8 50 61.8 52 62 55c.2 2-1.3 4.1-3.2 4.1H41.4C39.5 59.1 38 57 38 55c0-3 3.2-4.8 6.5-6.3zm-3.8 20.5c-1.7 0-3.1-1.4-3.1-3.1 0-1.7 1.4-3.1 3.1-3.1 1.7 0 3.1 1.4 3.1 3.1s-1.4 3.1-3.1 3.1zm9.3 0c-1.7 0-3.1-1.4-3.1-3.1 0-1.7 1.4-3.1 3.1-3.1 1.7 0 3.1 1.4 3.1 3.1s-1.4 3.1-3.1 3.1zm9.3 0c-1.7 0-3.1-1.4-3.1-3.1 0-1.7 1.4-3.1 3.1-3.1s3.1 1.4 3.1 3.1-1.5 3.1-3.1 3.1z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_live_chat_visitor";
freezeTemplate(tmpl);