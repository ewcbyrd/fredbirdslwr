import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./contact_list.css";

import _implicitScopedStylesheets from "./contact_list.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M26.3 22.7c-4.5 0-8.2 3.5-8.2 7.8v44.3c0 4.3 3.7 7.8 8.2 7.8h43.6c4.5 0 8.2-3.5 8.2-7.8V30.5c0-4.3-3.7-7.8-8.2-7.8H26.3zM59 38.3c0-1.4 1.2-2.6 2.7-2.6h2.7c1.5 0 2.7 1.2 2.7 2.6v2.6c0 1.4-1.2 2.6-2.7 2.6h-2.7c-1.5 0-2.7-1.2-2.7-2.6v-2.6zm-30 0c0-1.4 1.2-2.6 2.7-2.6h19.1c1.5 0 2.7 1.2 2.7 2.6v2.6c0 1.4-1.2 2.6-2.7 2.6H31.7c-1.5 0-2.7-1.2-2.7-2.6v-2.6zm30 13.1c0-1.4 1.2-2.6 2.7-2.6h2.7c1.5 0 2.7 1.2 2.7 2.6V54c0 1.4-1.2 2.6-2.7 2.6h-2.7c-1.5 0-2.7-1.2-2.7-2.6v-2.6zm-25 0c0-1.4 1.2-2.6 2.7-2.6h14.1c1.5 0 2.7 1.2 2.7 2.6V54c0 1.4-1.2 2.6-2.7 2.6H36.7c-1.5 0-2.7-1.2-2.7-2.6v-2.6zm25 13c0-1.4 1.2-2.6 2.7-2.6h2.7c1.5 0 2.7 1.2 2.7 2.6V67c0 1.4-1.2 2.6-2.7 2.6h-2.7c-1.5 0-2.7-1.2-2.7-2.6v-2.6zm-30 0c0-1.4 1.2-2.6 2.7-2.6h19.1c1.5 0 2.7 1.2 2.7 2.6V67c0 1.4-1.2 2.6-2.7 2.6H31.7c-1.5 0-2.7-1.2-2.7-2.6v-2.6z"
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
      "viewBox": "0 0 100 100",
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_contact_list";
freezeTemplate(tmpl);
