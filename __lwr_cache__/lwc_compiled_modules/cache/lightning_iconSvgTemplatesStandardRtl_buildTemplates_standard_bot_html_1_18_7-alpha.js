import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./bot.css";

import _implicitScopedStylesheets from "./bot.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M49.6 25.8c7.2 0 13 5.8 13 13v3.3c-4.3-.5-8.7-.7-13-.7-4.3 0-8.7.2-13 .7v-3.3c0-7.1 5.8-13 13-13zM73.2 63.8l1.3-11.4c2.9.5 5.1 2.9 5.1 5.6 0 3.2-2.9 5.8-6.4 5.8zM25.9 63.8c-3.5 0-6.4-2.6-6.4-5.8 0-2.8 2.2-5.1 5.1-5.6l1.3 11.4zM68.7 44.9c-6.6-.7-12.9-1-19-1s-12.5.3-19 1c-2.2.2-3.8 2.2-3.5 4.3l2 19.4c.2 1.8 1.6 3.3 3.5 3.5 5.6.7 11.3 1 17.1 1s11.5-.3 17.1-1c1.8-.2 3.3-1.7 3.5-3.5l2-19.4c0-2.2-1.5-4.1-3.7-4.3zM38.6 62.5c-1.6 0-2.8-1.6-2.8-3.7s1.3-3.7 2.8-3.7 2.8 1.6 2.8 3.7-1.2 3.7-2.8 3.7zm16.7 4.1c0 .2-.1.4-.2.5-.1.1-.3.2-.5.2h-9.9c-.2 0-.4-.1-.5-.2-.1-.1-.2-.3-.2-.5v-1.8c0-.4.3-.7.7-.7h.2c.4 0 .7.3.7.7v.9h8.1v-.9c0-.4.3-.7.7-.7h.2c.4 0 .7.3.7.7v1.8zm5.3-4.1c-1.6 0-2.8-1.6-2.8-3.7s1.3-3.7 2.8-3.7 2.8 1.6 2.8 3.7-1.2 3.7-2.8 3.7z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_bot";
freezeTemplate(tmpl);