import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./table.css";

import _implicitScopedStylesheets from "./table.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M46.5 2h-41C4.7 2 4 2.7 4 3.5v5c0 .8.7 1.5 1.5 1.5h41c.8 0 1.5-.7 1.5-1.5v-5c0-.8-.7-1.5-1.5-1.5zM14.5 14h-9c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h9c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5zM30.5 14h-9c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h9c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5zM46.5 14h-9c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h9c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5zM14.5 24h-9c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h9c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5zM30.5 24h-9c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h9c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5zM46.5 24h-9c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h9c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5zM14.5 34h-9c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h9c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5zM30.5 34h-9c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h9c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5zM46.5 34h-9c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h9c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5zM14.5 44h-9c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h9c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5zM30.5 44h-9c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h9c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5zM46.5 44h-9c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h9c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_table";
freezeTemplate(tmpl);
