import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./send.css";

import _implicitScopedStylesheets from "./send.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M2.1 44.5l4.4-16.3h18.6c.5 0 1-.5 1-1v-2c0-.5-.5-1-1-1H6.5l-4.3-16C2.1 8 2 7.7 2 7.4c0-.7.7-1.4 1.5-1.3.2 0 .3.1.5.1l45 18.5c.6.2 1 .8 1 1.4s-.4 1.1-.9 1.3L4 46.4c-.2.1-.4.1-.6.1-.8-.1-1.4-.7-1.4-1.5 0-.2 0-.3.1-.5z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_send";
freezeTemplate(tmpl);
