import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./category.css";

import _implicitScopedStylesheets from "./category.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M61.8 29.4l8.9 8.9c2 1.9 2 5.1 0 7L47.5 68.4V36.6l7.2-7.3c1.9-1.9 5.2-1.9 7.1.1zM37.5 20H25c-2.8 0-5 2.2-5 5v43.8C20 75 25 80 31.2 80s11.2-5 11.2-11.2V25c.1-2.8-2.2-5-4.9-5zm-6.3 53.8c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zM75 57.5h-8.8l-6 6H74L73.9 74H49.8l-6 6H75c2.8 0 5-2.2 5-5V62.5c0-2.7-2.2-5-5-5z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_category";
freezeTemplate(tmpl);
