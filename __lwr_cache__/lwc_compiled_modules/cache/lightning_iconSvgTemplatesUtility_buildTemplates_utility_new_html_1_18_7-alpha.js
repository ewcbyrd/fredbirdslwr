import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new.css";

import _implicitScopedStylesheets from "./new.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M43 9C33.6-.3 18.4-.3 9 9-.3 18.4-.3 33.6 9 43c9.4 9.4 24.6 9.4 33.9 0 9.4-9.4 9.4-24.6.1-34zm-1 19c0 .6-.4 1-1 1H30c-.5 0-1 .5-1 1v11c0 .5-.5 1-1 1h-4c-.6 0-1-.4-1-1V30c0-.6-.4-1-1-1H11c-.6 0-1-.4-1-1v-4c0-.5.5-1 1-1h11c.6 0 1-.4 1-1V11c0-.5.5-1 1-1h4c.5 0 1 .4 1 1v11c0 .6.4 1 1 1h11c.5 0 1 .5 1 1v4z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_new";
freezeTemplate(tmpl);
