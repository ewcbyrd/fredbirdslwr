import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./your_account.css";

import _implicitScopedStylesheets from "./your_account.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M61.8 65.5h13.3c.4 0 .8-.3.8-.7l2.4-8.6c.2-.6-.3-1.1-.8-1.1H57l-.3-1.3c-.2-.6-.7-1-1.3-1h-2.2c-.7 0-1.4.6-1.4 1.3-.1.8.6 1.4 1.3 1.4h1.3l1.2 4 3 10.3c.2.6.7 1 1.3 1h15.6c.7 0 1.4-.6 1.4-1.3.1-.8-.6-1.4-1.3-1.4H61.8c-.6 0-1.1-.4-1.3-.9v-.1c-.2-.8.4-1.6 1.3-1.6z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M61.1 19.9h-39c-2.2 0-2.5 2.3-2.5 2.5v49.5c.1 1.3.9 3.3 4.4 3.3h28.3c3.2 0 3-2.1 2.8-2.9L55 72l-.3-1.1-.2-.6L51.4 60c-.2-.7-1-1-1-1-.5-.3-1-.6-1.3-1-1-1.1-1.5-2.6-1.4-4 .2-2.8 2.6-5 5.4-5h2.2c1.5 0 2.8.6 3.8 1.6l.1.1c.2.2.6.5 1.2.5h1.4c1.3 0 1.4-1.4 1.5-1.8l.1-10.5V23c.1-2.4-1.6-3.1-2.3-3.1zM32.4 67.1c0 1.3-1 2.3-2.3 2.3h-2.3c-1.3 0-2.3-1-2.3-2.3v-2.3c0-1.3 1-2.3 2.3-2.3h2.3c1.3 0 2.3 1 2.3 2.3v2.3zm0-11.9c0 1.3-1 2.3-2.3 2.3h-2.3c-1.3 0-2.3-1-2.3-2.3v-2.3c0-1.3 1-2.3 2.3-2.3h2.3c1.3 0 2.3 1 2.3 2.3v2.3zm0-11.7c0 1.3-1 2.3-2.3 2.3h-2.3c-1.3 0-2.3-1-2.3-2.3v-2.3c0-1.3 1-2.3 2.3-2.3h2.3c1.3 0 2.3 1 2.3 2.3v2.3zm0-11.8c0 1.3-1 2.3-2.3 2.3h-2.3c-1.3 0-2.3-1-2.3-2.3v-2.3c0-1.3 1-2.3 2.3-2.3h2.3c1.3 0 2.3 1 2.3 2.3v2.3zm12.7 35.4c0 1.3-1 2.3-2.3 2.3h-2.3c-1.3 0-2.3-1-2.3-2.3v-2.3c0-1.3 1-2.3 2.3-2.3h2.3c1.3 0 2.3 1 2.3 2.3v2.3zm0-11.9c0 1.3-1 2.3-2.3 2.3h-2.3c-1.3 0-2.3-1-2.3-2.3v-2.3c0-1.3 1-2.3 2.3-2.3h2.3c1.3 0 2.3 1 2.3 2.3v2.3zm0-11.7c0 1.3-1 2.3-2.3 2.3h-2.3c-1.3 0-2.3-1-2.3-2.3v-2.3c0-1.3 1-2.3 2.3-2.3h2.3c1.3 0 2.3 1 2.3 2.3v2.3zm0-11.8c0 1.3-1 2.3-2.3 2.3h-2.3c-1.3 0-2.3-1-2.3-2.3v-2.3c0-1.3 1-2.3 2.3-2.3h2.3c1.3 0 2.3 1 2.3 2.3v2.3zm12.7 11.8c0 1.3-1 2.3-2.3 2.3h-2.3c-1.3 0-2.3-1-2.3-2.3v-2.3c0-1.3 1-2.3 2.3-2.3h2.3c1.3 0 2.3 1 2.3 2.3v2.3zm0-11.8c0 1.3-1 2.3-2.3 2.3h-2.3c-1.3 0-2.3-1-2.3-2.3v-2.3c0-1.3 1-2.3 2.3-2.3h2.3c1.3 0 2.3 1 2.3 2.3v2.3z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "cx": "62.1",
    "cy": "75.8",
    "r": "2.2"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "cx": "72.9",
    "cy": "75.8",
    "r": "2.2"
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
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2), api_element("circle", stc3), api_element("circle", stc4)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_your_account";
freezeTemplate(tmpl);
