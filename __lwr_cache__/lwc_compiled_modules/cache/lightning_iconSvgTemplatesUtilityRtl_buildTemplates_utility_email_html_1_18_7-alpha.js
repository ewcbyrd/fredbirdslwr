import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./email.css";

import _implicitScopedStylesheets from "./email.scoped.css?scoped=true";

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
    "d": "M24.9 30.1c.6.6 1.5.6 2.1 0l22.6-21c.4-.8.3-2.1-1.3-2.1l-44.7.1c-1.2 0-2.2 1.1-1.3 2.1l22.6 20.9z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M50 17.3c0-1-1.2-1.6-2-.9L30.3 32.7c-1.2 1.1-2.7 1.7-4.3 1.7s-3.1-.6-4.3-1.6L4.1 16.4c-.8-.7-2-.2-2 .9C2 17 2 40 2 40c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V17.3z"
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
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("path", stc2), api_element("path", stc3)])])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_email";
freezeTemplate(tmpl);
