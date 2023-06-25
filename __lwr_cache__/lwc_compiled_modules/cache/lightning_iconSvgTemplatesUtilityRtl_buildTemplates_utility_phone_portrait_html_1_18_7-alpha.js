import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./phone_portrait.css";

import _implicitScopedStylesheets from "./phone_portrait.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M43 4c0-2.2-1.8-4-4-4H13c-2.2 0-4 1.8-4 4v44c0 2.2 1.8 4 4 4h26c2.2 0 4-1.8 4-4V4zM26 50c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm11-9.5c0 .8-.7 1.5-1.5 1.5h-19c-.8 0-1.5-.7-1.5-1.5v-31c0-.8.7-1.5 1.5-1.5h19c.8 0 1.5.7 1.5 1.5v31z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_phone_portrait";
freezeTemplate(tmpl);
