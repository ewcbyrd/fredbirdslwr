import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./forward.css";

import _implicitScopedStylesheets from "./forward.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M50 27.4v-3c0-.8-.7-1.4-1.5-1.4H15.3c-.9 0-1.3-1.1-.7-1.8l9.6-9.6c.6-.6.6-1.5 0-2.1L22 7.4c-.6-.6-1.5-.6-2.1 0L2.4 24.9c-.6.6-.6 1.5 0 2.1l17.5 17.6c.6.6 1.5.6 2.1 0l2.2-2.2c.6-.6.6-1.5 0-2.1l-9.6-9.6c-.6-.6-.2-1.7.7-1.7h33.2c.9 0 1.5-.8 1.5-1.6z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_forward";
freezeTemplate(tmpl);
