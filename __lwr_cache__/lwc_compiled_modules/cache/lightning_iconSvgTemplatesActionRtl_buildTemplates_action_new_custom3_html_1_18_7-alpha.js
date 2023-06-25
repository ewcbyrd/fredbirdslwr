import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom3.css";

import _implicitScopedStylesheets from "./new_custom3.scoped.css?scoped=true";

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
    "d": "M26 16.4c-5.3 0-9.6 4.3-9.6 9.6s4.3 9.6 9.6 9.6 9.6-4.3 9.6-9.6-4.3-9.6-9.6-9.6z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M50 26c0-2.8-6.7-4.2-7.8-6.7-1-2.6 2.7-8.3.8-10.3s-7.7 1.8-10.2.7c-2.6-1-4-7.7-6.8-7.7s-4.2 6.7-6.7 7.8C16.7 10.8 11 7.1 9 9s1.8 7.7.7 10.2c-1 2.6-7.7 4-7.7 6.8s6.7 4.2 7.8 6.7c1 2.6-2.7 8.3-.8 10.3 1.9 1.9 7.7-1.8 10.2-.7 2.5 1 3.9 7.8 6.7 7.8s4.2-6.7 6.7-7.8c2.6-1 8.3 2.6 10.2.7 1.9-1.9-1.8-7.7-.7-10.2 1.2-2.6 7.9-4 7.9-6.8zM26 40.4c-7.9 0-14.4-6.5-14.4-14.4S18.1 11.6 26 11.6 40.4 18.1 40.4 26 33.9 40.4 26 40.4z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesActionRtl_new_custom3";
freezeTemplate(tmpl);
