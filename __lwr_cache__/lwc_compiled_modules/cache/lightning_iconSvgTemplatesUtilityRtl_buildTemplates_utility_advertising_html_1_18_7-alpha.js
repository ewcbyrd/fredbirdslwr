import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./advertising.css";

import _implicitScopedStylesheets from "./advertising.scoped.css?scoped=true";

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
    "d": "M23 27.2h.4c.2-2.7 1.2-5.1 2.7-7-.8-.8-1.8-1.3-3.1-1.3-2.4 0-4.2 1.8-4.2 4.2 0 2.3 1.8 4.1 4.2 4.1z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M24.2 35.2c.5 0 1-.1 1.2-.1-.8-1.3-1.4-2.7-1.7-4H23c-4.5 0-8.4-3.6-8.4-8.4 0-4.5 3.6-8.4 8.4-8.4 2.5 0 4.9 1.1 6.4 2.9 1.2-.7 2.5-1.1 3.9-1.3-2.3-3.3-6.1-5.4-10.4-5.4-7.2 0-12.6 5.7-12.6 12.6S16 35.7 23.2 35.4c.4-.1.7-.1 1-.2z"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "d": "M49.9 45.5v1.4c0 1.6-1.4 3-3 3H22.8c-1.6 0-3-1.4-3-3v-1.4c0-3.6 4.3-5.9 8.3-7.7l.4-.2c.3-.1.6-.1.9.1 1.6 1.1 3.5 1.6 5.4 1.6 1.9 0 3.8-.6 5.4-1.6.3-.2.6-.2.9-.1l.4.2c4.2 1.8 8.4 4 8.4 7.7zM34.8 19.8c4.2 0 7.5 3.7 7.5 8.3s-3.3 8.3-7.5 8.3-7.5-3.7-7.5-8.3 3.4-8.3 7.5-8.3z"
  },
  key: 5,
  svg: true
};
const stc5 = {
  attrs: {
    "d": "M18.5 39.2c-6.9-2-12.2-8.5-12.2-16.1 0-9.3 7.5-16.8 16.8-16.8 6.9 0 13.1 4.1 15.6 10.2 2 .8 3.8 2.1 5.1 3.8C42.3 9.8 33.6 2.1 23 2.1 11.3 2.1 2.1 11.3 2.1 23c0 9.2 5.8 17 14.2 19.7.4-1.4 1.2-2.5 2.2-3.5z"
  },
  key: 6,
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
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("path", stc2), api_element("path", stc3), api_element("path", stc4), api_element("path", stc5)])])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_advertising";
freezeTemplate(tmpl);
