import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom10.css";

import _implicitScopedStylesheets from "./custom10.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M69.8 77.9c-9.399 3.8-24.2 2.8-32.3-6C18 50.8 35.1 20 58.6 20c3.9 0 7.7.8 11.2 2.2 1.5.6 1.601 2.6.4 3.5C62.6 31.1 57.6 40 57.6 50c0 10.1 4.9 19 12.5 24.4 1.3.9 1.1 2.9-.3 3.5z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustom_custom10";
freezeTemplate(tmpl);
