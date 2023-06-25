import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./survey.css";

import _implicitScopedStylesheets from "./survey.scoped.css?scoped=true";

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
    "d": "M24 23h44c2.2 0 4 1.8 4 4v4c0 2.2-1.8 4-4 4H24c-2.2 0-4-1.8-4-4v-4c0-2.2 1.8-4 4-4zM24 41h25c2.2 0 4 1.8 4 4v4c0 2.2-1.8 4-4 4H24c-2.2 0-4-1.8-4-4v-4c0-2.2 1.8-4 4-4zM65.9 52c7.7 0 14 6.3 14 14s-6.3 14-14 14-14-6.3-14-14 6.3-14 14-14zm7.9 10.9c.3-.3.3-1 0-1.3l-1.4-1.3c-.4-.4-1-.4-1.4 0l-7.5 8.4-3.4-3.4c-.4-.4-1-.4-1.4 0l-1.4 1.3c-.4.3-.4.9 0 1.3l4.8 4.7c.4.4.9.6 1.4.6.6 0 1-.2 1.4-.6l8.9-9.7zM24 59h23.2c-.8 2.3-1.2 4.3-1.2 6-.1 2.1.1 4.1.6 6H24c-2.2 0-4-1.8-4-4v-4c0-2.2 1.8-4 4-4z"
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
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("path", stc2)])])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_survey";
freezeTemplate(tmpl);
