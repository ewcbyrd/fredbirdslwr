import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./bold.css";

import _implicitScopedStylesheets from "./bold.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M41 19c0-6-4.8-11-10.5-11H14c-1.1 0-2 .9-2 2v33c0 1.1.9 2 2 2h16.5C36.2 45 41 40 41 34c0-2.9-1.1-5.5-2.9-7.5 1.8-2 2.9-4.6 2.9-7.5zM30.5 38H19v-8h11.5c1.9 0 3.6 1.9 3.6 4s-1.7 4-3.6 4zm0-15H19v-8h11.5c1.9 0 3.6 1.9 3.6 4s-1.7 4-3.6 4z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_bold";
freezeTemplate(tmpl);
