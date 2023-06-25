import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./diamond.css";

import _implicitScopedStylesheets from "./diamond.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    "d": "M24.4 49.2c.9.9 2.2.9 3.1 0l21.9-21.9c.9-.9.9-2.2 0-3.1L27.6 2.4c-.9-.9-2.2-.9-3.1 0L2.6 24.3c-.9.9-.9 2.2 0 3.1l21.8 21.8z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_diamond";
freezeTemplate(tmpl);
