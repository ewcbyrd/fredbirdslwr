import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom23.css";

import _implicitScopedStylesheets from "./new_custom23.scoped.css?scoped=true";

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
    "d": "M25 30.6c.6.6 1.5.6 2.2 0L49.8 10c.4-.8.3-2-1.3-2H3.7c-1.2 0-2.2 1.2-1.3 2.1L25 30.6z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M50 18.8c0-1-1.3-1.6-2-.9L30.4 34c-1.2 1.1-2.7 1.7-4.3 1.7-1.6 0-3.1-.6-4.3-1.7L4.1 18c-.8-.7-2-.2-2 .9v20.4c0 2.6 2.2 4.7 4.8 4.7h38.4c2.6 0 4.8-2.1 4.8-4.7-.1 0-.1-14.2-.1-20.5z"
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
      "viewBox": "0 0 52 52",
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesAction_new_custom23";
freezeTemplate(tmpl);
