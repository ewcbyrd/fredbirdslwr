import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./no_return.css";

import _implicitScopedStylesheets from "./no_return.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M29.76 12.78c.59 0 1.16.03 1.74.08l-4.63 5.93H16.12s-.78 0-1.08.1c-.78.39-.59.98.1 1.67l4.81 4.82c.59.59.49 1.48-.1 2.07l-2.16 2.17c-.59.59-1.28.59-1.86.1L3.07 16.92a1.25 1.25 0 010-1.77L15.73 2.44c.59-.59 1.57-.59 2.06 0l2.06 2.07c.59.59.59 1.58 0 2.07l-4.81 4.82c-.59.59-.59 1.28.39 1.28h.69l13.64.1zM35.89 20.38l3.72-4.76a18.59 18.59 0 018.69 15.77C48.3 41.73 39.96 50 29.76 50h-8.05c-.78 0-1.28-.59-1.28-1.38v-3.15c0-.79.59-1.48 1.37-1.48h7.95c6.97 0 12.56-5.61 12.56-12.6 0-4.75-2.58-8.86-6.42-11.01zM45.33 6.28c.59-.76.6-1.83.01-2.29l-2.21-1.72c-.59-.46-1.62-.2-2.22.56L7.52 45.6c-.59.76-.6 1.83 0 2.29l2.21 1.72c.59.46 1.62.2 2.22-.56L45.33 6.28z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_no_return";
freezeTemplate(tmpl);
