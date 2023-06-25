import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom13.css";

import _implicitScopedStylesheets from "./new_custom13.scoped.css?scoped=true";

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
    "d": "M45.2 4H6.8C4.2 4 2 6.1 2 8.7v4.7c0 .9.7 1.6 1.6 1.6h44.8c.9 0 1.6-.7 1.6-1.6V8.7C50 6.1 47.8 4 45.2 4zM45.2 19.7H6.8c-.9 0-1.6.7-1.6 1.6v22c0 2.6 2.2 4.7 4.8 4.7h32c2.6 0 4.8-2.1 4.8-4.7v-22c0-.9-.7-1.6-1.6-1.6zm-10.4 7.1c0 1.3-1 2.4-2.4 2.4H19.6c-1.3 0-2.4-1-2.4-2.4 0-1.3 1-2.4 2.4-2.4h12.8c1.4 0 2.4 1 2.4 2.4z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesAction_new_custom13";
freezeTemplate(tmpl);
