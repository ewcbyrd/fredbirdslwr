import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./resource_absence.css";

import _implicitScopedStylesheets from "./resource_absence.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M21.9 37c0-2.7.9-5.8 2.3-8.2 1.7-3 3.6-4.2 5.1-6.4 2.5-3.7 3-9 1.4-13-1.6-4.1-5.4-6.5-9.8-6.4s-8 2.8-9.4 6.9c-1.6 4.5-.9 9.9 2.7 13.3 1.5 1.4 2.9 3.6 2.1 5.7-.7 2-3.1 2.9-4.8 3.7-3.9 1.7-8.6 4.1-9.4 8.7C1.3 45.1 3.9 49 8 49h17c.8 0 1.3-1 .8-1.6-2.5-2.9-3.9-6.6-3.9-10.4z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M46.4 28.5c-4.7-4.7-12.3-4.7-17 0-4.7 4.7-4.7 12.3 0 17 4.7 4.7 12.3 4.7 17 0 4.7-4.7 4.7-12.3 0-17zm-3.5 10.6c.4.4.4 1.1-.1 1.5L41.4 42c-.4.4-.9.4-1.3-.1L38 39.8 35.8 42c-.4.4-.9.4-1.3-.1L33 40.5c-.4-.4-.5-.9-.1-1.3l2.2-2.2-2.1-2.2c-.4-.4-.5-.9-.1-1.3l1.4-1.4c.4-.4 1.1-.5 1.5-.1l2.1 2.1L40 32c.4-.4 1.1-.5 1.5-.1l1.4 1.4c.4.4.4 1.1-.1 1.5l-2.1 2.1 2.2 2.2z"
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
      "viewBox": "0 0 52 52",
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_resource_absence";
freezeTemplate(tmpl);
