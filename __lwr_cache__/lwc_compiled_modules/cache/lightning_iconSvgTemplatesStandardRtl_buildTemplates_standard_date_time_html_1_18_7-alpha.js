import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./date_time.css";

import _implicitScopedStylesheets from "./date_time.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M72 26h-5v-2c0-2.2-1.8-4-4-4s-4 1.8-4 4v2H41v-2c0-2.2-1.8-4-4-4s-4 1.8-4 4v2h-5c-3.3 0-6 2.7-6 6v2c0 1.1.9 2 2 2h52c1.1 0 2-.9 2-2v-2c0-3.3-2.7-6-6-6zM76 42H24c-1.1 0-2 .9-2 2v30c0 3.3 2.7 6 6 6h44c3.3 0 6-2.7 6-6V44c0-1.1-.9-2-2-2zM50 75.9c-8.2 0-14.9-6.7-14.9-14.9S41.8 46.1 50 46.1 64.9 52.8 64.9 61 58.2 75.9 50 75.9z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M51.5 60.4V54c0-.5-.4-1-1-1h-1c-.5 0-1 .4-1 1v7c0 .4.1.8.4 1l4.8 4.8c.4.4 1 .4 1.4 0l.7-.7c.4-.4.4-1 0-1.4l-4.3-4.3z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_date_time";
freezeTemplate(tmpl);
