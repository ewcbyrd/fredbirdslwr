import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./contract_line_item.css";

import _implicitScopedStylesheets from "./contract_line_item.scoped.css?scoped=true";

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
    "d": "M63 36h10.6c.8 0 1.4-.6 1.4-1.4 0-.4-.1-.7-.4-1L61.4 20.4c-.3-.3-.6-.4-1-.4-.8 0-1.4.6-1.4 1.4V32c0 2.2 1.8 4 4 4z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M73 42H59c-3.3 0-6-2.7-6-6V22c0-1.1-.9-2-2-2H31c-3.3 0-6 2.7-6 6v48c0 3.3 2.7 6 6 6h38c3.3 0 6-2.7 6-6V44c0-1.1-.9-2-2-2zM34.6 68.1c-1.7 0-3.1-1.4-3.1-3.1 0-1.7 1.4-3.1 3.1-3.1 1.7 0 3.1 1.4 3.1 3.1 0 1.7-1.4 3.1-3.1 3.1zm0-12c-1.7 0-3.1-1.4-3.1-3.1 0-1.7 1.4-3.1 3.1-3.1 1.7 0 3.1 1.4 3.1 3.1 0 1.8-1.4 3.1-3.1 3.1zm4.9-15.9l-4.4 2.3c-.3.2-.7-.1-.6-.4l.8-4.9c0-.1 0-.3-.1-.4l-3.6-3.5c-.1-.2.1-.6.4-.7l4.9-.7c.1 0 .3-.1.3-.2l2.2-4.5c.2-.3.6-.3.8 0l2.2 4.5c.1.1.2.2.3.2l4.9.7c.3.1.5.5.2.7l-3.6 3.5c-.1.1-.1.2-.1.4l.8 4.9c.1.3-.3.6-.6.4l-4.4-2.3c-.1-.1-.3-.1-.4 0zM67 66c0 1.1-.9 2-2 2H44.7c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2H65c1.1 0 2 .9 2 2v2zm0-12c0 1.1-.9 2-2 2H44.7c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2H65c1.1 0 2 .9 2 2v2z"
  },
  key: 4,
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
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("path", stc2), api_element("path", stc3)])])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_contract_line_item";
freezeTemplate(tmpl);
