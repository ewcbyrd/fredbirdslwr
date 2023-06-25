import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom4.css";

import _implicitScopedStylesheets from "./custom4.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M26.2 32.7L47 20.8c1.9-1.1 4.3-1.1 6.2 0l20.7 11.9c1.899 1.1 3.1 3.2 3.1 5.4v23.8c0 2.199-1.1 4.3-3.1 5.399L53.2 79.2c-1.9 1.1-4.3 1.1-6.2 0L26.2 67.3c-1.9-1.1-3.2-3.2-3.2-5.4V38.1c0-2.2 1.3-4.3 3.2-5.4z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustom_custom4";
freezeTemplate(tmpl);
