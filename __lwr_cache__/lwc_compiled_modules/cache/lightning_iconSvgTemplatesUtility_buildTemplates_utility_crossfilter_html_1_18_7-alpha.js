import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./crossfilter.css";

import _implicitScopedStylesheets from "./crossfilter.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M35 9c-1.7 0-3.3.2-4.8.7 1.8 1.5 3.4 3.3 4.7 5.3h.1c6.1 0 11 4.9 11 11s-4.9 11-11 11c-1.5 0-3-.3-4.3-.9.8-1.1 1.5-2.3 2-3.5.2-.5.4-.9.5-1.4.5-1.6.8-3.4.8-5.2 0-9.4-7.6-17-17-17S0 16.6 0 26s7.6 17 17 17c1.7 0 3.3-.2 4.8-.7-1.8-1.5-3.4-3.3-4.7-5.3H17c-6.1 0-11-4.9-11-11s4.9-11 11-11c1.5 0 3 .3 4.4.9C19.3 18.7 18 22.2 18 26c0 9.4 7.6 17 17 17s17-7.6 17-17S44.4 9 35 9z"
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
      "viewBox": "0 0 52 52",
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_crossfilter";
freezeTemplate(tmpl);
