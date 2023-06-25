import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./outcome.css";

import _implicitScopedStylesheets from "./outcome.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M2.5 25.2c-.5.5-.6 1.4 0 2L16 40.7c.5.5 1.4.6 2 0l2.1-2.2c.5-.5.6-1.4 0-2l-5.6-5.7c-.3-.5-.3-1.1.2-1.5.1-.1.3-.2.5-.2h21.3c.8-.1 1.4-.8 1.5-1.6v-3c0-.8-.7-1.4-1.5-1.4H15.3c-.6 0-1-.5-1-1.1 0-.3.1-.5.3-.7l5.6-5.6c.5-.5.6-1.4 0-2L18 11.6c-.5-.6-1.4-.6-2-.1l-.1.1L2.5 25.2zm30.1-9.6V9.5c0-.8.7-1.5 1.5-1.5h8.4c.8 0 1.5.7 1.5 1.5v33c0 .8-.7 1.5-1.5 1.5h-8.4c-.8 0-1.5-.7-1.5-1.5v-5.9c0-.8-.7-1.5-1.5-1.5h-3c-.8 0-1.5.7-1.5 1.5v9.5c0 2.2 1.8 4 4 4H46c2.2 0 4-1.8 4-4v-40c0-2.2-1.8-4-4-4H30.5c-2.2 0-4 1.8-4 4v9.6c0 .8.7 1.5 1.5 1.5h3c.9 0 1.5-.7 1.6-1.6z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_outcome";
freezeTemplate(tmpl);
