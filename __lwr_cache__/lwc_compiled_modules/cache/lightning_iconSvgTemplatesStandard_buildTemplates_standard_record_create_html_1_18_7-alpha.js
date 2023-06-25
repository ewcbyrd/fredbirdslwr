import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./record_create.css";

import _implicitScopedStylesheets from "./record_create.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M68.4 27.1c.1 0 .1 0 0 0"
  },
  key: 2,
  svg: true
};
const stc2 = {
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M39 32h22c1.1 0 2-.9 2-2v-4c0-3.3-2.7-6-6-6H43c-3.3 0-6 2.7-6 6v4c0 1.1.9 2 2 2z"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "d": "M72 25h-2c-.6 0-1 .4-1 1v4c0 4.4-3.6 8-8 8H39c-4.4 0-8-3.6-8-8v-4c0-.6-.4-1-1-1h-2c-3.3 0-6 2.7-6 6v43c0 3.3 2.7 6 6 6h44c3.3 0 6-2.7 6-6V31c0-3.3-2.7-6-6-6zm-7.3 35.2c0 .5-.5 1-1 1h-11c-.4 0-.7.3-.7.7v11c0 .5-.5 1-1 1h-2c-.5 0-1-.5-1-1v-11c0-.4-.3-.7-.7-.7h-11c-.5 0-1-.5-1-1v-2c0-.5.5-1 1-1h11c.4 0 .7-.3.7-.7v-11c0-.5.5-1 1-1h2c.5 0 1 .5 1 1v11c0 .4.3.7.7.7h11c.5 0 1 .5 1 1v2z"
  },
  key: 5,
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
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("g", stc2, [api_element("path", stc3), api_element("path", stc4)])])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_record_create";
freezeTemplate(tmpl);
