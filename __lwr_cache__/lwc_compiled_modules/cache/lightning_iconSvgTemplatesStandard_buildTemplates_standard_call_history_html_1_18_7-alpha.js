import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./call_history.css";

import _implicitScopedStylesheets from "./call_history.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M28.1 48c-.1.7-.1 1.3-.1 2h-6c0-.7 0-1.3.1-2h6z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M50 22c-14.8 0-26.9 11.5-27.9 26 0 .3-.1.7-.1 1h-4.5c-1.3 0-2 1.5-1.2 2.4l7.5 9.1c.6.7 1.7.7 2.3 0l7.5-9.1c.8-1 .1-2.4-1.2-2.4H28v-1c1-11.2 10.5-20 21.9-20 13 0 23.3 11.3 21.9 24.5-1 9.5-10 18.5-19.6 19.4-7.1.7-13.8-1.9-18.5-7-.6-.7-1.4-1.1-2.2-.1l-2.4 2.9c-.5.6-.1 1 .4 1.5 5.4 5.7 12.8 8.9 20.8 8.8 14.4-.2 26.5-11.6 27.5-26C79.1 35.7 66.1 22 50 22z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M47.2 42.8c.7-.9.7-2.2-.1-3.2L45 37c-1-1.2-2.8-1.3-3.9-.2l-2.4 2.4c-.5.5-.8 1.2-.8 2 .3 5.5 2.8 10.8 6.5 14.4s8.9 6.2 14.4 6.5c.7 0 1.5-.2 2-.8l2.4-2.4c1.1-1.1 1-2.9-.2-3.9l-2.7-2.1c-.9-.7-2.2-.8-3.2-.1l-2.6 1.9c-.3.3-.8.2-1.1-.1l-4.2-3.8-3.8-4.2c-.3-.3-.3-.8-.1-1.1l1.9-2.7z"
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
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2), api_element("path", stc3)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_call_history";
freezeTemplate(tmpl);
