import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./classic_interface.css";

import _implicitScopedStylesheets from "./classic_interface.scoped.css?scoped=true";

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
    "d": "M25.5 35.7v-8.5s-3.8 5.7-6.2 9.6-2.1 7-2.1 7c0 3.1 2.3 5.7 5.1 5.7 1.7 0 3.2-.9 4.1-2.4.9 1.3 2.3 2 3.9 2 2.8 0 5.1-2.5 5.1-5.7 0-.3-.1-.6-.1-.9 0-4.2-9.2-15.5-9.2-15.5V35.7l1.2 2.9c0 .1.1.2.1.4 0 .7-.6 1.3-1.3 1.3-.7 0-1.3-.6-1.3-1.3 0-.1 0-.3.1-.4l.6-2.9M15.9 28.3l8-3s-6.6-1.6-11.2-2.5c-4.6-.9-7.3.5-7.3.5C2.5 24.4.9 27.4 1.8 30c.6 1.6 2 2.7 3.7 3.1-.9 1.3-1.1 2.9-.6 4.4 1 2.6 4.1 3.9 7.1 2.8.3-.1.6-.3.8-.4 4-1.4 11.3-14 11.3-14l-7.8 2.9-.3.1-2.3 2.1c-.1.1-.2.1-.3.2-.7.3-1.5-.1-1.7-.8-.3-.7.1-1.5.8-1.7.1 0 .3-.1.4-.1l3-.3M19.9 16.4l5.1 6.9s-.4-6.8-.8-11.4C23.8 7.3 21.7 5 21.7 5c-1.9-2.5-5.2-3.2-7.4-1.5-1.4 1-2 2.7-1.9 4.4-1.5-.5-3.1-.3-4.4.6-2.2 1.7-2.5 5.1-.7 7.6.2.2.4.5.6.7 2.5 3.4 16.7 6.9 16.7 6.9l-5-6.7-.2-.2-2.7-1.6-.3-.3c-.4-.6-.3-1.4.3-1.9.6-.4 1.4-.3 1.9.3.1.1.1.2.2.3l1.1 2.8M36.1 28.3l-8-3s6.6-1.6 11.2-2.5c4.6-.9 7.3.5 7.3.5 2.9 1.1 4.5 4.1 3.6 6.7-.6 1.6-2 2.7-3.7 3.1.9 1.3 1.1 2.9.6 4.4-1 2.6-4.1 3.9-7.1 2.8-.3-.1-.6-.3-.8-.4-4-1.4-11.3-14-11.3-14l7.8 2.9.3.1 2.3 2.1c.1.1.2.1.3.2.7.3 1.5-.1 1.7-.8.3-.7-.1-1.5-.8-1.7-.1 0-.3-.1-.4-.1l-3-.3M31.7 16.4l-5.1 6.9s.4-6.8.8-11.4S29.9 5 29.9 5c1.9-2.5 5.2-3.2 7.4-1.5 1.4 1 2 2.7 1.9 4.4 1.5-.4 3.1-.2 4.3.7 2.2 1.7 2.5 5.1.7 7.6-.2.2-.4.5-.6.7-2.4 3.3-16.6 6.7-16.6 6.7l5-6.7.2-.2 2.7-1.6.3-.3c.4-.6.3-1.4-.3-1.9-.6-.4-1.4-.3-1.9.3-.1.1-.1.2-.2.3l-1.1 2.9"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_classic_interface";
freezeTemplate(tmpl);
