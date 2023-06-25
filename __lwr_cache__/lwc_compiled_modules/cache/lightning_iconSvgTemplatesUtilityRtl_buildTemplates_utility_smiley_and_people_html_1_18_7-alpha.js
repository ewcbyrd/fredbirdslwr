import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./smiley_and_people.css";

import _implicitScopedStylesheets from "./smiley_and_people.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M50 26.1c0 13.3-10.755 24.1-24 24.1S2 39.4 2 26.1 12.755 2 26 2s24 10.8 24 24.1zM17 15c-1.674 0-3 1.767-3 4s1.326 4 3 4 3-1.767 3-4-1.326-4-3-4zm18 0c-1.674 0-3 1.767-3 4s1.326 4 3 4 3-1.767 3-4-1.326-4-3-4zM11 29c.632 7.644 6.158 14 14.921 14C34.685 43 40.368 36.644 41 29H11z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_smiley_and_people";
freezeTemplate(tmpl);
