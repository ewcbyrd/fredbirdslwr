import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./salesforce_cms.css";

import _implicitScopedStylesheets from "./salesforce_cms.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M66.3 48.4c.3 0 .7-.1.9-.3.8-.5 1-1.6.5-2.4l-6.3-9.6c-.1-.2-.2-.3-.4-.4-.7-.6-1.8-.4-2.4.3l-6.8 8.8-8-11.9c-.1-.2-.3-.3-.5-.5-.8-.5-1.9-.3-2.4.5l-8.6 12.8c-.2.3-.3.6-.3 1 0 .9.8 1.7 1.7 1.7h32.6z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "fill": "none",
    "d": "M33.2 54h33.9c.9 0 1.7.8 1.7 1.7s-.8 1.7-1.7 1.7H33.2c-.9 0-1.7-.8-1.7-1.7s.8-1.7 1.7-1.7z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M33.2 54h33.9c.9 0 1.7.8 1.7 1.7 0 .9-.8 1.7-1.7 1.7H33.2c-.9 0-1.7-.8-1.7-1.7 0-1 .8-1.7 1.7-1.7z"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "fill": "none",
    "d": "M36.7 62.5h27c.9 0 1.7.8 1.7 1.7 0 .9-.8 1.7-1.7 1.7h-27c-.9 0-1.7-.8-1.7-1.7 0-.9.7-1.7 1.7-1.7z"
  },
  key: 5,
  svg: true
};
const stc5 = {
  attrs: {
    "d": "M36.7 62.5h27c.9 0 1.7.8 1.7 1.7 0 .9-.8 1.7-1.7 1.7h-27c-.9 0-1.7-.8-1.7-1.7 0-.9.7-1.7 1.7-1.7z"
  },
  key: 6,
  svg: true
};
const stc6 = {
  attrs: {
    "d": "M75.2 33.9c.8-1.1 1.3-2.4 1.3-3.9 0-3.6-2.9-6.4-6.4-6.4-1.5 0-2.8.5-3.9 1.3-4.7-3-10.2-4.8-16.2-4.8-16.6 0-30 13.4-30 30 0 7.5 2.7 14.3 7.2 19.5-.3.6-.4 1.3-.4 2 0 2.6 2.1 4.7 4.7 4.7 1 0 1.8-.3 2.6-.8 4.6 2.9 10.1 4.6 15.9 4.6 16.6 0 30-13.4 30-30 0-6-1.8-11.5-4.8-16.2zm-5.1-7c1.7 0 3.1 1.4 3.1 3.1s-1.4 3-3.1 3c-1.7 0-3.1-1.3-3.1-3s1.4-3.1 3.1-3.1zM50 76.7c-5.1 0-9.9-1.4-13.9-4 .1-.4.2-.8.2-1.2 0-2.6-2.1-4.7-4.7-4.7-.7 0-1.3.1-1.8.4-3.9-4.6-6.3-10.6-6.3-17.1 0-14.7 11.9-26.6 26.6-26.6 5.2 0 10.1 1.5 14.2 4.1-.3.7-.5 1.5-.5 2.4 0 3.6 2.9 6.4 6.4 6.4.8 0 1.6-.2 2.4-.5 2.6 4.1 4.1 9 4.1 14.2-.1 14.7-12.1 26.6-26.7 26.6z"
  },
  key: 7,
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
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2), api_element("path", stc3), api_element("path", stc4), api_element("path", stc5), api_element("path", stc6)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_salesforce_cms";
freezeTemplate(tmpl);
