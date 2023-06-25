import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom46.css";

import _implicitScopedStylesheets from "./custom46.scoped.css?scoped=true";

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
    "d": "M61 37H39c-1.1 0-2 .9-2 2v22c0 1.1.9 2 2 2h22c1.1 0 2-.9 2-2V39c0-1.1-.9-2-2-2z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M78.5 27.2c.9-.3 1.5-1 1.5-1.9V22c0-1.1-.9-2-2-2h-3.3c-.9 0-1.601.6-1.9 1.5-.6 2-2.5 3.5-4.8 3.5s-4.1-1.5-4.8-3.5c-.3-.9-1-1.5-1.9-1.5h-4.6c-.9 0-1.601.6-1.9 1.5-.6 2-2.5 3.5-4.8 3.5s-4.1-1.5-4.8-3.5c-.3-.9-1-1.5-1.9-1.5h-4.6c-.9 0-1.6.6-1.9 1.5-.6 2-2.5 3.5-4.8 3.5-2.2 0-4.1-1.5-4.8-3.5-.3-.9-1-1.5-1.9-1.5H22c-1.1 0-2 .9-2 2v3.3c0 .9.6 1.6 1.5 1.9 2 .6 3.5 2.5 3.5 4.8s-1.5 4.1-3.5 4.8c-.9.3-1.5 1-1.5 1.9v4.6c0 .9.6 1.6 1.5 1.9 2 .6 3.5 2.5 3.5 4.8s-1.5 4.1-3.5 4.8c-.9.3-1.5 1-1.5 1.9v4.6c0 .9.6 1.601 1.5 1.9 2 .6 3.5 2.5 3.5 4.8s-1.5 4.1-3.5 4.8c-.9.3-1.5 1-1.5 1.9V78c0 1.1.9 2 2 2h3.3c.9 0 1.6-.6 1.9-1.5.6-2 2.5-3.5 4.8-3.5 2.2 0 4.1 1.5 4.8 3.5.3.9 1 1.5 1.9 1.5h4.6c.9 0 1.6-.6 1.9-1.5.6-2 2.5-3.5 4.8-3.5s4.1 1.5 4.8 3.5c.3.9 1 1.5 1.9 1.5h4.6c.9 0 1.601-.6 1.9-1.5.6-2 2.5-3.5 4.8-3.5s4.1 1.5 4.8 3.5c.3.9 1 1.5 1.9 1.5H78c1.1 0 2-.9 2-2v-3.3c0-.9-.6-1.601-1.5-1.9-2-.6-3.5-2.5-3.5-4.8s1.5-4.1 3.5-4.8c.9-.3 1.5-1 1.5-1.9v-4.6c0-.9-.6-1.601-1.5-1.9-2-.6-3.5-2.5-3.5-4.8s1.5-4.1 3.5-4.8c.9-.3 1.5-1 1.5-1.9v-4.6c0-.9-.6-1.6-1.5-1.9-2-.6-3.5-2.5-3.5-4.8s1.5-4.1 3.5-4.8zM69 63c0 3.3-2.7 6-6 6H37c-3.3 0-6-2.7-6-6V37c0-3.3 2.7-6 6-6h26c3.3 0 6 2.7 6 6v26z"
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
      "viewBox": "0 0 100 100",
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustomRtl_custom46";
freezeTemplate(tmpl);
