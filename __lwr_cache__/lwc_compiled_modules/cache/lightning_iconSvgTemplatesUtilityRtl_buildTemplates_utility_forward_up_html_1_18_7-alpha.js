import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./forward_up.css";

import _implicitScopedStylesheets from "./forward_up.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M46.8 49.4l2.8-2.8c.8-.7.7-1.9-.1-2.7L18.1 12.5c-.9-.9-.2-2.3 1-2.4h18.2c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2H4.1c-1.1 0-2 .9-2 2l-.2 33.1c0 1.1.9 2 2 2h4.2c1.1 0 2-.9 2-2V19c0-1.1 1.4-1.8 2.3-.9l31.5 31.5c.8.8 2.1.6 2.9-.2z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_forward_up";
freezeTemplate(tmpl);
