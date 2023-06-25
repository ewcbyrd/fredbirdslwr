import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./webcart.css";

import _implicitScopedStylesheets from "./webcart.scoped.css?scoped=true";

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
    "d": "M42.4 50h29.5c.9 0 1.7-.6 1.9-1.5l5.4-19c.4-1.3-.6-2.5-1.9-2.5H31.7l-.8-2.8c-.4-1.3-1.6-2.2-2.9-2.2h-4.8c-1.6 0-3.1 1.2-3.2 2.8-.1 1.7 1.3 3.2 3 3.2h2.8l9.4 31.8c.4 1.3 1.5 2.2 2.9 2.2h34.8c1.6 0 3.1-1.2 3.2-2.8.1-1.7-1.3-3.2-3-3.2H42.5c-1.3 0-2.5-.9-2.8-2.1v-.1c-.7-1.9.8-3.8 2.7-3.8z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "cx": "43",
    "cy": "73",
    "r": "5"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "cx": "67",
    "cy": "73",
    "r": "5"
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
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("path", stc2), api_element("circle", stc3), api_element("circle", stc4)])])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_webcart";
freezeTemplate(tmpl);
