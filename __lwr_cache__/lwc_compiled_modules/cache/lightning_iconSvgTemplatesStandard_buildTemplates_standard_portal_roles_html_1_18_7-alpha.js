import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./portal_roles.css";

import _implicitScopedStylesheets from "./portal_roles.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M73.8 20H26.2c-3.4 0-6.2 2.8-6.2 6.2v47.6c0 3.4 2.8 6.2 6.2 6.2h47.6c3.4 0 6.2-2.8 6.2-6.2V26.2c0-3.4-2.8-6.2-6.2-6.2zm-26.4 7.4c0-.8.8-1.4 1.6-1.4h23.4c.8 0 1.4.8 1.4 1.6v3c0 .8-.8 1.4-1.6 1.4H48.8c-.8 0-1.4-.8-1.4-1.6v-3zm-8-1.4c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3zM29 26c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3zm45 46.6c0 .8-.8 1.4-1.6 1.4h-45c-.8 0-1.4-.8-1.4-1.6v-33c0-.8.8-1.4 1.6-1.4h45c.8 0 1.4.8 1.4 1.6v33z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M68 52.3c0 1.1-.9 2-2 2h-7.6c-1.1 0-2-.9-2-2v-3c0-1.1.9-2 2-2H66c1.1 0 2 .9 2 2v3zM68 63.3c0 1.1-.9 2-2 2h-7.6c-1.1 0-2-.9-2-2v-3c0-1.1.9-2 2-2H66c1.1 0 2 .9 2 2v3zM49 47.3H33.6c-.8 0-1.6.6-1.6 1.4v15c0 .8.6 1.6 1.4 1.6H48.8c.8 0 1.6-.6 1.6-1.4v-15c0-.8-.6-1.6-1.4-1.6zm-4 14.9h-7.5c-.8 0-1.5-.9-1.5-1.8 0-1.3 1.4-2.1 2.8-2.8 1-.4 1.1-.8 1.1-1.3s-.3-.8-.6-1.1c-.6-.5-.9-1.3-.9-2.2 0-1.7 1-3.1 2.8-3.1 1.7 0 2.8 1.4 2.8 3.1 0 .9-.3 1.7-.9 2.2-.3.3-.6.7-.6 1.1s.1.8 1.1 1.2c1.4.6 2.8 1.5 2.8 2.8.1 1-.6 1.9-1.4 1.9z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_portal_roles";
freezeTemplate(tmpl);
