import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./level_up.css";

import _implicitScopedStylesheets from "./level_up.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M3.5 44c-.7 0-1.5.7-1.5 1.5v3c0 .8.8 1.5 1.5 1.5h23.9c.8 0 1.6-.8 1.6-1.5V15.3c0-.9 1-1.3 1.7-.7l5.6 5.6c.6.6 1.5.6 2.1 0l2.1-2.1c.6-.6.6-1.5 0-2.1L27 2.4c-.6-.6-1.5-.6-2.1 0L11.4 15.9c-.6.6-.6 1.5 0 2.1l2.1 2.1c.6.6 1.5.6 2.1 0l5.6-5.6c.6-.6 1.8-.2 1.8.7v27.3c0 1.6-1.6 1.5-1.6 1.5H3.5z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_level_up";
freezeTemplate(tmpl);
