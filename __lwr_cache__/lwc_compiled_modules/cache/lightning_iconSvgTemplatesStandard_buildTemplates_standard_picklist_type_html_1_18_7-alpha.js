import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./picklist_type.css";

import _implicitScopedStylesheets from "./picklist_type.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M78 36H38c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h40c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2zM78 54H38c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h40c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2zM26 54h-4c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2zM26 36h-4c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2zM26 72h-4c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2zM78 72H38c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h40c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_picklist_type";
freezeTemplate(tmpl);
