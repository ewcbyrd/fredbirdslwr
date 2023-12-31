import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./sender_email.css";

import _implicitScopedStylesheets from "./sender_email.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M27.47 16.51c0-5.42-3.19-10.11-8.81-10.11s-8.8 4.69-8.8 10.11c-.03 1.34.21 2.66.7 3.91a9.923 9.923 0 002.18 3.32c1.11.95 1.82 2.28 1.99 3.73 0 1.44-.47 2.63-3.67 4.08-4.58 2.04-8.94 4.35-9.05 8.66-.04.66.05 1.32.27 1.94s.56 1.2 1 1.69a5.04 5.04 0 003.47 1.67h20.53c-.52-.89-.79-1.91-.79-2.94v-10.9l-.26-.12c-3.06-1.45-3.67-2.76-3.67-4.08.06-.72.26-1.42.59-2.07.33-.64.8-1.21 1.36-1.67.95-.94 1.71-2.07 2.22-3.31.51-1.24.76-2.57.74-3.91zM39.59 39.85c.25.25.62.25.87 0l9.37-8.71c.17-.33.12-.87-.54-.87l-18.53.04c-.5 0-.91.46-.54.87l9.37 8.66zM50 34.55a.5.5 0 00-.83-.37l-7.34 6.76c-.5.46-1.12.7-1.78.7s-1.29-.25-1.78-.66l-7.3-6.8a.492.492 0 00-.83.37c-.04-.12-.04 9.41-.04 9.41 0 .91.75 1.66 1.66 1.66h16.58c.91 0 1.66-.75 1.66-1.66v-9.41z",
    "fill-rule": "evenodd"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_sender_email";
freezeTemplate(tmpl);
