import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./open_folder.css";

import _implicitScopedStylesheets from "./open_folder.scoped.css?scoped=true";

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
    "d": "M46 14H23.3c-1.4 0-2.7-.8-3.5-2l-3.5-6c-.7-1.2-2-2-3.5-2H6C3.8 4 2 5.8 2 8v36c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V18c0-2.2-1.8-4-4-4z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M46 6H21.9c-.4 0-.6.4-.4.7l1.6 2.7c.2.4.5.6.9.6h22c1.1 0 2.2.2 3.1.6.4.2.9-.1.9-.6 0-2.2-1.8-4-4-4z"
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
      "viewBox": "0 0 52 52",
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_open_folder";
freezeTemplate(tmpl);
