import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./record_lookup.css";

import _implicitScopedStylesheets from "./record_lookup.scoped.css?scoped=true";

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
    "d": "M39 32h22c1.1 0 2-.9 2-2v-4c0-3.3-2.7-6-6-6H43c-3.3 0-6 2.7-6 6v4c0 1.1.9 2 2 2z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M72 25h-2c-.6 0-1 .4-1 1v4c0 4.4-3.6 8-8 8H39c-4.4 0-8-3.6-8-8v-4c0-.6-.4-1-1-1h-2c-3.3 0-6 2.7-6 6v43c0 3.3 2.7 6 6 6h44c3.3 0 6-2.7 6-6V31c0-3.3-2.7-6-6-6zm-7.7 47.6L63 73.9c-.3.3-.9.3-1.3 0l-8.1-8.1c-2.3 1.6-5.2 2.5-8.4 2.1-5.2-.7-9.4-5.1-9.9-10.3-.7-7.2 5.4-13.4 12.6-12.6 5.3.5 9.6 4.6 10.3 9.9.4 3.1-.4 6.1-2.1 8.4l8.1 8.1c.5.2.5.8.1 1.2z"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "d": "M46.9 48.5c-4.4 0-7.9 3.6-7.9 7.9 0 4.4 3.5 7.9 7.9 7.9s7.9-3.5 7.9-7.9-3.5-7.9-7.9-7.9z"
  },
  key: 5,
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
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("path", stc2), api_element("path", stc3), api_element("path", stc4)])])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_record_lookup";
freezeTemplate(tmpl);
