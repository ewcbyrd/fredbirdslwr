import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./lock.css";

import _implicitScopedStylesheets from "./lock.scoped.css?scoped=true";

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
    "d": "M11 19h4c.6 0 1-.3 1-.9V18c0-5.7 4.9-10.4 10.7-10 5.3.4 9.3 5 9.3 10.4v-.3c0 .6.4.9 1 .9h4c.6 0 1-.3 1-.9V18c0-9.1-7.6-16.4-16.8-16-8.5.4-15 7.6-15.2 16.1.1.5.5.9 1 .9zM10 18.1v0zM46 27c0-2.2-1.8-4-4-4H10c-2.2 0-4 1.8-4 4v19c0 2.2 1.8 4 4 4h32c2.2 0 4-1.8 4-4V27zM30.6 42.7c.2.6-.3 1.3-1 1.3h-7.3c-.7 0-1.1-.6-1-1.3l1.8-6c-1.5-1-2.4-2.8-2.1-4.8.4-1.9 1.9-3.4 3.9-3.8 3.2-.6 6 1.7 6 4.7 0 1.6-.8 3.1-2.1 3.9l1.8 6z"
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
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("path", stc2)])])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_lock";
freezeTemplate(tmpl);
