import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./print.css";

import _implicitScopedStylesheets from "./print.scoped.css?scoped=true";

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
    "d": "M46.5 17.4h-41c-2.2 0-4 1.8-4 4v14c0 2.2 1.8 4 4 4h5.9v5.8c0 2.2 1.8 4 4 4h21.3c2.2 0 4-1.8 4-4v-5.8h5.9c2.2 0 4-1.8 4-4v-14c-.1-2.2-1.9-4-4.1-4zM8.3 27.7c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm27.6 15.4c0 .8-.7 1.5-1.5 1.5h-17c-.8 0-1.5-.7-1.5-1.5v-9.8c0-.8.7-1.5 1.5-1.5h17c.8 0 1.5.7 1.5 1.5v9.8zM40.5 11.1c0 .8-.7 1.5-1.5 1.5H12.8c-.8 0-1.5-.7-1.5-1.5V4.3c0-.8.7-1.5 1.5-1.5H39c.8 0 1.5.7 1.5 1.5v6.8z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_print";
freezeTemplate(tmpl);
