import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./hierarchy.css";

import _implicitScopedStylesheets from "./hierarchy.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M46.25 46.251H29.404c-.999 0-1.875.875-1.875 1.875V62.5h-5.654c-1 0-1.875.875-1.875 1.875v13.75c0 1 .875 1.875 1.875 1.875h18.75c1 0 1.875-.875 1.875-1.875v-13.75c0-1-.875-1.875-1.875-1.875h-5.642v-8.749h30.035V62.5h-5.613c-1.001 0-1.875.875-1.875 1.875v13.75c0 1 .874 1.875 1.875 1.875h18.75c1 0 1.875-.875 1.875-1.875v-13.75c0-1-.875-1.875-1.875-1.875H72.49V48.126c0-1-.874-1.875-1.875-1.875H53.75V37.5h5.61c1 0 1.875-.875 1.875-1.875v-13.75c0-1-.875-1.875-1.875-1.875H40.61c-1.001 0-1.875.875-1.875 1.875v13.75c0 1 .874 1.875 1.875 1.875h5.64v8.751z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_hierarchy";
freezeTemplate(tmpl);
