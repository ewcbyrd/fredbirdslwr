import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./proposition.css";

import _implicitScopedStylesheets from "./proposition.scoped.css?scoped=true";

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
    "d": "M25.8 60.6h-4.5c-.7 0-1.3.6-1.3 1.3V78c0 .7.6 1.3 1.3 1.3h2.2c2 0 3.6-1.6 3.6-3.6V62c.1-.8-.6-1.4-1.3-1.4zM79.9 69.4c-.7-1.6-2-3.3-3.9-3.5-1-.1-2 .3-2.9.6-3.6 1.3-7.2 2.5-10.8 3.8-2.3.8-4.7 1.6-7.2 1.8-1.7.1-3.4 0-5.1 0-.9 0-1.7-.7-1.7-1.7s.7-1.7 1.7-1.7h9.1c1.7 0 3-1.4 3-3s-1.4-3-3-3h-7c-.3 0-2.2-.1-3.4-.6-1.3-.6-3-.7-3-.6H33.4c-1.5 0-2.7 1.2-2.7 2.7v11.3c0 1.3 1 2.4 2.3 2.6h.3c2.3 0 4.6.5 6.9.9 2.3.5 4.5.8 6.9.8 3 .1 6.1-.4 9-1.1 2.9-.8 5.7-1.9 8.5-2.8 4.8-1.6 9.7-3.3 14.5-4.9.6-.3 1.1-.8.8-1.6z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    "d": "M58 40.1v15c0 .5.5.7.9.6C61.8 54 70.8 49 70.8 49c1.2-.7 1.9-1.9 1.9-3.3V32.2c0-.5-.5-.7-.9-.6L58.6 39c-.3.3-.6.7-.6 1.1M56.8 36L70 28.6c.4-.2.4-.8 0-1-2.9-1.7-12-6.8-12-6.8a3.7 3.7 0 00-3.8 0l-12 6.8c-.4.2-.4.8 0 1L55.6 36c.3.2.8.2 1.2 0M53.7 39.1l-13.2-7.4c-.4-.2-.9.1-.9.6v13.4c0 1.3.7 2.6 1.9 3.3 0 0 9 5.1 11.9 6.7.4.2.9-.1.9-.6v-15c0-.4-.2-.8-.6-1"
  },
  key: 4,
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
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("path", stc2), api_element("path", stc3)])])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_proposition";
freezeTemplate(tmpl);
