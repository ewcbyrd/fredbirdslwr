import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom36.css";

import _implicitScopedStylesheets from "./new_custom36.scoped.css?scoped=true";

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
    "d": "M17.2 43.6H14c-.5 0-1.1.3-1.3.8l-1.1 1.9c-.6 1.1-.4 2.6.6 3.3.4.3.9.4 1.3.4.8 0 1.6-.4 2-1.2l2.3-4c.4-.6 0-1.2-.6-1.2zM39.4 44.4c-.3-.5-.8-.8-1.3-.8h-3.2c-.6 0-1 .6-.7 1.2l2.3 4c.5.8 1.3 1.2 2 1.2.5 0 .9-.2 1.3-.4 1-.7 1.3-2.2.6-3.3l-1-1.9zM39.3 2H12.7C10.1 2 8 4.2 8 6.8V34c0 2.6 2.1 4.8 4.7 4.8h26.6c2.6 0 4.7-2.2 4.7-4.8V6.8C44 4.2 41.9 2 39.3 2zM15 35.6c-1.3 0-2.3-1-2.3-2.4s1-2.4 2.3-2.4 2.3 1 2.3 2.4-.9 2.4-2.3 2.4zm22 0c-1.3 0-2.3-1-2.3-2.4s1-2.4 2.3-2.4 2.3 1 2.3 2.4-1 2.4-2.3 2.4zm2.3-9.6c0 .9-.7 1.6-1.6 1.6H14.3c-.9 0-1.6-.7-1.6-1.6V10c0-.9.7-1.6 1.6-1.6h23.5c.9 0 1.6.7 1.6 1.6v16z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesActionRtl_new_custom36";
freezeTemplate(tmpl);
