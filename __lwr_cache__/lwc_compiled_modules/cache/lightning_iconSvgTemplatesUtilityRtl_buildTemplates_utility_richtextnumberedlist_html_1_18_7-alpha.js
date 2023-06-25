import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./richtextnumberedlist.css";

import _implicitScopedStylesheets from "./richtextnumberedlist.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M3.5 5h27c.8 0 1.5.7 1.5 1.5v3c0 .8-.7 1.5-1.5 1.5h-27C2.7 11 2 10.3 2 9.5v-3C2 5.7 2.7 5 3.5 5zM32 19.5v-3c0-.8-.7-1.5-1.5-1.5h-18c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h18c.8 0 1.5-.7 1.5-1.5zm-30 12v3c0 .8.7 1.5 1.5 1.5h27c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5h-27c-.8 0-1.5.7-1.5 1.5zm9 10v3c0 .8.7 1.5 1.5 1.5h18c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5h-18c-.8 0-1.5.7-1.5 1.5zm39-35v-1c0-.8-.7-1.5-1.5-1.5H44c-1.1 0-2 .9-2 2v14.5c0 .8.7 1.5 1.5 1.5h1c.8 0 1.5-.7 1.5-1.5V8h2.5c.8 0 1.5-.7 1.5-1.5zM38 30v8c0 1.1.9 2 2 2h6v4h-6.5c-.8 0-1.5.7-1.5 1.5v1c0 .8.7 1.5 1.5 1.5H48c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2h-6v-4h6.5c.8 0 1.5-.7 1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5H40c-1.1 0-2 .9-2 2z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_richtextnumberedlist";
freezeTemplate(tmpl);
