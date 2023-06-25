import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./arrow_right.css";

import _implicitScopedStylesheets from "./arrow_right.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M41.83 9.66a2 2 0 012-2H48a2 2 0 012 2v32.68a2 2 0 01-2 2h-4.13a2 2 0 01-2-2zM2 24a2.11 2.11 0 012-2h17.4a1.3 1.3 0 00.92-2.24l-4.69-4.8a2 2 0 010-2.86l2.75-2.9a1.87 1.87 0 012.76 0l15 15.42a2 2 0 010 2.86l-15 15.32a1.87 1.87 0 01-2.76 0L17.63 40a2 2 0 010-2.86l4.69-4.8a1.3 1.3 0 00-.92-2.24H4A2.2 2.2 0 012 28z",
    "fill-rule": "evenodd"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_arrow_right";
freezeTemplate(tmpl);
