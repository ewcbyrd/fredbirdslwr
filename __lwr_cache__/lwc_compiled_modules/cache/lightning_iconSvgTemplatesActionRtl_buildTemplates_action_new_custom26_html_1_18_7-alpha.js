import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom26.css";

import _implicitScopedStylesheets from "./new_custom26.scoped.css?scoped=true";

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
    "d": "M6.8 2C4.2 2 2 4.2 2 6.8c0 1.4.6 2.7 1.6 3.6v36.4C3.6 48.6 5 50 6.8 50c1.8 0 3.2-1.4 3.2-3.2V10.4c1-.9 1.6-2.2 1.6-3.6C11.6 4.2 9.4 2 6.8 2zM48.8 10.6c-12.6 6.6-21.1-4.7-33-.4-.6.2-1 .8-1 1.5v20.6c0 1 1 1.8 2.1 1.5 11.4-3.4 19.9 7.3 32.3.5.5-.2.8-.8.8-1.4V11.4c0-.7-.6-1.1-1.2-.8z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesActionRtl_new_custom26";
freezeTemplate(tmpl);
