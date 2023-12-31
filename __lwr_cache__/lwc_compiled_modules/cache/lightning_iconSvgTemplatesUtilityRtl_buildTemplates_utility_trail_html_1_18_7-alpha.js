import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./trail.css";

import _implicitScopedStylesheets from "./trail.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M27.8 2c3.3 0 5.9 2.6 5.9 5.9s-2.7 5.9-5.9 5.9-5.9-2.6-5.9-5.9S24.5 2 27.8 2zM43 18.1c-1.2-.1-2.3.7-2.4 1.8l-.6 5.8c-.2 0-.3.3-.5.3H34l-3.8-6.7c-.3-.6-.9-1.1-1.6-1.2l-5.8-.8c-1-.1-2 .4-2.4 1.4L16 30c-.3.9.1 1.8.9 2.3l10.8 7.4.9 8.4c.1 1.1 1.1 1.9 2.2 1.9 1.3 0 2.3-1 2.2-2.2l-1-10.3c0-.5-.3-1-.8-1.4l-5.9-6.6 2.2-5.4 2.6 4.5c.4.6 1.1 1.3 1.9 1.3h7.6l-2.2 18c-.1 1.1.7 2 1.9 2.1.1 0 .2-.1.2-.1 1.1 0 2-.8 2.2-1.9L45 20.2c.1-1-.8-2-2-2.1zM12.2 27.7l3.7-9.5c.2-.6.5-1.2.9-1.8l-.5-.1c-3.2-.4-6.2 1.5-7.2 4.4l-2 5.2c-.4 1.1.2 2.4 1.4 2.7l.9.2c1.2.5 2.4-.1 2.8-1.1zM13.6 35.2L9.1 48.6c-.2.7.3 1.3 1 1.3h2.5c.9 0 1.8-.6 2.1-1.4l4.4-9.7-5-3.1c-.1-.2-.3-.4-.5-.5z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_trail";
freezeTemplate(tmpl);
