import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./connected_apps.css";

import _implicitScopedStylesheets from "./connected_apps.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M73 21H27c-3.3 0-6 2.7-6 6v46c0 3.3 2.7 6 6 6h46c3.3 0 6-2.7 6-6V27c0-3.3-2.7-6-6-6zm-2 52H29c-1.1 0-2-.9-2-2V29c0-1.1.9-2 2-2h42c1.1 0 2 .9 2 2v42c0 1.1-.9 2-2 2z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M58.5 47H52l5.7-9.4c.6-1-.1-2.6-1.3-2.6h-8.3c-1.2 0-2.3.8-2.8 1.9l-5.2 13.8c-.4 1 .3 2.3 1.4 2.3h6.6l-3.2 10.9c-.3 1 1 1.6 1.7.8l13.1-15.4c.8-1 .1-2.3-1.2-2.3z"
  },
  key: 3,
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
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_connected_apps";
freezeTemplate(tmpl);
