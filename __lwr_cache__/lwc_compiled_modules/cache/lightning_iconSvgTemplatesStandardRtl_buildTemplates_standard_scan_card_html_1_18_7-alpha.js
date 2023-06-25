import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./scan_card.css";

import _implicitScopedStylesheets from "./scan_card.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M74 30H26c-3.3 0-6 2.7-6 6v28c0 3.3 2.7 6 6 6h48c3.3 0 6-2.7 6-6V36c0-3.3-2.7-6-6-6zM25 53c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm47 9c0 1.1-.9 2-2 2H32c-1.1 0-2-.9-2-2V38c0-1.1.9-2 2-2h38c1.1 0 2 .9 2 2v24z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M64 42H38c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h26c1.1 0 2-.9 2-2V44c0-1.1-.9-2-2-2z"
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
      "viewBox": "0 0 100 100",
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_scan_card";
freezeTemplate(tmpl);
