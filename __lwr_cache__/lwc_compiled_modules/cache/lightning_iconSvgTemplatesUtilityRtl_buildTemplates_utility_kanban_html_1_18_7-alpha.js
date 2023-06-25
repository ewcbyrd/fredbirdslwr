import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./kanban.css";

import _implicitScopedStylesheets from "./kanban.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M32 17.5c0-.8-.7-1.5-1.5-1.5h-9c-.8 0-1.5.7-1.5 1.5v27c0 .8.7 1.5 1.5 1.5h9c.8 0 1.5-.7 1.5-1.5v-27zM14 17.5c0-.8-.7-1.5-1.5-1.5h-9c-.8 0-1.5.7-1.5 1.5v31c0 .8.7 1.5 1.5 1.5h9c.8 0 1.5-.7 1.5-1.5v-31zM50 17.5c0-.8-.7-1.5-1.5-1.5h-9c-.8 0-1.5.7-1.5 1.5v23c0 .8.7 1.5 1.5 1.5h9c.8 0 1.5-.7 1.5-1.5v-23zM50 3.5c0-.8-.7-1.5-1.5-1.5h-45C2.7 2 2 2.7 2 3.5v5c0 .8.7 1.5 1.5 1.5h45c.8 0 1.5-.7 1.5-1.5v-5z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_kanban";
freezeTemplate(tmpl);
