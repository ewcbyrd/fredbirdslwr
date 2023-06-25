import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./toggle.css";

import _implicitScopedStylesheets from "./toggle.scoped.css?scoped=true";

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
    "d": "M39.2 2H12.4C6.6 2.2 2 6.9 2 12.8s4.6 10.6 10.4 10.8h26.8c5.9 0 10.8-4.8 10.8-10.8S45.2 2 39.2 2zM12.7 18.8c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zM39.2 28.5H12.4C6.6 28.7 2 33.4 2 39.2S6.6 49.8 12.4 50h26.8c6 0 10.8-4.8 10.8-10.8s-4.8-10.7-10.8-10.7zm.4 18.4H12.3c-4-.2-7.2-3.5-7.2-7.6s3.2-7.4 7.2-7.6h27.3c4 .2 7.2 3.5 7.2 7.6s-3.2 7.4-7.2 7.6z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "cx": "39.2",
    "cy": "39.2",
    "r": "5.2"
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
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("path", stc2), api_element("circle", stc3)])])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_toggle";
freezeTemplate(tmpl);
