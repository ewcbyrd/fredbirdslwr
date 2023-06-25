import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./bookmark_stroke.css";

import _implicitScopedStylesheets from "./bookmark_stroke.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M39 48.91c0 .9-1.1 1.4-1.7.7l-9.9-9.9c-.6-.6-1.5-.6-2.1 0l-10.6 10c-.7.6-1.7.2-1.7-.7V6c0-2.2 1.8-4 4-4h18.01c2.2 0 4 1.8 4 4v42.91H39zm-5.45-8.8c.51.51 1.39.15 1.39-.57V6.88c0-.45-.36-.81-.81-.81H17.88c-.45 0-.81.36-.81.81v33.14c0 .71.85 1.08 1.37.59l4.05-3.82a5.51 5.51 0 017.79.05l3.28 3.28z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_bookmark_stroke";
freezeTemplate(tmpl);
