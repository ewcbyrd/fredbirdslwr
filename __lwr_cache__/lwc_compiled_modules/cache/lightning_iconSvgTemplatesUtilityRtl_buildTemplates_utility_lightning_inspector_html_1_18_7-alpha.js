import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./lightning_inspector.css";

import _implicitScopedStylesheets from "./lightning_inspector.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M40.9 23.6h-.5v-.8c0-5-4.1-9.1-9.1-9.1-2.4 0-4.5.9-6.1 2.4-1.3-3.4-4.6-5.9-8.5-5.9-5 0-9.1 4.1-9.1 9.1 0 1.7.5 3.2 1.2 4.6-4 1-6.9 4.5-6.9 8.8 0 4.9 3.8 8.8 8.7 9h30.2c5 0 9.1-4.1 9.1-9.1s-4-9-9-9zm-24.6.8l7.8-3.7c.3-.2.8-.2 1.1 0l7.8 3.7c.5.2.5.8 0 1.1l-7.8 3.7c-.3.2-.8.2-1.1 0l-7.8-3.7c-.4-.2-.4-.9 0-1.1zm16.8 9.2l-7.8 3.7c-.3.2-.8.2-1.1 0l-7.8-3.7c-.5-.2-.5-.8 0-1.1l1-.5c.1-.1.3-.1.5 0l6.3 3c.3.2.8.2 1.1 0l6.2-3c.1-.1.3-.1.5 0l1 .5c.5.2.5.9.1 1.1zm0-4l-7.8 3.7c-.3.2-.8.2-1.1 0l-7.8-3.7c-.5-.2-.5-.8 0-1.1l1.1-.5c.1-.1.3-.1.5 0l6.2 3c.3.2.8.2 1.1 0l6.2-3c.1-.1.3-.1.5 0l1.1.5c.4.2.4.8 0 1.1z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_lightning_inspector";
freezeTemplate(tmpl);
