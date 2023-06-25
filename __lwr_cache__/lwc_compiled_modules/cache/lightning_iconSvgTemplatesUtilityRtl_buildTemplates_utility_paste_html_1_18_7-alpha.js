import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./paste.css";

import _implicitScopedStylesheets from "./paste.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M17.5 12h17c.8 0 1.5-.7 1.5-1.5V6c0-2.2-1.8-4-4-4H20c-2.2 0-4 1.8-4 4v4.5c0 .8.7 1.5 1.5 1.5z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M44 6h-2.5c-.8 0-1.5.7-1.5 1.5V12c0 2.2-1.8 4-4 4H16c-2.2 0-4-1.8-4-4V7.5c0-.8-.7-1.5-1.5-1.5H8c-2.2 0-4 1.8-4 4v36c0 2.2 1.8 4 4 4h36c2.2 0 4-1.8 4-4V10c0-2.2-1.8-4-4-4zm-6 35c0 .6-.4 1-1 1H15c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h22c.6 0 1 .4 1 1v2zm0-8c0 .6-.4 1-1 1H15c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h22c.6 0 1 .4 1 1v2zm0-8c0 .6-.4 1-1 1H15c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h22c.6 0 1 .4 1 1v2z"
  },
  key: 4,
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
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("path", stc2), api_element("path", stc3)])])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_paste";
freezeTemplate(tmpl);
