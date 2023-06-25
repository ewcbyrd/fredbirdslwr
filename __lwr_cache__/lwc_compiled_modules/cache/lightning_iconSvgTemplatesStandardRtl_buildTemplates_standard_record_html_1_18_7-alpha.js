import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./record.css";

import _implicitScopedStylesheets from "./record.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M63 30v-4c0-3.3-2.7-6-6-6H43c-3.3 0-6 2.7-6 6v4c0 1.1.9 2 2 2h22c1.1 0 2-.9 2-2zm-41 1v43c0 3.3 2.7 6 6 6h44c3.3 0 6-2.7 6-6V31c0-3.3-2.7-6-6-6h-2c-.6 0-1 .4-1 1v4c0 4.4-3.6 8-8 8H39c-4.4 0-8-3.6-8-8v-4c0-.6-.4-1-1-1h-2c-3.3 0-6 2.7-6 6zm39 35c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2v-2zm0-10c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2v-2zm0-10c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2v-2zM33 66c0-1.1.9-2 2-2h20c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2H35c-1.1 0-2-.9-2-2v-2zm0-10c0-1.1.9-2 2-2h20c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2H35c-1.1 0-2-.9-2-2v-2zm0-10c0-1.1.9-2 2-2h20c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2H35c-1.1 0-2-.9-2-2v-2z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_record";
freezeTemplate(tmpl);
