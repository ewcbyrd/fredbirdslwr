import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./box_notes.css";

import _implicitScopedStylesheets from "./box_notes.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "fill": "#056764",
    "d": "M5.1 0C2.3 0 0 2.3 0 5.1v53.8C0 61.7 2.3 64 5.1 64h45.8c2.8 0 5.1-2.3 5.1-5.1V20.3L37.1 0h-32z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "fill": "#024D4C",
    "d": "M56 20.4v1H43.2s-6.4-1.3-6.2-6.7c0 0 .2 5.7 6 5.7h13z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "fill": "#ACF3E4",
    "d": "M37.1 0v14.6c0 1.6 1.1 5.8 6.1 5.8H56L37.1 0z"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "fill": "#FFF",
    "d": "M32.6 39.3c.2 0 .4-.1.4-.3v-1.4c0-.4-.4-.4-.4-.4H13.9l2.1 2.1h16.6zm0 7.3c.2 0 .4-.4.4-.4v-1.3c0-.4-.4-.4-.4-.4H21.2l2.1 2.1h9.3zm0 7.3c.2 0 .4-.2.4-.4v-1.3c0-.4-.4-.4-.4-.4h-4.5l.3 2.1h4.2zm-5.4-2.1c0-.1 0-.3-.3-.5-.2-.3-13-13-13-13s.4.5-.4 1.4c-1.1 1.1-1.6.7-1.6.7L25 53.5c.1.1.2.2.5.3.3 0 2 .1 2 .1s-.3-2-.3-2.1zM11.8 36.6c-.8.3-1.4 1.1-1.6 1.5-.2.5 0 .7 0 .7s.9.8 1.1 1c.3.3.6.2.6.2.9-.3 1.5-1.3 1.6-1.6.1-.4 0-.5-.1-.6s-.8-.9-1-1.1c0 0-.2-.3-.6-.1z"
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
      "viewBox": "0 0 56 64",
      "part": "icon"
    },
    key: 0,
    svg: true
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2), api_element("path", stc3), api_element("path", stc4)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesDoctypeRtl_box_notes";
freezeTemplate(tmpl);
