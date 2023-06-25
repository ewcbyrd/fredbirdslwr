import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./builder.css";

import _implicitScopedStylesheets from "./builder.scoped.css?scoped=true";

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
    "d": "M11.5 17h-8c-.8 0-1.5.7-1.5 1.5V44c0 2.2 1.8 4 4 4h5.5c.8 0 1.5-.7 1.5-1.5v-28c0-.8-.7-1.5-1.5-1.5zM48.5 17h-30c-.8 0-1.5.7-1.5 1.5v28c0 .8.7 1.5 1.5 1.5H46c2.2 0 4-1.8 4-4V18.5c0-.8-.7-1.5-1.5-1.5zM46 4H6C3.8 4 2 5.8 2 8v3.5c0 .8.7 1.5 1.5 1.5h45c.8 0 1.5-.7 1.5-1.5V8c0-2.2-1.8-4-4-4z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_builder";
freezeTemplate(tmpl);
