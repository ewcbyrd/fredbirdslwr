import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom23.css";

import _implicitScopedStylesheets from "./custom23.scoped.css?scoped=true";

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
    "d": "M48.7 56c.8.7 1.899.7 2.7 0l28.3-26.2c.5-1 .399-2.6-1.601-2.6l-56 .1c-1.5 0-2.7 1.4-1.6 2.6L48.7 56z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M80 41c0-1.3-1.6-2-2.5-1.1l-22 20.4c-1.5 1.4-3.4 2.1-5.4 2.1-2 0-3.9-.7-5.4-2.101L22.6 39.9c-1-.9-2.5-.2-2.5 1.1v26c0 3.3 2.7 6 6 6h48c3.301 0 6-2.7 6-6-.1 0-.1-18-.1-26z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustomRtl_custom23";
freezeTemplate(tmpl);
