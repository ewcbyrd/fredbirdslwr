import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom89.css";

import _implicitScopedStylesheets from "./new_custom89.scoped.css?scoped=true";

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
    "d": "M32.3 20.7c-.3-.4-1-.3-1.2.2-1 1.4-1.9 3.4-1.9 5.9v8.8c0 1.3-1 2.4-2.4 2.4-1.3 0-2.4-1-2.4-2.4v-2.5V8.3c0-6.1-5.4-7.1-9.3-5.6-1 .3-2 1-2.7 1.8-.5.6-1 1-1.8 1.3-1.4.3-3.9-1-5.2-1.8-.7-.4-1.7-.2-2.1.4l-1 1.4c-.6.7-.3 1.8.4 2.3 1.5 1 3.9 2.5 5.8 2.8 2.8.5 5.4-.4 7.4-2.3l-.1.1c.6-.5 1.5-1.3 2.2-.4 1.6 2.4-4.8 12.9-4.8 28.1v1.3c0 6.5 6.6 12.1 13 12.4 6.9.3 12.6-5.2 12.6-12 0-3.4 1.3-5.7 2.6-7 .3-.3.3-.8 0-1.1l-9.1-9.3zM47.6 28.3c-.6 0-1.2-.2-1.7-.7L33.1 14.9c-1-1-1-2.5 0-3.4 1-1 2.5-1 3.4 0l12.8 12.8c1 1 1 2.5 0 3.4-.5.4-1.1.6-1.7.6z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesActionRtl_new_custom89";
freezeTemplate(tmpl);
