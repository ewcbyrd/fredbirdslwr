import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./outcome.css";

import _implicitScopedStylesheets from "./outcome.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M37.4 31.9L20.6 48.8c-.8.6-.8 1.8-.1 2.5l.1.1 16.9 16.9c.6.8 1.8.8 2.5.1l.1-.1 2.6-2.7c.8-.6.8-1.8.1-2.5l-.1-.1-7-7c-.5-.5-.4-1.4.2-1.8.2-.2.4-.3.7-.3h26.6c1-.2 1.8-1 1.9-2v-3.8c-.1-1-.9-1.8-1.9-1.8H36.7c-.8 0-1.3-.6-1.3-1.3 0-.4.2-.7.4-.9l7-7c.8-.6.8-1.8.1-2.5l-.1-.1-2.7-2.6c-.6-.8-1.8-.9-2.5-.2-.1.1-.2.1-.2.2zM58.2 37v-7.6c0-1 .9-1.9 1.9-1.9h10.5c1 0 1.9.9 1.9 1.9v41.2c0 1-.9 1.9-1.9 1.9H60.1c-1 0-1.9-.9-1.9-1.9v-7.4c0-1-.9-1.9-1.9-1.9h-3.7c-1 0-1.9.9-1.9 1.9V75c0 2.8 2.2 5 5 5H75c2.8 0 5-2.2 5-5V25c0-2.8-2.2-5-5-5H55.7c-2.8 0-5 2.2-5 5v12c0 1 .9 1.9 1.9 1.9h3.7c1.1 0 1.9-.9 1.9-1.9z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_outcome";
freezeTemplate(tmpl);
