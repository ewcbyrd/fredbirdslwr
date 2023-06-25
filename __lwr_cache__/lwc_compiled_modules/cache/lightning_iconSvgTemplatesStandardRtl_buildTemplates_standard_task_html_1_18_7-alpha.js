import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./task.css";

import _implicitScopedStylesheets from "./task.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M19.2 36v-4c0-1.1.9-2 2-2h26c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2h-26c-1 0-2-.9-2-2zM19.2 54v-4c0-1.1.9-2 2-2h32c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2h-32c-1 0-2-.9-2-2zM63.2 54v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2h-4c-1 0-2-.9-2-2zM63.2 72v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2h-4c-1 0-2-.9-2-2zM19.2 72v-4c0-1.1.9-2 2-2h32c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2h-32c-1 0-2-.9-2-2zM84.7 23.7l-2.1-2.1c-.6-.6-1.5-.6-2.1 0L67.3 34.8 62 29.5c-.6-.6-1.5-.6-2.1 0l-2.1 2.1c-.6.6-.6 1.5 0 2.1l7.4 7.4c.6.6 1.4.9 2.1.9.8 0 1.5-.3 2.1-.9l15.3-15.3c.5-.5.5-1.5 0-2.1z"
  },
  key: 3,
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
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("path", stc2)])])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_task";
freezeTemplate(tmpl);
