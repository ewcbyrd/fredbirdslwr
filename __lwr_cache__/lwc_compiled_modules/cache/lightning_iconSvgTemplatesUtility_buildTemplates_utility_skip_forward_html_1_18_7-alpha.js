import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./skip_forward.css";

import _implicitScopedStylesheets from "./skip_forward.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M26 7.9V2.6c0-.5.6-.8 1.1-.5l10.3 8.5c.4.3.4.9 0 1.2l-10.3 8.4c-.4.4-1.1 0-1.1-.4v-5.4c-8 0-14.6 6.5-14.6 14.6S18 43.5 26 43.5 40.6 37 40.6 28.9c0-2.3-.5-4.5-1.5-6.5 0 0 0-.1-.1-.2-.2-.4-.4-.9-.6-1.2-.3-.5-.6-1.3 0-1.8s3.1-2.6 3.3-2.7c.2-.1.9-.8 1.6.2.4.6.9 1.5 1.3 2.2 0 .1.1.1.1.2.2.3.3.6.4.7 1.3 2.7 2 5.8 2 9.1 0 11.6-9.4 21-21 21S5 40.6 5 29 14.4 7.9 26 7.9z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_skip_forward";
freezeTemplate(tmpl);
