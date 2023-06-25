import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom41.css";

import _implicitScopedStylesheets from "./custom41.scoped.css?scoped=true";

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
    "d": "M76 29H24c-3.3 0-6 2.7-6 6v29c0 3.3 2.7 6 6 6h52c3.3 0 6-2.7 6-6V35c0-3.3-2.7-6-6-6zM31 64c0-3.9-3.1-7-7-7V42c3.9 0 7-3.1 7-7h38c0 3.9 3.1 7 7 7v15c-3.9 0-7 3.1-7 7H31z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "cx": "50",
    "cy": "49",
    "r": "10"
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
      "viewBox": "0 0 100 100",
      "part": "icon"
    },
    key: 0,
    svg: true
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("path", stc2), api_element("circle", stc3)])])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustomRtl_custom41";
freezeTemplate(tmpl);
