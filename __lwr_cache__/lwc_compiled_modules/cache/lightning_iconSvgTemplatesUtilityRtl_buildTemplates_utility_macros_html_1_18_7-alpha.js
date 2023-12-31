import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./macros.css";

import _implicitScopedStylesheets from "./macros.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M37.2 40.2c-.2.4-.6.5-1 .5h-4.7c-.4 0-.7-.3-.7-.7 0-.1.1-.3.1-.4l.1-.1.2-.2 10.3-12.5c.3-.4.4-1 .2-1.4 0-.1-.1-.2-.1-.2L30.9 12.5c-.1-.1-.1-.3-.1-.4 0-.4.4-.7.7-.7h4.7c.4 0 .8.1 1 .5l11.1 13.4c.2.2.2.5.2.7 0 .3-.1.6-.2.8L37.2 40.2z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M25.6 40.2c-.2.4-.6.5-1 .5h-4.7c-.4 0-.7-.3-.7-.7 0-.1.1-.3.1-.4l.1-.1.2-.2 10.3-12.5c.3-.4.4-1 .2-1.4 0-.1-.1-.2-.1-.2L19.3 12.5c-.1-.1-.1-.3-.1-.4 0-.4.4-.7.7-.7h4.7c.4 0 .8.1 1 .5l11.1 13.4c.2.2.2.5.2.7 0 .3-.1.6-.2.8L25.6 40.2z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M14 40.2c-.2.4-.6.5-1 .5H4.2c-.4 0-.7-.3-.7-.7 0-.1.1-.3.1-.4l.1-.1.2-.2 10.3-12.5c.3-.4.4-1 .2-1.4 0-.1-.1-.2-.1-.2L3.6 12.5c-.1-.1-.1-.3-.1-.4 0-.4.4-.7.7-.7h8.7c.4 0 .8.1 1 .5L25 25.3c.2.2.2.5.2.7 0 .3-.1.6-.2.8L14 40.2z"
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
      "viewBox": "0 0 52 52",
      "part": "icon"
    },
    key: 0,
    svg: true
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2), api_element("path", stc3)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_macros";
freezeTemplate(tmpl);
