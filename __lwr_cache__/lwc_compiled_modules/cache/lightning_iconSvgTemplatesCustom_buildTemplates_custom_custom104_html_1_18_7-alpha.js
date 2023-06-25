import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom104.css";

import _implicitScopedStylesheets from "./custom104.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M72.72 20.574H27.28a3.088 3.088 0 00-3.045 3.088v15.485h51.486V23.706a3.088 3.088 0 00-3-3.132zM45.457 42.279v37.147H72.72a3.088 3.088 0 003.044-3.088V42.28h-30.31zm-21.177 0v34.06a3.062 3.062 0 003.045 3.087h15.132V42.28H24.279z",
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustom_custom104";
freezeTemplate(tmpl);
