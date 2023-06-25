import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_account.css";

import _implicitScopedStylesheets from "./new_account.scoped.css?scoped=true";

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
    "d": "M50 26.9c.1-1.7-1.2-2.2-1.7-2.2h-18c-1.6 0-1.8 1.7-1.8 1.8V46H50V26.9zm-12.4 14c0 .9-.7 1.7-1.7 1.7h-1.7c-.9 0-1.7-.8-1.7-1.7v-1.7c0-.9.7-1.7 1.7-1.7h1.7c.9 0 1.7.8 1.7 1.7v1.7zm0-8.5c0 .9-.7 1.7-1.7 1.7h-1.7c-.9 0-1.7-.8-1.7-1.7v-1.7c0-.9.7-1.7 1.7-1.7h1.7c.9 0 1.7.8 1.7 1.7v1.7zm8.3 8.5c0 .9-.7 1.7-1.7 1.7h-1.7c-.9 0-1.7-.8-1.7-1.7v-1.7c0-.9.7-1.7 1.7-1.7h1.7c.9 0 1.7.8 1.7 1.7v1.7zm0-8.5c0 .9-.7 1.7-1.7 1.7h-1.7c-.9 0-1.7-.8-1.7-1.7v-1.7c0-.9.7-1.7 1.7-1.7h1.7c.9 0 1.7.8 1.7 1.7v1.7z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M33.4 17.9V8.2c.1-1.7-1.1-2.2-1.6-2.2h-28C2.2 6 2 7.7 2 7.8V46h21.5V21.6s0-2 1.8-2h6.5c1 0 1.6-1 1.6-1.7zM11.1 40.1c0 .9-.7 1.7-1.7 1.7H7.8c-.9 0-1.7-.8-1.7-1.7v-1.7c0-.9.7-1.7 1.7-1.7h1.7c.9 0 1.7.8 1.7 1.7v1.7zm0-8.6c0 .9-.7 1.7-1.7 1.7H7.8c-.9 0-1.7-.8-1.7-1.7v-1.7c0-.9.7-1.7 1.7-1.7h1.7c.9 0 1.7.8 1.7 1.7v1.7zm0-8.5c0 .9-.7 1.7-1.7 1.7H7.8c-.9 0-1.7-.8-1.7-1.7v-1.7c0-.9.7-1.7 1.7-1.7h1.7c.9 0 1.7.8 1.7 1.7V23zm0-8.5c0 .9-.7 1.7-1.7 1.7H7.8c-.9 0-1.7-.8-1.7-1.7v-1.7c0-.9.7-1.7 1.7-1.7h1.7c.9 0 1.7.8 1.7 1.7v1.7zm9.1 25.6c0 .9-.7 1.7-1.7 1.7h-1.7c-.9 0-1.7-.8-1.7-1.7v-1.7c0-.9.7-1.7 1.7-1.7h1.7c.9 0 1.7.8 1.7 1.7v1.7zm0-8.6c0 .9-.7 1.7-1.7 1.7h-1.7c-.9 0-1.7-.8-1.7-1.7v-1.7c0-.9.7-1.7 1.7-1.7h1.7c.9 0 1.7.8 1.7 1.7v1.7zm0-8.5c0 .9-.7 1.7-1.7 1.7h-1.7c-.9 0-1.7-.8-1.7-1.7v-1.7c0-.9.7-1.7 1.7-1.7h1.7c.9 0 1.7.8 1.7 1.7V23zm0-8.5c0 .9-.7 1.7-1.7 1.7h-1.7c-.9 0-1.7-.8-1.7-1.7v-1.7c0-.9.7-1.7 1.7-1.7h1.7c.9 0 1.7.8 1.7 1.7v1.7zm9.1 0c0 .9-.7 1.7-1.7 1.7H26c-.9 0-1.7-.8-1.7-1.7v-1.7c0-.9.7-1.7 1.7-1.7h1.7c.9 0 1.7.8 1.7 1.7v1.7z"
  },
  key: 4,
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
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("path", stc2), api_element("path", stc3)])])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesActionRtl_new_account";
freezeTemplate(tmpl);
