import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./date_input.css";

import _implicitScopedStylesheets from "./date_input.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M46.3 19.7H5.7c-.9 0-1.6.7-1.6 1.6v23.5c0 2.6 2.1 4.7 4.7 4.7h34.4c2.6 0 4.7-2.1 4.7-4.7V21.3c0-.9-.7-1.6-1.6-1.6zM18.2 41.6c0 .9-.7 1.6-1.6 1.6h-3.1c-.9 0-1.6-.7-1.6-1.6v-3.1c0-.9.7-1.6 1.6-1.6h3.1c.9 0 1.6.7 1.6 1.6v3.1zm10.9 0c0 .9-.7 1.6-1.6 1.6h-3.1c-.9 0-1.6-.7-1.6-1.6v-3.1c0-.9.7-1.6 1.6-1.6h3.1c.9 0 1.6.7 1.6 1.6v3.1zm0-10.9c0 .9-.7 1.6-1.6 1.6h-3.1c-.9 0-1.6-.7-1.6-1.6v-3.1c0-.9.7-1.6 1.6-1.6h3.1c.9 0 1.6.7 1.6 1.6v3.1zm11 0c0 .9-.7 1.6-1.6 1.6h-3.1c-.9 0-1.6-.7-1.6-1.6v-3.1c0-.9.7-1.6 1.6-1.6h3.1c.9 0 1.6.7 1.6 1.6v3.1zm3.1-23.5h-3.9V5.6c0-1.7-1.4-3.1-3.1-3.1-1.7 0-3.1 1.4-3.1 3.1v1.6H19V5.6c0-1.7-1.4-3.1-3.1-3.1s-3.1 1.4-3.1 3.1v1.6h-4c-2.6 0-4.7 2.1-4.7 4.7v1.6c0 .9.7 1.6 1.6 1.6h40.7c.9 0 1.6-.7 1.6-1.6v-1.6c-.1-2.6-2.2-4.7-4.8-4.7z"
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
      "viewBox": "0 0 52 52",
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_date_input";
freezeTemplate(tmpl);
