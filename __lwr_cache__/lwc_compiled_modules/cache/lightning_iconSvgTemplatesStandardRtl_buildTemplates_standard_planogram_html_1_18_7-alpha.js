import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./planogram.css";

import _implicitScopedStylesheets from "./planogram.scoped.css?scoped=true";

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
    "d": "M77.4 71.5h-3.3V53.6c0-.9-.8-1.7-1.7-1.7H53.7c-.9 0-1.7.8-1.7 1.7v17.8h-5V53.6c0-.9-.8-1.7-1.7-1.7H26.6c-.9 0-1.7.8-1.7 1.7v17.8h-3.3c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h55.7c1.1 0 2-.9 2-2v-4c.1-1.1-.8-1.9-1.9-1.9zm-20.9-15h13V61h-13v-4.5zm-27.1 0h13V61h-13v-4.5zM77.4 39h-3.3V21.1c0-.9-.8-1.7-1.7-1.7H53.7c-.9 0-1.7.8-1.7 1.7V39h-5V21.1c0-.9-.8-1.7-1.7-1.7H26.6c-.9 0-1.7.8-1.7 1.7V39h-3.3c-1.1 0-2 1-2 2v4c0 1.1.9 2 2 2h55.7c1.1 0 2-.9 2-2v-4c.1-1.2-.8-2-1.9-2zM56.5 24h13v4.5h-13V24zm-27.1 0h13v4.5h-13V24z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_planogram";
freezeTemplate(tmpl);
