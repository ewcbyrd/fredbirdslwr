import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./work_queue.css";

import _implicitScopedStylesheets from "./work_queue.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M51.8 71.8c-1.1-.1-1.9-1-1.8-2v-4c0-1.1.9-2 2-2h25.9c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2h-26-.1zm0-35.8c-1.1-.1-1.9-1-1.8-2v-4c0-1.1.9-2 2-2h25.9c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2h-26-.1zM41.2 63.8l.2-.2c.6-.7.6-1.9-.2-2.6l-4.8-4.8c-.3-.2-.4-.6-.4-.9 0-.7.6-1.3 1.3-1.3h40.4c1.1-.1 2-.9 2.1-2v-4c0-1.1-1-2-2.1-2H37.5c-.3 0-.7-.2-.9-.4-.5-.5-.5-1.4 0-1.9l4.8-4.8.2-.2c.6-.7.6-1.9-.2-2.6l-2.8-2.8-.2-.2c-.7-.6-1.9-.6-2.6.2L20.5 48.6l-.2.2c-.6.7-.6 1.9.2 2.6l15.3 15.2c.7.7 1.9.7 2.6 0l2.8-2.8z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_work_queue";
freezeTemplate(tmpl);
