import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./google_news.css";

import _implicitScopedStylesheets from "./google_news.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M0 6v38c0 2.2 1.8 4 4 4h44c2.2 0 4-1.8 4-4V6c0-.9-1.1-1.3-1.7-.7l-2.6 2.6c-.4.4-1 .4-1.4 0l-3.6-3.6c-.4-.4-1-.4-1.4 0l-3.6 3.6c-.4.4-1 .4-1.4 0l-3.6-3.6c-.4-.4-1-.4-1.4 0l-3.6 3.6c-.4.4-1 .4-1.4 0l-3.6-3.6c-.4-.4-1-.4-1.4 0l-3.6 3.6c-.4.4-1 .4-1.4 0l-3.6-3.6c-.4-.4-1-.4-1.4 0L6.7 8.9c-.4.4-1 .4-1.4 0L1.7 5.3C1.1 4.7 0 5.1 0 6zm31 17c0-.6.4-1 1-1h12c.6 0 1 .4 1 1v18c0 .6-.4 1-1 1H32c-.6 0-1-.4-1-1V23zM7 39c0-.6.4-1 1-1h18c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1H8c-.6 0-1-.4-1-1v-2zm0-9h20v4H7v-4zm0-7c0-.6.4-1 1-1h18c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1H8c-.6 0-1-.4-1-1v-2zm0-8c0-.6.4-1 1-1h36c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1H8c-.6 0-1-.4-1-1v-2z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesActionRtl_google_news";
freezeTemplate(tmpl);
