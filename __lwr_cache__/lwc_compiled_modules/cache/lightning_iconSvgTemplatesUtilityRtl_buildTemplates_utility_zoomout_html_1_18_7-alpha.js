import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./zoomout.css";

import _implicitScopedStylesheets from "./zoomout.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M19 25h12c.6 0 1-.4 1-1v-4c0-.6-.4-1-1-1H19M19 19h-6c-.6 0-1 .4-1 1v4c0 .6.4 1 1 1h6"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M49.6 45.3L38.1 33.8C40.5 30.5 42 26.4 42 22c0-11-9-20-20-20S2 11 2 22s9 20 20 20c4.4 0 8.5-1.5 11.8-3.9l11.5 11.5c.6.6 1.5.6 2.1 0l2.1-2.1c.6-.6.6-1.6.1-2.2zM22 36c-7.7 0-14-6.3-14-14S14.3 8 22 8s14 6.3 14 14-6.3 14-14 14z"
  },
  key: 3,
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
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_zoomout";
freezeTemplate(tmpl);
