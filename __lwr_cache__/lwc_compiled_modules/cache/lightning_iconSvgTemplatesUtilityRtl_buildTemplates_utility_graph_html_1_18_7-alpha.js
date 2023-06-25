import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./graph.css";

import _implicitScopedStylesheets from "./graph.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M50 4.1c0-.9-.7-1.6-1.6-1.6h-2.8c-.9 0-1.6.7-1.6 1.6V42c0 .8-.7 1.5-1.5 1.5H3.6c-.9 0-1.6.7-1.6 1.6v2.8c0 .9.7 1.6 1.6 1.6H46c2.2 0 4-1.8 4-4V4.1zM3.2 16.3L14 27l.1.1.1.1.1.1c.1 0 .1.1.2.1.1.1.2.2.3.2s.1.1.2.1c.2 0 .3.1.4.1h.2c.2.1.4.1.6.1.2 0 .4-.1.6-.1.1-.1.1-.1.2-.1s.3 0 .4-.1c.1 0 .1-.1.2-.1.1-.1.2-.1.3-.2l.2-.2c.1-.1.2-.1.3-.2l5.7-5.6 9.8 9.7c.5.4 1.2.7 1.9.7 1.7 0 3-1.3 3-3 0-.9-.4-1.6-1-2.2L26.4 15c-.1-.1-.2-.1-.3-.2s-.1-.2-.2-.2c-.1-.1-.2-.1-.3-.2-.1 0-.1-.1-.2-.1s-.3-.1-.4-.1c-.1-.1-.1-.1-.2-.1-.2-.1-.4-.1-.6-.1s-.4.1-.6.1c-.1.1-.1.1-.2.1-.2 0-.3.1-.4.1s-.1.1-.2.1c-.1.1-.2.1-.3.2-.1 0-.1.1-.2.1l-.2.2-.1.1-5.9 5.6L7.5 12c-.6-.5-1.3-.9-2.2-.9-1.7 0-3 1.3-3 3 0 .9.4 1.6.9 2.2z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_graph";
freezeTemplate(tmpl);
