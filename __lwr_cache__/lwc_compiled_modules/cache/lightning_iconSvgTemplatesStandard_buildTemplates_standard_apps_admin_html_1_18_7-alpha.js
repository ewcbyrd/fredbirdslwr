import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./apps_admin.css";

import _implicitScopedStylesheets from "./apps_admin.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M73 21H27c-3.3 0-6 2.7-6 6v46c0 3.3 2.7 6 6 6h46c3.3 0 6-2.7 6-6V27c0-3.3-2.7-6-6-6zm-2 52H29c-1.1 0-2-.9-2-2V29c0-1.1.9-2 2-2h42c1.1 0 2 .9 2 2v42c0 1.1-.9 2-2 2z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M45 33H35c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V35c0-1.1-.9-2-2-2zM65 33H55c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V35c0-1.1-.9-2-2-2zM45 53H35c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V55c0-1.1-.9-2-2-2zM65 53H55c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V55c0-1.1-.9-2-2-2z"
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
      "viewBox": "0 0 100 100",
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_apps_admin";
freezeTemplate(tmpl);
