import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./case_comment.css";

import _implicitScopedStylesheets from "./case_comment.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M38 30h4c.6 0 1-.4 1-1v-3h14v3c0 .6.4 1 1 1h4c.6 0 1-.4 1-1v-3c0-3.3-2.7-6-6-6H43c-3.3 0-6 2.7-6 6v3c0 .6.4 1 1 1zM74 36H26c-3.3 0-6 2.7-6 6v32c0 3.3 2.7 6 6 6h48c3.3 0 6-2.7 6-6V42c0-3.3-2.7-6-6-6zM50.9 68c-2.3 0-4.4-.6-6.2-1.6-.2-.1-.4-.1-.7-.1L40 68c-.6.2-1.2-.4-1-1l1.7-4.1c.1-.2 0-.5-.1-.6-1-1.6-1.5-3.4-1.5-5.4 0-6.1 5.3-11 11.8-11s11.8 4.9 11.8 11c0 6.2-5.3 11.1-11.8 11.1z"
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
      "viewBox": "0 0 100 100",
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_case_comment";
freezeTemplate(tmpl);
