import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./push.css";

import _implicitScopedStylesheets from "./push.scoped.css?scoped=true";

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
    "d": "M44 2H20c-2.2 0-4 1.8-4 4v.1c0 .7.4 1.4 1 1.8.3.2 4.1 4 4.1 4 .3.3.8 0 .8-.4 0-.8.7-1.6 1.5-1.6h17c.8 0 1.6.8 1.6 1.6v27c0 .8-.8 1.4-1.6 1.4h-17c-.8 0-1.4-.6-1.4-1.4v-.1c0-.4-.5-.6-.8-.3 0 0-3.8 3.8-4.2 4-.6.4-1 1-1 1.8v2c0 2.2 1.7 4 3.9 4h24c2.2 0 4.1-1.8 4.1-4V6c0-2.2-1.8-4-4-4zM32 48c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M27.6 23.9L15.1 11.4c-.6-.6-1.5-.6-2.1 0l-2.1 2.1c-.6.6-.6 1.5 0 2.1l4.6 4.6c.6.6.2 1.7-.7 1.7H1.5c-.8.1-1.5.8-1.5 1.6v3c0 .8.7 1.5 1.5 1.5h13.2c.9 0 1.3 1.1.7 1.7l-4.6 4.6c-.6.6-.6 1.5 0 2.1l2.1 2.1c.6.6 1.5.6 2.1 0L27.6 26c.5-.5.5-1.5 0-2.1z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_push";
freezeTemplate(tmpl);
