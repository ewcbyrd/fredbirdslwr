import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./sort.css";

import _implicitScopedStylesheets from "./sort.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M50.9 37.7c.7-.7.7-1.9 0-2.6L36.6 20.7c-.7-.7-1.9-.7-2.6 0L19.7 35.1c-.7.7-.7 1.9 0 2.6l2.6 2.6c.7.7 1.9.7 2.6 0l4.5-4.5c.7-.7 2.1-.2 2.1.9v26.4c0 1 .9 1.9 1.9 1.9h3.7c1 0 1.9-1 1.9-1.9V36.7c0-1.1 1.4-1.6 2.1-.9l4.5 4.5c.7.7 1.9.7 2.6 0l2.7-2.6zm27.4 24.9l-2.6-2.5c-.7-.7-1.9-.7-2.6 0l-4.5 4.5c-.7.7-2.1.2-2.1-.9V37.1c0-1-.9-1.9-1.9-1.9h-3.7c-1 0-1.9 1-1.9 1.9v26.4c0 1.1-1.4 1.6-2.1.9l-4.5-4.5c-.7-.7-1.9-.7-2.6 0l-2.6 2.7c-.7.7-.7 1.9 0 2.6l14.3 14.3c.7.7 1.9.7 2.6 0l14.3-14.3c.7-.7.7-2-.1-2.6z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_sort";
freezeTemplate(tmpl);
