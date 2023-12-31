import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom52.css";

import _implicitScopedStylesheets from "./new_custom52.scoped.css?scoped=true";

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
    "d": "M49.9 14.1c.2-2.6 0-5.1-.4-7.6-.3-2.1-1.9-3.7-4-4-2.6-.4-5-.6-7.6-.4-.7 0-1 .9-.6 1.4l11.2 11.2c.6.4 1.4 0 1.4-.6zM31 3.8c-.4-.4-1-.6-1.5-.4-6 1.7-11.8 4.9-16.5 9.7-4.6 4.6-7.8 10.2-9.5 16-.2.6 0 1.2.4 1.6l17.4 17.4c.4.4 1 .6 1.6.4 5.8-1.8 11.4-4.9 16-9.5 4.7-4.7 8-10.4 9.7-16.5.2-.6 0-1.1-.4-1.5L31 3.8zm-6.7 31.4c-1 1-2.5 1-3.4 0l-4.5-4.5c-1-1-1-2.5 0-3.4 1-1 2.5-1 3.4 0l4.5 4.5c1 1 1 2.5 0 3.4zm5.6-5.6c-1 1-2.5 1-3.4 0L22 25.1c-1-1-1-2.5 0-3.4 1-1 2.5-1 3.4 0l4.5 4.5c1 1 1 2.5 0 3.4zm5.6-5.6c-1 1-2.5 1-3.4 0l-4.5-4.5c-1-1-1-2.5 0-3.4 1-1 2.5-1 3.4 0l4.5 4.5c1 1 1 2.5 0 3.4zM2.1 37.4c-.2 2.7-.1 5.4.4 8.2.3 2.1 1.9 3.7 4 4 2.7.4 5.4.6 8.2.4.7-.1 1-.9.6-1.4L3.4 36.8c-.4-.4-1.3-.1-1.3.6z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesActionRtl_new_custom52";
freezeTemplate(tmpl);
