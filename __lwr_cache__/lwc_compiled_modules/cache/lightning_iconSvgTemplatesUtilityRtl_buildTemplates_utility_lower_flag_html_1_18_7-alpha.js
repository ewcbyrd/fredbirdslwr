import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./lower_flag.css";

import _implicitScopedStylesheets from "./lower_flag.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M43.8 3.5v45c0 .8.7 1.5 1.5 1.5h3c.8 0 1.5-.7 1.5-1.5v-45c0-.8-.7-1.5-1.5-1.5h-3c-.8 0-1.5.7-1.5 1.5zM23.1 29.9c3.5-1.9 7.7-3.2 15.4-.6.6.3 1.3-.2 1.3-.9V5.1c0-.6-.4-1.2-1-1.4C19.5-3 21.3 14.2 5.3 5.8c-.7-.4-1.5.1-1.5.8v19.9c2.3-1.2 4.8-1.9 7.5-1.9 4.7 0 8.9 2 11.8 5.3zm-3 2.6l-.7-.7c-.5-.6-1.5-.6-2.1 0l-6 6-6-6c-.5-.6-1.5-.6-2.1 0l-.7.7c-.5.5-.5 1.5 0 2.1l6 6-6 6c-.6.5-.6 1.5 0 2.1l.7.7c.5.6 1.5.6 2.1 0l6-6 6 6c.5.6 1.5.6 2.1 0l.7-.7c.6-.5.6-1.5 0-2.1l-6-6 6-6c.6-.6.6-1.6 0-2.1z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_lower_flag";
freezeTemplate(tmpl);
