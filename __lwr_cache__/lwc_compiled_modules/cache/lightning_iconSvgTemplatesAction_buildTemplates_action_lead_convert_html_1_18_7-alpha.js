import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./lead_convert.css";

import _implicitScopedStylesheets from "./lead_convert.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M27.6 28.3c-.6.6-.6 1.5 0 2.1l2.1 2.1c.6.6 1.5.6 2.1 0L45.3 19c.6-.6.6-1.5 0-2.1L31.9 3.4c-.6-.6-1.5-.6-2.1 0l-2.1 2.1c-.6.6-.6 1.5 0 2.1l5.7 5.6c1.6 1.8-1 1.7-1 1.7h-8C14.9 15 6.8 22.8 7 32.3 7.2 41.5 14.7 49 24 49h3.5c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5h-3.2c-5.7 0-10.7-4.2-11.3-9.9-.6-6.6 4.6-12.1 11-12.1h8.6c.7.2 1 1.1.5 1.7l-5.5 5.6z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesAction_lead_convert";
freezeTemplate(tmpl);
