import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./reply.css";

import _implicitScopedStylesheets from "./reply.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M19.2 18.1s-1.1-1.1-.5-1.7l5.6-5.6c.6-.6.6-1.5 0-2.1l-2.1-2.2c-.6-.6-1.5-.6-2.1 0L6.6 20c-.6.6-.6 1.5 0 2.1l13.5 13.5c.6.6 1.5.6 2.1 0l2.1-2.1c.6-.6.6-1.5 0-2.1l-5.5-5.6c-.6-.6-.2-1.5.5-1.7 11.1.4 20.1 9.3 20.8 20.6 0 .8.7 1.4 1.5 1.4h3c.9 0 1.4-.7 1.3-1.6-.7-14.5-11.7-25.9-26.7-26.4z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_reply";
freezeTemplate(tmpl);
