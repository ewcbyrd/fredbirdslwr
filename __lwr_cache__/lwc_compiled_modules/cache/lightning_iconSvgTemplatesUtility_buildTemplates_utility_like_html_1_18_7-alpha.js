import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./like.css";

import _implicitScopedStylesheets from "./like.scoped.css?scoped=true";

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
    "d": "M10.5 21h-5c-.8 0-1.5.7-1.5 1.5v23c0 .8.7 1.5 1.5 1.5H8c2.2 0 4-1.8 4-4V22.5c0-.8-.7-1.5-1.5-1.5zM44 22h-6c-2.2 0-4-1.8-4-4V8c0-2.2-1.8-4-4-4h-2.5c-.8 0-1.5.7-1.5 1.5v6c0 5.3-3.7 10.5-8.5 10.5-.8 0-1.5.7-1.5 1.5v20c0 .8.6 1.5 1.4 1.5 6.8.3 9.1 3 16.2 3 7.5 0 14.4-.8 14.4-9.5V26c0-2.2-1.8-4-4-4z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_like";
freezeTemplate(tmpl);
