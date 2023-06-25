import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./prompt.css";

import _implicitScopedStylesheets from "./prompt.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M76.25 23.1h-52.5c-2.12 0-3.75 1.63-3.75 3.75V65.1c0 2.12 1.63 3.75 3.75 3.75h18.13l4.5 6.5c1.25 1.75 3.5 2.13 5.25.88l.75-.75 5.25-6.63h18.63c2.12 0 3.75-1.63 3.75-3.75V26.85c0-2.12-1.63-3.75-3.75-3.75z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_prompt";
freezeTemplate(tmpl);
