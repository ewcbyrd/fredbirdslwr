import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./opportunity_contact_role.css";

import _implicitScopedStylesheets from "./opportunity_contact_role.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M64.9 47.4c-8.2 0-15 6.7-15 15 0 8.2 6.7 15 15 15s15-6.7 15-15-6.8-15-15-15zm7.3 13.1l-2.8 2.8c-.3.3-.4.6-.4.8l.7 4.2c.2 1.2-.9.5-.9.5L65.4 67c-.5-.3-1 0-1 0l-3.5 1.8c-.9.5-.9 0-.9-.4l.7-3.9c.1-.8-.3-1.1-.3-1.2l-2.5-2.4-.3-.3c-.3-.3-.5-.8.6-1l3.5-.5c.5-.1.8-.3.9-.5l1.9-3.9c.1-.3.5-.6.9.2l1.9 3.8c.1.2.4.3.6.4h.3l3.7.5h.1c.2.1.9.3.2.9z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M48.9 77.2c1 0 1.6-1.2 1-2-3.2-3.6-5-8.2-5-13 0-3.4 1.1-7.2 2.9-10.2 2.1-3.6 4.5-5.1 6.4-7.9 3.1-4.6 3.7-11.2 1.7-16.2-2-5.1-6.7-8.1-12.2-8s-10 3.5-11.7 8.6c-2 5.6-1.1 12.4 3.4 16.6 1.9 1.7 3.5 4.4 2.6 7-.2.5-.8 1.3-2.2 1.9-5.7 2.5-11.5 5.5-14.1 9.7-.5.8-1.5 2.8-1.6 5.6 0 .7 0 1.3.1 2.2 0 .4 0 .4.1.8.3 1.7 1.3 3.2 2.8 4.1.6.3 2 .8 4.7.8h21.1z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_opportunity_contact_role";
freezeTemplate(tmpl);
