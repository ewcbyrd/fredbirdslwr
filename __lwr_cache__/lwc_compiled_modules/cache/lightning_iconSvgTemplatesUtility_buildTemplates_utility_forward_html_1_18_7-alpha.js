import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./forward.css";

import _implicitScopedStylesheets from "./forward.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M3.4 29h33.2c.9 0 1.3 1.1.7 1.7l-9.6 9.6c-.6.6-.6 1.5 0 2.1l2.2 2.2c.6.6 1.5.6 2.1 0L49.5 27c.6-.6.6-1.5 0-2.1L32 7.4c-.6-.6-1.5-.6-2.1 0l-2.1 2.1c-.6.6-.6 1.5 0 2.1l9.6 9.6c.6.7.2 1.8-.7 1.8H3.5c-.8 0-1.5.6-1.5 1.4v3c0 .8.6 1.6 1.4 1.6z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_forward";
freezeTemplate(tmpl);
