import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./product_transfer.css";

import _implicitScopedStylesheets from "./product_transfer.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M56.19 20.52a1.73 1.73 0 00-2.47 0l-2.47 2.25a1.62 1.62 0 000 2.43l4.21 4.08a1.1 1.1 0 01-.82 1.9H31.83A1.92 1.92 0 0030 32.92v3.46a1.85 1.85 0 001.83 1.74h22.81a1.12 1.12 0 01.82 1.9l-4.21 4.08a1.62 1.62 0 000 2.43L53.72 49a1.72 1.72 0 002.47 0l13.46-13a1.62 1.62 0 000-2.43zM44 51.05a1.73 1.73 0 012.48 0L49 53.3a1.62 1.62 0 010 2.43l-4.26 4.07a1.1 1.1 0 00.82 1.91h22.81a1.92 1.92 0 011.83 1.73v3.47a1.85 1.85 0 01-1.83 1.73H45.56a1.12 1.12 0 00-.82 1.91L49 74.63a1.61 1.61 0 010 2.42l-2.47 2.43a1.74 1.74 0 01-2.48 0l-13.45-13a1.62 1.62 0 010-2.43z",
    "fill-rule": "evenodd"
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
      "viewBox": "0 0 100 100",
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_product_transfer";
freezeTemplate(tmpl);
