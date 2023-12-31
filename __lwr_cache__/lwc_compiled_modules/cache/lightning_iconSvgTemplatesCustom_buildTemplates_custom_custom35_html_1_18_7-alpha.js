import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom35.css";

import _implicitScopedStylesheets from "./custom35.scoped.css?scoped=true";

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
    "d": "M69 40c-1.7 0-3 1.3-3 3v5c0 8.8-7.2 16-16 16s-16-7.2-16-16v-5c0-1.7-1.3-3-3-3s-3 1.3-3 3v5c0 11.1 8.3 20.3 19 21.8V74h-5c-1.7 0-3 1.3-3 3s1.3 3 3 3h16c1.7 0 3-1.3 3-3s-1.3-3-3-3h-5v-4.2C63.7 68.3 72 59.1 72 48v-5c0-1.7-1.3-3-3-3z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M50 58c5.5 0 10-4.5 10-10V29.9c0-5.5-4.4-9.9-9.9-9.9h-.2c-5.5 0-9.9 4.4-9.9 9.9V48c0 5.5 4.5 10 10 10z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustom_custom35";
freezeTemplate(tmpl);
