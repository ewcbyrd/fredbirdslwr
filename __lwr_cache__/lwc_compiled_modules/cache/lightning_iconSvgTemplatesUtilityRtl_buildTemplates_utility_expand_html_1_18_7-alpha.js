import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./expand.css";

import _implicitScopedStylesheets from "./expand.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M48.8 2H33.3c-1 0-1.3.9-.5 1.7l4.9 4.9-9 9c-.5.5-.5 1.3 0 1.9l3.7 3.7c.5.5 1.3.5 1.9 0l9.1-9.1 4.9 4.9c.8.8 1.7.5 1.7-.5V3.1c0-.6-.6-1.1-1.2-1.1zM3.5 50h15.4c1 0 1.3-1.1.5-1.9l-4.9-5 9-9.1c.5-.5.5-1.4 0-1.9l-3.7-3.7c-.5-.5-1.3-.5-1.9 0l-9 9-5-4.9C3 31.7 2 32 2 33v15.4c0 .7.8 1.6 1.5 1.6zM50 48.8V33.3c0-1-.9-1.3-1.7-.5l-4.9 4.9-9-9c-.5-.5-1.3-.5-1.9 0l-3.7 3.7c-.5.5-.5 1.3 0 1.9l9.1 9.1-4.9 4.9c-.8.8-.5 1.7.5 1.7h15.4c.6 0 1.1-.6 1.1-1.2zM2 3.5v15.4c0 1 1.1 1.3 1.9.5l5-4.9 9.1 9c.5.5 1.4.5 1.9 0l3.7-3.7c.5-.5.5-1.3 0-1.9l-9-9 4.9-5C20.3 3 20 2 19 2H3.6C2.9 2 2 2.8 2 3.5z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_expand";
freezeTemplate(tmpl);
