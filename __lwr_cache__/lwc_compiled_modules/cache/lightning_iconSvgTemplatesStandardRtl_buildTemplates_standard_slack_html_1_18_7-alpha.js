import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./slack.css";

import _implicitScopedStylesheets from "./slack.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M32.6 57.9a6.3 6.3 0 11-6.3-6.3h6.3zM35.8 57.9a6.43 6.43 0 016.1-6.6 6.36 6.36 0 016.6 6.1v16.3a6.35 6.35 0 01-12.7 0zM42.1 32.6a6.3 6.3 0 116.3-6.3v6.3zM42.1 35.8a6.43 6.43 0 016.6 6.1 6.36 6.36 0 01-6.1 6.6H26.3a6.35 6.35 0 010-12.7zM67.4 42.1a6.3 6.3 0 116.3 6.3h-6.3zM64.2 42.1a6.43 6.43 0 01-6.1 6.6 6.36 6.36 0 01-6.6-6.1V26.3a6.35 6.35 0 0112.7 0zM57.9 67.4a6.3 6.3 0 11-6.3 6.3v-6.3zM57.9 64.2a6.43 6.43 0 01-6.6-6.1 6.36 6.36 0 016.1-6.6h16.3a6.35 6.35 0 010 12.7z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_slack";
freezeTemplate(tmpl);
