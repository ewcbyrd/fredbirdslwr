import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./save.css";

import _implicitScopedStylesheets from "./save.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M37.1 4v13.6c0 1-.8 1.9-1.9 1.9H13.9c-1 0-1.9-.8-1.9-1.9V4H8C5.8 4 4 5.8 4 8v36c0 2.2 1.8 4 4 4h36c2.2 0 4-1.8 4-4V11.2L40.8 4h-3.7zm7 38.1c0 1-.8 1.9-1.9 1.9H9.9c-1 0-1.9-.8-1.9-1.9V25.4c0-1 .8-1.9 1.9-1.9h32.3c1 0 1.9.8 1.9 1.9v16.7z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M24.8 13.6c0 1 .8 1.9 1.9 1.9h4.6c1 0 1.9-.8 1.9-1.9V4h-8.3l-.1 9.6z"
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
      "viewBox": "0 0 52 52",
      "part": "icon"
    },
    key: 0,
    svg: true
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_save";
freezeTemplate(tmpl);
