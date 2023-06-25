import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./update.css";

import _implicitScopedStylesheets from "./update.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M26 2C12.7 2 2 12.7 2 26s10.7 24 24 24 24-10.7 24-24S39.3 2 26 2zm9 15.5c0 .8-.7 1.5-1.5 1.5H24c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1h4c3.9 0 7 3.1 7 7v2c0 3.9-3.1 7-7 7h1v2c0 1.1-.9 2-2 2s-2-.9-2-2v-2h-6.5c-.8 0-1.5-.7-1.5-1.5v-3c0-.8.7-1.5 1.5-1.5H28c.6 0 1-.4 1-1v-2c0-.6-.4-1-1-1h-4c-3.9 0-7-3.1-7-7v-2c0-3.9 3.1-7 7-7h1v-2c0-1.1.9-2 2-2s2 .9 2 2v2h4.5c.8 0 1.5.7 1.5 1.5v3z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesActionRtl_update";
freezeTemplate(tmpl);
