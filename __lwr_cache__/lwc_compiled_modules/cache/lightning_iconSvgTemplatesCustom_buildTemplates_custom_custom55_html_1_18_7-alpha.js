import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom55.css";

import _implicitScopedStylesheets from "./custom55.scoped.css?scoped=true";

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
    "d": "M32 61h13c1.1 0 2-.9 2-2V29c0-2.2-2-4-4-4H32.3C31 25 30 26 30 27.3V59c0 1.1.9 2 2 2z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M76 31v32c0 2.2-1.8 4-4 4H28c-2.2 0-4-1.8-4-4V31c-3.3 0-6 2.7-6 6v30c0 3.3 2.7 6 6 6h19c1.1 0 2 .9 2 2s.9 2 2 2h6c1.1 0 2-.9 2-2s.9-2 2-2h19c3.3 0 6-2.7 6-6V37c0-3.3-2.7-6-6-6z"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "d": "M55 61h12.7c1.3 0 2.3-1 2.3-2.3V27c0-1.1-.9-2-2-2H57c-2 0-4 1.8-4 4v30c0 1.1.9 2 2 2z"
  },
  key: 5,
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
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("path", stc2), api_element("path", stc3), api_element("path", stc4)])])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustom_custom55";
freezeTemplate(tmpl);
