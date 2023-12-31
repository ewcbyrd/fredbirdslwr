import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./lead_convert.css";

import _implicitScopedStylesheets from "./lead_convert.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M19.6 22.7c-.5-.6-.2-1.5.5-1.7h8.6c6.4 0 11.6 5.5 11 12.1-.6 5.7-5.6 9.9-11.3 9.9h-3.2c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h3.5c9.3 0 16.8-7.5 17-16.7.2-9.5-7.9-17.3-17.4-17.4h-8s-2.6.1-1-1.7L25 7.6c.6-.6.6-1.5 0-2.1l-2.1-2.1c-.6-.6-1.5-.6-2.1 0L7.4 16.9c-.6.6-.6 1.5 0 2.1l13.5 13.5c.6.6 1.5.6 2.1 0l2.1-2.1c.6-.6.6-1.5 0-2.1l-5.5-5.6z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesActionRtl_lead_convert";
freezeTemplate(tmpl);
