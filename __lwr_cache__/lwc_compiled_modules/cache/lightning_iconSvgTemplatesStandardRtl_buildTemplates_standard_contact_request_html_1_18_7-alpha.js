import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./contact_request.css";

import _implicitScopedStylesheets from "./contact_request.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M49.5 21.9c-16.6 0-29.9 12.3-29.9 27.4 0 4.8 1.4 9.3 3.6 13.3.4.6.5 1.4.3 2.1l-3.9 10.7c-.4 1 .6 1.9 1.6 1.6l10.9-4.1c.6-.3 1.4-.1 2.1.3 4.5 2.5 9.9 4 15.7 4 7.4-.1 14.3-2.6 19.5-6.9 2.3-1.7 4.9-5 4.9-5 3.3-4.5 5.3-9.9 5.3-15.7-.1-15.5-13.5-27.7-30.1-27.7zm16.3 27.2L52.2 62.5c-.6.6-1.5.6-2.1 0L48 60.4c-.6-.6-.6-1.6 0-2.1l5.5-5.5c.6-.6.1-1.7-.7-1.7h-1.6c-6.2-.1-11.6 3.8-13.8 9.2-.2.4-.8.7-1.4.1l-2.7-2.7c-.6-.6-.6-1.2-.4-1.4 3.5-6.6 10.3-11.1 17.5-11.1 0 0 2.7-.1 2.6-.1.8 0 1.3-1.1.7-1.7l-5.5-5.6c-.6-.6-.4-1.5.1-2.1l2.1-2.1c.6-.6 1.6-.6 2.1 0L65.8 47c.7.6.6 1.5 0 2.1z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_contact_request";
freezeTemplate(tmpl);
