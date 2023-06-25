import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./data_streams.css";

import _implicitScopedStylesheets from "./data_streams.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M41.7 28.3h.8A10.85 10.85 0 0153 39.2v4.7l5.9 5.9a1.93 1.93 0 010 2.8L57.5 54a1.93 1.93 0 01-2.8 0l-1.8-1.9v8.7a5 5 0 005 5h.4a10.91 10.91 0 1110.5 13.9 10.86 10.86 0 01-10.5-7.9h-.8A10.85 10.85 0 0147 60.9v-9L44.9 54a1.93 1.93 0 01-2.8 0l-1.3-1.4a1.93 1.93 0 010-2.8l6.3-6.3v-4.3a5 5 0 00-5-5h-.4a11 11 0 110-5.9zm22.1 40.6a5 5 0 0010 0 5 5 0 10-10 0zM26.2 31.2a5 5 0 0010 0 5 5 0 00-10 0z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_data_streams";
freezeTemplate(tmpl);
