import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom9.css";

import _implicitScopedStylesheets from "./custom9.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M62 20H45.1c-2.5 0-4.7 1.5-5.6 3.8L29 50.9c-.8 2 .7 4.1 2.8 4.1H49l-6.4 22.4c-.6 2.1 2 3.5 3.4 1.8L72.3 48c1.7-1.9.3-5-2.3-5H57l11.4-18.4c1.199-2-.2-4.6-2.601-4.6H62z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustom_custom9";
freezeTemplate(tmpl);
