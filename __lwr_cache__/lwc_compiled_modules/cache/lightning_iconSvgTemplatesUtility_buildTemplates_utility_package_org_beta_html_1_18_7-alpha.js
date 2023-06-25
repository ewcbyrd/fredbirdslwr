import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./package_org_beta.css";

import _implicitScopedStylesheets from "./package_org_beta.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M44.4 23h-5.8c-.4 1.5-1.1 2.8-2.1 4H44v6H8v-6h6v-4H7.6c-2 0-3.6 1.6-3.6 3.6V46c0 1.7 1.3 3 3 3h38c1.7 0 3-1.3 3-3V26.6c0-2-1.6-3.6-3.6-3.6z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M35 9.9C35 6 31.6 3 27.8 3h-8.3c-.8 0-1.5.7-1.5 1.5v21c0 .8.7 1.5 1.5 1.5H28c3.9 0 7-3.2 6.9-7.1 0-1.9-.8-3.6-2.1-4.8 1.4-1.4 2.2-3.2 2.2-5.2zM22 7h6c1.6 0 3 1.3 3 3 0 1.6-1.3 3-3 3h-6V7zm9 13c0 1.6-1.3 3-3 3h-6v-6h6c1.7 0 3 1.3 3 3z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_package_org_beta";
freezeTemplate(tmpl);
