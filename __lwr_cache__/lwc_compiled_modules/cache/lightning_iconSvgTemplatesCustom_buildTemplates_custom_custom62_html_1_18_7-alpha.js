import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom62.css";

import _implicitScopedStylesheets from "./custom62.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M77 70H23c-1.6 0-3 1.3-3 3 0 1.6 1.3 3 3 3h54c1.6 0 3-1.3 3-3s-1.3-3-3-3zM24 64h34v-4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v4h4c1.1 0 2-.9 2-2V28c0-1.1-.9-2-2-2H24c-1.1 0-2 .9-2 2v34c0 1.1.9 2 2 2zm9-26c0-1.1.9-2 2-2h29c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2H35c-1.1 0-2-.9-2-2v-2zm0 12c0-1.1.9-2 2-2h19c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2H35c-1.1 0-2-.9-2-2v-2z"
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
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("path", stc2)])])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustom_custom62";
freezeTemplate(tmpl);
