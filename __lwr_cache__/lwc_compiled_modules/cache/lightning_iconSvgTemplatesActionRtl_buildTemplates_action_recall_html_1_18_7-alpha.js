import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./recall.css";

import _implicitScopedStylesheets from "./recall.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M26.4 28.5c-.6.6-.6 1.6 0 2.2l2.2 2.2c.6.6 1.6.6 2.2 0l14.1-14.1c.6-.6.6-1.6 0-2.2l-14-14.1c-.6-.6-1.6-.6-2.2 0l-2.2 2.2c-.6.6-.6 1.6 0 2.2l5.9 5.8c1.7 1.9-1 1.8-1 1.8h-8.3c-9.9.1-18.3 8.2-18.1 18.1.2 9.6 8 17.4 17.7 17.4h3.6c.9 0 1.6-.8 1.6-1.6v-3.1c0-.9-.8-1.6-1.6-1.6h-3.4c-6 0-11.2-4.4-11.8-10.3-.6-6.9 4.8-12.6 11.5-12.6h9c.7.2 1 1.2.5 1.8l-5.7 5.9z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesActionRtl_recall";
freezeTemplate(tmpl);
