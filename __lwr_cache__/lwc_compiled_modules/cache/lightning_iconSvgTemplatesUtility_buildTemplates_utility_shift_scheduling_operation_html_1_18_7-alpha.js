import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./shift_scheduling_operation.css";

import _implicitScopedStylesheets from "./shift_scheduling_operation.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M46.8 19.6a1.6 1.6 0 011.6 1.6v24a4.81 4.81 0 01-4.8 4.8H8.4a4.81 4.81 0 01-4.8-4.8v-24a1.6 1.6 0 011.6-1.6h41.6zM26 22.8a12 12 0 1012 12 12 12 0 00-12-12zm2.3 5.73l4.3 4.2a.62.62 0 010 .73l-4.3 4.15c-.31.31-.73 0-.73-.47v-2.49a4.93 4.93 0 00-5.18 4.68 5.23 5.23 0 000 .56h-3.11a8.23 8.23 0 018.11-8.35h.18V29c0-.52.43-.78.73-.47zM36.4 2a3.21 3.21 0 013.2 3.2v1.6h4a4.81 4.81 0 014.8 4.8v1.6a1.6 1.6 0 01-1.6 1.6H5.2a1.6 1.6 0 01-1.6-1.6v-1.6a4.81 4.81 0 014.8-4.8h4V5.2a3.2 3.2 0 016.4 0v1.6h14.4V5.2A3.21 3.21 0 0136.4 2z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_shift_scheduling_operation";
freezeTemplate(tmpl);
