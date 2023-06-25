import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./side_list.css";

import _implicitScopedStylesheets from "./side_list.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M2 5.5v41c0 .8.7 1.5 1.5 1.5h27c.8 0 1.5-.7 1.5-1.5v-41c0-.8-.7-1.5-1.5-1.5h-27C2.7 4 2 4.7 2 5.5zm34 0v5c0 .8.7 1.5 1.5 1.5h11c.8 0 1.5-.7 1.5-1.5v-5c0-.8-.7-1.5-1.5-1.5h-11c-.8 0-1.5.7-1.5 1.5zm0 12v5c0 .8.7 1.5 1.5 1.5h11c.8 0 1.5-.7 1.5-1.5v-5c0-.8-.7-1.5-1.5-1.5h-11c-.8 0-1.5.7-1.5 1.5zm0 12v5c0 .8.7 1.5 1.5 1.5h11c.8 0 1.5-.7 1.5-1.5v-5c0-.8-.7-1.5-1.5-1.5h-11c-.8 0-1.5.7-1.5 1.5zm0 12v5c0 .8.7 1.5 1.5 1.5h11c.8 0 1.5-.7 1.5-1.5v-5c0-.8-.7-1.5-1.5-1.5h-11c-.8 0-1.5.7-1.5 1.5z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_side_list";
freezeTemplate(tmpl);
