import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./entitlement_template.css";

import _implicitScopedStylesheets from "./entitlement_template.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M70.5 19.5H33.8c-3.7.1-6.8 3.2-6.9 6.9h-2.3c-2.5 0-4.6 2.1-4.6 4.6v.1c0 2.5 2 4.6 4.5 4.6h2.4V45h-2.3c-2.5 0-4.6 2.1-4.6 4.6 0 2.5 2.1 4.6 4.6 4.6h2.3v9.3h-2.3c-2.5 0-4.6 2-4.6 4.6 0 2.5 2 4.6 4.5 4.6h2.4c0 4.6 3.2 6.9 6.9 6.9h36.7c3.8-.1 6.8-3.1 6.9-6.9V26.4c-.1-3.8-3.1-6.8-6.9-6.9zm-3.3 45.1H36.7v-30h30.5v30z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M42 45.1h19.9c.4 0 .8-.3.8-.7v-4.6c0-.4-.3-.8-.7-.8H42c-.4 0-.8.3-.8.7v4.6c0 .4.3.8.7.8h.1zM42 60.1h4.6c.4 0 .8-.3.8-.7v-9.1c0-.4-.3-.8-.7-.8H42c-.4 0-.8.3-.8.7v9.1c0 .4.3.8.7.8h.1zM61.8 49.6h-9.2c-.4 0-.8.3-.8.7v9.1c0 .4.3.8.7.8H61.8c.4 0 .8-.3.8-.7v-9.1c0-.4-.3-.8-.7-.8h-.1z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_entitlement_template";
freezeTemplate(tmpl);
