import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./text_template.css";

import _implicitScopedStylesheets from "./text_template.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M32 37.2v.8h13.9c2.2 0 4-1.8 4-4V6.1c0-2.2-1.8-4-4-4H18.1c-2.2 0-4 1.8-4 4v16.5c1.2.1 2.5.6 3.4 1.6l1.6 1.5.2.2c1.6 1.8 1.8 4.3.7 6.2h6.7c2.8 0 5 2.2 5.2 4.9l.1.2zm11.9-26.1c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V8.3c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v2.8zm-.1 8.7c0 .6-.4 1-1 1H21c-.6 0-1-.4-1-1V17c0-.6.4-1 1-1h21.9c.6 0 1 .4 1 1l-.1 2.8zm-1 9.8H24.9c-.6 0-1-.4-1-1v-2.8c0-.6.4-1 1-1h18c.6 0 1 .4 1 1v2.8c0 .6-.4 1-1.1 1zm-40.4 8c-.4.4-.4 1.1 0 1.6L13 49.8c.4.4 1.1.4 1.6 0l1.6-1.7c.4-.4.4-1.1 0-1.6l-4.4-4.4c-.2-.3-.1-.9.2-1.1.1-.1.2-.2.4-.2h14.3c.6-.2 1.1-.7 1.2-1.3v-2.4c-.1-.6-.6-1.1-1.2-1.1H12.4c-.5 0-.8-.3-.8-.8 0-.3 0-.4.2-.6l4.4-4.4c.4-.4.4-1.1 0-1.6L14.5 27c-.4-.5-1.1-.5-1.7 0L2.4 37.6z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_text_template";
freezeTemplate(tmpl);
