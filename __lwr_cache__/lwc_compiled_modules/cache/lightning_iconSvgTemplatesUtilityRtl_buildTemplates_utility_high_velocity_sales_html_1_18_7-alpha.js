import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./high_velocity_sales.css";

import _implicitScopedStylesheets from "./high_velocity_sales.scoped.css?scoped=true";

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
    "d": "M50 3.2c0-1-.6-1.2-.9-1.2H28.4c-1.5 0-1.5 1.5-1.5 1.5v2.9c0 1.3.8 1.6 1.2 1.6h14.4c.6.1 1.5.5 1.5 2.1v13.6c.1.4.3 1.3 1.5 1.3h3.2s1.3 0 1.3-1.5V3.2z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M37.5 15.7c.1-1-.6-1.2-.9-1.2H15.9c-1.5 0-1.5 1.5-1.5 1.5v2.9c0 1.3.8 1.6 1.2 1.6H30c.6.1 1.5.5 1.5 2.1v13.6c.1.4.3 1.3 1.5 1.3h3.2s1.3 0 1.3-1.5V15.7z"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "d": "M5.3 48.8c.2.2 1 .8 2.1-.3l10.4-10.4c.3-.3 1.2-1 1.2.4v10.2c.1.4.3 1.3 1.5 1.3h3.2s1.3 0 1.3-1.5V28.2c0-1-.6-1.1-.9-1.2H3.4c-1.5 0-1.5 1.5-1.5 1.5v2.9c0 1.3.8 1.6 1.2 1.6h9.6c.4 0 1.6.1.5 1.2l-10 10.2S2 45.5 3 46.5l2.3 2.3z"
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
      "viewBox": "0 0 52 52",
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_high_velocity_sales";
freezeTemplate(tmpl);
