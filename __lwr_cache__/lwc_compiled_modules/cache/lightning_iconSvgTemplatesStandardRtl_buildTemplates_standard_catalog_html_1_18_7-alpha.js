import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./catalog.css";

import _implicitScopedStylesheets from "./catalog.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M61.8 29.4l8.9 8.9c2 1.9 2 5.1 0 7L47.5 68.4V36.6l7.2-7.2c1.9-2 5.2-2 7.1 0zM80 62.5V75c0 2.8-2.2 5-5 5H43.8l22.5-22.5H75c2.8 0 5 2.3 5 5zm-60 6.3V25c0-2.8 2.2-5 5-5h12.5c2.8 0 5 2.2 5 5v43.8c0 6.2-5 11.2-11.2 11.2S20 75 20 68.8zm11.2 5c2.8 0 5-2.2 5-5s-2.2-5-5-5-5 2.2-5 5 2.3 5 5 5z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_catalog";
freezeTemplate(tmpl);
