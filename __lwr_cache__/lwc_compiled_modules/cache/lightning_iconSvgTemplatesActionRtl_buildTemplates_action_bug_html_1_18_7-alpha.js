import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./bug.css";

import _implicitScopedStylesheets from "./bug.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M19.7 10.1h12.7c.9 0 1.6-.9 1.4-1.7-.8-3.6-4-6.2-7.8-6.2s-7 2.7-7.8 6.2c-.1.8.6 1.7 1.5 1.7zm27.8 20.7c1.4 0 2.5-1.1 2.4-2.5-.1-1.3-1.2-2.3-2.6-2.3h-7v-4c4.6-1.8 7.9-6.8 7.9-12.6 0-1.2-.8-2.2-2-2.5-1.5-.2-2.8.9-2.8 2.4 0 3.4-1.6 6.4-3.9 7.8-.9-1.4-2.4-2.2-4.1-2.2H16.5c-1.7 0-3.2.9-4.1 2.2-2.3-1.4-3.9-4.3-3.9-7.6 0-1.3-1-2.5-2.2-2.5-1.4-.1-2.5 1-2.5 2.3 0 5.9 3.3 10.9 7.9 12.7v4h-7c-1.3 0-2.5 1-2.5 2.2-.1 1.4 1 2.5 2.4 2.5h7.2v4c-4.6 1.8-7.9 6.8-7.9 12.6 0 1.2.8 2.2 2 2.5 1.5.2 2.8-.9 2.8-2.4 0-3.3 1.5-6.3 3.8-7.7 1.4 4.5 4.8 7.9 9.2 9.4 1 .3 2.1-.5 2.1-1.5V28.5c0-1.3 1-2.5 2.2-2.5 1.4-.1 2.5 1 2.5 2.4v19.2c0 1.1 1 1.8 2.1 1.5 4.4-1.4 7.9-4.9 9.2-9.4 2.2 1.4 3.7 4.3 3.8 7.5 0 1.3 1 2.5 2.2 2.5 1.4.1 2.5-1 2.5-2.4 0-5.9-3.3-10.9-7.9-12.7v-4h7.1v.2z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesActionRtl_bug";
freezeTemplate(tmpl);
