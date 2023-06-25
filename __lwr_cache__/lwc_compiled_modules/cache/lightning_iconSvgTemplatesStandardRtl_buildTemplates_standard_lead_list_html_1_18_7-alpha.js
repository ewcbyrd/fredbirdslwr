import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./lead_list.css";

import _implicitScopedStylesheets from "./lead_list.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M62.9 64.3v4c0 1.1-.9 2-2 2H21c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h39.9c1.1 0 2 .9 2 2zm9.9 6c-1.1-.1-1.9-1-1.8-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2h-4.2zm0-17.9c-1.1-.1-1.9-1-1.8-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2h-4.2zm0-17.9c-1.1-.1-1.9-1-1.8-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2h-4.2zm-9.9 11.9v4c0 1.1-.9 2-2 2H25.8c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h35.1c1.1 0 2 .9 2 2zm0-17.8v4c0 1.1-.9 2-2 2H21c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h39.9c1.1 0 2 .9 2 2z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_lead_list";
freezeTemplate(tmpl);
