import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./entitlement_process.css";

import _implicitScopedStylesheets from "./entitlement_process.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M56 79.6V63.1l9.4-10.4h13.3v20c-.1 3.8-3.1 6.8-6.9 6.9H56z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M50 79.6H35.2c-3.7 0-6.9-2.3-6.9-6.9H26c-2.5 0-4.6-2-4.6-4.5v-.1c0-2.5 2.1-4.6 4.6-4.6h2.3v-9.3H26c-2.5 0-4.6-2.1-4.6-4.6 0-2.5 2.1-4.6 4.6-4.6h2.3v-9.3H26c-2.5 0-4.6-2-4.6-4.5v-.1c0-2.5 2-4.6 4.5-4.7h2.4c.2-3.7 3.2-6.7 6.9-6.9h36.6c3.8.1 6.8 3.1 6.9 6.9v20.2H65L54.3 34.8c-.8-.8-2.2-.8-3 0L39 48.3c-.7.8-.7 2 0 2.8L49.8 63s.1 16.6.2 16.6z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_entitlement_process";
freezeTemplate(tmpl);
