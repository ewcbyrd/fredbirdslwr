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
    "d": "M20 26.2v47.6c0 3.4 2.8 6.2 6.2 6.2h47.6c3.4 0 6.2-2.8 6.2-6.2V26.2c0-3.4-2.8-6.2-6.2-6.2H26.2c-3.4 0-6.2 2.8-6.2 6.2zm32.6 4.2c0 .8-.6 1.6-1.4 1.6H27.8c-.8 0-1.6-.6-1.6-1.4v-3c0-.8.6-1.6 1.4-1.6H51c.8 0 1.6.6 1.6 1.4v3zm11-1.4c0 1.7-1.3 3-3 3s-3-1.3-3-3 1.3-3 3-3 3 1.3 3 3zM74 29c0 1.7-1.3 3-3 3s-3-1.3-3-3 1.3-3 3-3 3 1.3 3 3zM26 39.6c0-.8.6-1.6 1.4-1.6h45c.8 0 1.6.6 1.6 1.4v33c0 .8-.6 1.6-1.4 1.6h-45c-.8 0-1.6-.6-1.6-1.4v-33zm6 9.7c0-1.1.9-2 2-2h7.6c1.1 0 2 .9 2 2v3c0 1.1-.9 2-2 2H34c-1.1 0-2-.9-2-2v-3zm0 11c0-1.1.9-2 2-2h7.6c1.1 0 2 .9 2 2v3c0 1.1-.9 2-2 2H34c-1.1 0-2-.9-2-2v-3zm17.6-11.4v15c0 .8.8 1.4 1.6 1.4h15.4c.8 0 1.4-.8 1.4-1.6v-15c0-.8-.8-1.4-1.6-1.4H51c-.8 0-1.4.8-1.4 1.6zm4 11.4c0-1.3 1.4-2.2 2.8-2.8 1-.4 1.1-.8 1.1-1.2s-.3-.8-.6-1.1c-.6-.5-.9-1.3-.9-2.2 0-1.7 1.1-3.1 2.8-3.1 1.8 0 2.8 1.4 2.8 3.1 0 .9-.3 1.7-.9 2.2-.3.3-.6.6-.6 1.1s.1.9 1.1 1.3c1.4.7 2.8 1.5 2.8 2.8 0 .9-.7 1.8-1.5 1.8H55c-.8 0-1.5-.9-1.4-1.9z"
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
      "viewBox": "0 0 100 100",
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_portal_roles";
freezeTemplate(tmpl);
