import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./case.css";

import _implicitScopedStylesheets from "./case.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M17.2 11.3h2.9c.4 0 .7-.3.7-.7V8.4h10.3v2.2c0 .4.3.7.7.7h2.9c.4 0 .7-.3.7-.7V8.4C35.4 6 33.4 4 31 4H20.9c-2.4 0-4.4 2-4.4 4.4v2.2c0 .4.2.7.7.7zm26.4 4.4H8.4c-2.4 0-4.4 2-4.4 4.4v23.5C4 46 6 48 8.4 48h35.2c2.4 0 4.4-2 4.4-4.4V20.1c0-2.4-2-4.4-4.4-4.4z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_case";
freezeTemplate(tmpl);
