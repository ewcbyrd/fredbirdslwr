import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./output.css";

import _implicitScopedStylesheets from "./output.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M20.8 53.8h41.5c1.1 0 1.6 1.4.9 2.1l-12 12c-.8.8-.8 1.9 0 2.6l2.8 2.8c.8.8 1.9.8 2.6 0l21.9-22c.8-.8.8-1.9 0-2.6l-22-22c-.8-.8-1.9-.8-2.6 0l-2.6 2.6c-.8.8-.8 1.9 0 2.6l12 12c.8.9.3 2.3-.9 2.3H20.9c-1 0-1.9.8-1.9 1.8v3.8c0 1 .8 2 1.8 2z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_output";
freezeTemplate(tmpl);
