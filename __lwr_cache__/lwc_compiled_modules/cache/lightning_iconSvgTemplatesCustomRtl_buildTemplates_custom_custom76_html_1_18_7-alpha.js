import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom76.css";

import _implicitScopedStylesheets from "./custom76.scoped.css?scoped=true";

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
    "d": "M52.9 55.3c-.3-.8-1.1-1.4-2-1.3H50c-11 0-20-9-20-20v-.5c0-1-1.3-1.4-1.8-.6-.7 1-1.2 2.2-1.6 3.5-1.7 5.7.5 11.9 5.3 15.4 2.2 1.601 4.5 2.3 6.9 2.601l.7 1.899c.1.3.3.5.5.601l3 1.3c.5.2.7.8.5 1.3l-1 2.9c-.2.5.1 1 .5 1.199l1.6.7c.5.2.7.8.5 1.3l-.9 3.1c-.1.5.1 1 .5 1.2l2.3 1c.5.199.7.8.5 1.3l-.8 3.1c-.1.5.1 1 .6 1.2l6.8 3.1c.5.2 1.101 0 1.301-.5l3-6.699c.199-.5.199-1 .1-1.5L52.9 55.3z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M79.4 54.3L63.5 37.7c.7-2.5.7-5.2-.3-8.1-1.9-5.3-6.8-9.2-12.5-9.5-8.6-.4-15.6 6.9-14.7 15.6.7 6 5.2 10.9 11.1 12.1 2.6.5 5.1.3 7.4-.5l1.4 1.5c.2.2.4.3.7.3H60c.6 0 1 .4 1 1l.3 3.1c0 .5.5.899 1 .899H64c.6 0 1 .4 1 1l.5 3.2c.1.5.5.8 1 .8H69c.6 0 1 .4 1 1l.5 3.2c.1.5.5.8 1 .8H79c.6 0 1-.399 1-1v-7.3c0-.699-.2-1.199-.6-1.499zM48 37c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5c0 2.7-2.2 5-5 5z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustomRtl_custom76";
freezeTemplate(tmpl);
