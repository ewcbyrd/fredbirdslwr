import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./share.css";

import _implicitScopedStylesheets from "./share.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M2 31.5V46c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V18c0-2.2-1.8-4-4-4h-7.5c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h4c.8 0 1.5.7 1.5 1.5v21c0 .8-.7 1.5-1.5 1.5h-33c-.8 0-1.5-.7-1.5-1.5v-11c0-.8-.7-1.5-1.5-1.5h-3c-.8 0-1.5.7-1.5 1.5zm13.4-17.6c-.9 0-1.3-1.1-.7-1.7l5.6-5.6c.6-.6.5-1.5-.1-2.1L18 2.4c-.6-.6-1.5-.6-2.1 0L2.4 15.9c-.6.6-.6 1.5 0 2.1L16 31.5c.6.6 1.5.6 2.1 0l2.1-2.1c.6-.6.6-1.5 0-2.1l-5.5-5.6c-.6-.6-.2-1.7.7-1.7H17c7.8 0 14.2 6.2 14.9 13.7.1.7.7 1.3 1.5 1.3h3c.9 0 1.6-.8 1.5-1.6C37.1 22.9 28 14 18 14c.1 0-2.6-.1-2.6-.1z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesActionRtl_share";
freezeTemplate(tmpl);
