import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./shift_ui.css";

import _implicitScopedStylesheets from "./shift_ui.scoped.css?scoped=true";

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
    "d": "M27.8 40.7H48c1.1 0 2 .9 2 2v5.7c0 1.1-.9 2-2 2H27.8c-1.1 0-2-.9-2-2v-5.7c0-1.1.9-2 2-2zM4 17.5h44c1.1 0 2 .9 2 2v13.6c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V19.5c0-1.1.9-2 2-2zM4 2.3h20.2c1.1 0 2 .9 2 2V10c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V4.3c0-1.1.9-2 2-2z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_shift_ui";
freezeTemplate(tmpl);
