import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./survey.css";

import _implicitScopedStylesheets from "./survey.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M5.23 3h35.54A3.29 3.29 0 0144 6.33v3.34A3.29 3.29 0 0140.77 13H5.23A3.29 3.29 0 012 9.67V6.33A3.29 3.29 0 015.23 3zm-.08 15h19.7A3.26 3.26 0 0128 21.33v3.34A3.26 3.26 0 0124.85 28H5.15A3.26 3.26 0 012 24.67v-3.34A3.26 3.26 0 015.15 18zM39 28a11 11 0 11-11 11 11 11 0 0111-11zm7 7.92a.84.84 0 000-1l-1.12-1a.77.77 0 00-1.12 0l-6 6.72-2.72-2.72a.77.77 0 00-1.12 0l-1.12 1a.68.68 0 000 1l3.84 3.76a1.58 1.58 0 001.12.48 1.45 1.45 0 001.12-.48zM5.2 33h18.56a16.14 16.14 0 00-1 5 17.11 17.11 0 00.48 5H5.2A3.28 3.28 0 012 39.67v-3.34A3.28 3.28 0 015.2 33z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_survey";
freezeTemplate(tmpl);
