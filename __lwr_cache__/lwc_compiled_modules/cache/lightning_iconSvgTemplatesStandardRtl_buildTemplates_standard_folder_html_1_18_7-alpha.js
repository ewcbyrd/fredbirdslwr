import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./folder.css";

import _implicitScopedStylesheets from "./folder.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M75 34.7H46.6c-1.8 0-3.4-1-4.4-2.5l-4.4-7.6C37 23 35.4 22 33.5 22H25c-2.8 0-5 2.3-5 5.1v45.8c0 2.8 2.2 5.1 5 5.1h50c2.8 0 5-2.3 5-5.1V39.8c0-2.8-2.2-5.1-5-5.1z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M75 24.5H44.9c-.5 0-.8.5-.5.9l2 3.4c.2.5.6.8 1.1.8H75c1.4 0 2.8.3 3.9.8.5.3 1.1-.1 1.1-.8 0-2.8-2.2-5.1-5-5.1z"
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
      "viewBox": "0 0 100 100",
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_folder";
freezeTemplate(tmpl);
