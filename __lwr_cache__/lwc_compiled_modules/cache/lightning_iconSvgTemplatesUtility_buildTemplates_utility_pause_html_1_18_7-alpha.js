import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./pause.css";

import _implicitScopedStylesheets from "./pause.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M30 43c0 1 .9 2 2 2h4c1.1 0 2-1.1 2-2V9c0-1-.9-2-2-2h-4c-1.1 0-2 1.1-2 2v34zM14 43c0 1 .9 2 2 2h4c1.1 0 2-1.1 2-2V9c0-1-.9-2-2-2h-4c-1.1 0-2 1.1-2 2v34z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_pause";
freezeTemplate(tmpl);
