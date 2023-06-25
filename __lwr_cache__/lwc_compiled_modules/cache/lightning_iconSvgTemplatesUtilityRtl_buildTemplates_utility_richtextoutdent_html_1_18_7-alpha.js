import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./richtextoutdent.css";

import _implicitScopedStylesheets from "./richtextoutdent.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M34.1 23.5v3c0 .8.8 1.5 1.6 1.5h6.4v5.7c0 1 .8 1.5 1.4.9l8.3-9c.3-.4.3-1 0-1.4l-8.3-9c-.5-.6-1.4-.1-1.4.9V22h-6.4c-.8 0-1.6.7-1.6 1.5zm-34-9c0 .8.7 1.5 1.5 1.5h17c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5h-17c-.8 0-1.5.7-1.5 1.5v3zm4 24c0 .8.7 1.5 1.5 1.5h13c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5h-13c-.8 0-1.5.7-1.5 1.5v3zm-4-12c0 .8.7 1.5 1.5 1.5h17c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5h-17c-.8 0-1.5.7-1.5 1.5v3zm24 20c0 .8.7 1.5 1.5 1.5h3c.8 0 1.5-.7 1.5-1.5v-41c0-.8-.7-1.5-1.5-1.5h-3c-.8 0-1.5.7-1.5 1.5v41z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_richtextoutdent";
freezeTemplate(tmpl);
