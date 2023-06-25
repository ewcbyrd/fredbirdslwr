import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./snippet_alt.css";

import _implicitScopedStylesheets from "./snippet_alt.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M35.62 25H21.87c-1 0-1.88.87-1.88 1.88v16.25c0 1 .88 1.88 1.88 1.88h13.75c1 0 1.88-.88 1.88-1.88V26.88c0-1-.87-1.88-1.88-1.88zM78.12 25H44.38c-1 0-1.88.87-1.88 1.88v3.75c0 1 .88 1.88 1.88 1.88h33.75c1 0 1.88-.87 1.88-1.88v-3.75c0-1-.88-1.88-1.88-1.88zM44.38 45h21.25c1 0 1.88-.88 1.88-1.88v-3.75c0-1-.88-1.88-1.88-1.88H44.38c-1 0-1.88.88-1.88 1.88v3.75c0 1 .88 1.88 1.88 1.88zM35.62 55H21.87c-1 0-1.88.88-1.88 1.88v16.25c0 1 .88 1.88 1.88 1.88h13.75c1 0 1.88-.88 1.88-1.88V56.88c0-1-.87-1.88-1.88-1.88zM78.12 55H44.38c-1 0-1.88.88-1.88 1.88v3.75c0 1 .88 1.88 1.88 1.88h33.75c1 0 1.88-.88 1.88-1.88v-3.75c0-1-.88-1.88-1.88-1.88zM65.62 67.5H44.37c-1 0-1.88.88-1.88 1.88v3.75c0 1 .88 1.88 1.88 1.88h21.25c1 0 1.88-.88 1.88-1.88v-3.75c0-1-.88-1.88-1.88-1.88z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_snippet_alt";
freezeTemplate(tmpl);
