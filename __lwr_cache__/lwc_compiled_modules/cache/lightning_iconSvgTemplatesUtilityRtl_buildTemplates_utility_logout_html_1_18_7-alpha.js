import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./logout.css";

import _implicitScopedStylesheets from "./logout.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M32.5 50H46c2.2 0 4-1.8 4-4V6c0-2.2-1.8-4-4-4H32.5c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h10c.8 0 1.5.7 1.5 1.5v33c0 .8-.7 1.5-1.5 1.5h-10c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5zM16 40.4c.6.6 1.5.6 2.1 0l2.1-2.1c.6-.6.6-1.5 0-2.1l-5.6-5.6c-.6-.6-.2-1.7.7-1.7h21.2c.8 0 1.5-.8 1.5-1.6v-3c0-.8-.7-1.4-1.5-1.4H15.2c-.9 0-1.3-1.1-.7-1.7l5.6-5.6c.6-.6.6-1.5 0-2.1L18 11.4c-.6-.6-1.5-.6-2.1 0L2.4 24.9c-.6.6-.6 1.5 0 2.1L16 40.4z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_logout";
freezeTemplate(tmpl);
