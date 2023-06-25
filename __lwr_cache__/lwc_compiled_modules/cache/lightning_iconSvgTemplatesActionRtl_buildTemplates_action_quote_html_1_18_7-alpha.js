import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./quote.css";

import _implicitScopedStylesheets from "./quote.scoped.css?scoped=true";

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
    "d": "M35 23H17c-.6 0-1 .4-1 1v3c0 .6.4 1 1 1h18c.6 0 1-.4 1-1v-3c0-.6-.4-1-1-1zM33 32H19c-.6 0-1 .4-1 1v3c0 .6.4 1 1 1h14c.6 0 1-.4 1-1v-3c0-.6-.4-1-1-1z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M45.8 12.3l-9.6-9.2c-.8-.7-1.8-1.1-2.8-1.1H18.6c-1 0-2 .4-2.8 1.1l-9.6 9.2c-.8.8-1.2 1.8-1.2 2.9V46c0 2.2 1.8 4 4 4h34c2.2 0 4-1.8 4-4V15.2c0-1.1-.4-2.1-1.2-2.9zM26 5c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4zm15 37.5c0 .8-.7 1.5-1.5 1.5h-27c-.8 0-1.5-.7-1.5-1.5v-25c0-.8.7-1.5 1.5-1.5h27c.8 0 1.5.7 1.5 1.5v25z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesActionRtl_quote";
freezeTemplate(tmpl);
