import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_lead.css";

import _implicitScopedStylesheets from "./new_lead.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "cx": "26",
    "cy": "9.2",
    "r": "7.2"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M48.4 21.2H3.6c-1.6 0-2.2 2-.9 2.9l11.7 7.5c.6.4.9 1.1.6 1.8L10.7 48c-.5 1.6 1.6 2.7 2.8 1.5l11.4-12c.6-.7 1.8-.7 2.4 0l11.4 12c1.1 1.2 3.2.1 2.8-1.5L37 33.3c-.2-.6.1-1.4.6-1.8L49.3 24c1.3-.8.7-2.8-.9-2.8z"
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
  }, [api_element("g", stc0, [api_element("circle", stc1), api_element("path", stc2)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesActionRtl_new_lead";
freezeTemplate(tmpl);
