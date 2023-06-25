import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./view_relationship.css";

import _implicitScopedStylesheets from "./view_relationship.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M36 20c0-2.2-1.8-4-4-4H6c-2.2 0-4 1.8-4 4v26c0 2.2 1.8 4 4 4h26c2.2 0 4-1.8 4-4V20z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M43 42h-3v-6h3c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1H17c-.6 0-1 .4-1 1v3h-6V9c0-3.9 3.1-7 7-7h26c3.9 0 7 3.1 7 7v26c0 3.9-3.1 7-7 7z"
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
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesActionRtl_view_relationship";
freezeTemplate(tmpl);
