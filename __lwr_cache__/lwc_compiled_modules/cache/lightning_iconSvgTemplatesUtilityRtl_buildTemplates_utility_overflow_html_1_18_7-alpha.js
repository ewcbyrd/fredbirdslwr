import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./overflow.css";

import _implicitScopedStylesheets from "./overflow.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M37.3 9.9H15.8c-2.1 0-3.7 1.7-3.7 3.7v.6c0 .3.3.6.6.6h19.6c2.1 0 3.7 1.7 3.7 3.7v22.1c0 .3.3.6.6.6h.6c2.1 0 3.7-1.7 3.7-3.7V13.6c.1-2-1.6-3.7-3.6-3.7z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M45.3 2H23.8c-2.1 0-3.7 1.7-3.7 3.7v.6c0 .3.3.6.6.6h19.6c2.1 0 3.7 1.7 3.7 3.7v22.1c0 .3.3.6.6.6h.6c2.1 0 3.7-1.7 3.7-3.7V5.7c.1-2-1.6-3.7-3.6-3.7z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M32.6 21.8c0-2-1.7-3.7-3.7-3.7H6.7c-2.1 0-3.7 1.7-3.7 3.7v24.5c0 2 1.7 3.7 3.7 3.7h22.2c2.1 0 3.7-1.7 3.7-3.7V21.8z"
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
      "viewBox": "0 0 52 52",
      "part": "icon"
    },
    key: 0,
    svg: true
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2), api_element("path", stc3)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_overflow";
freezeTemplate(tmpl);
