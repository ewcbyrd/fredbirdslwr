import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./copy.css";

import _implicitScopedStylesheets from "./copy.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M44 2H18c-2.2 0-4 1.8-4 4v2h24c2.2 0 4 1.8 4 4v28h2c2.2 0 4-1.8 4-4V6c0-2.2-1.8-4-4-4z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M38 16c0-2.2-1.8-4-4-4H8c-2.2 0-4 1.8-4 4v30c0 2.2 1.8 4 4 4h26c2.2 0 4-1.8 4-4V16zm-18 7c0 .6-.4 1-1 1h-8c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h8c.6 0 1 .4 1 1v2zm8 16c0 .6-.4 1-1 1H11c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h16c.6 0 1 .4 1 1v2zm4-8c0 .6-.4 1-1 1H11c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h20c.6 0 1 .4 1 1v2z"
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
      "viewBox": "0 0 52 52",
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_copy";
freezeTemplate(tmpl);
