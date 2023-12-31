import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./events.css";

import _implicitScopedStylesheets from "./events.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M8.8 9C4.4 13.5 2 19.4 2 25.6 2 27 3.1 28 4.4 28s2.4-1.1 2.4-2.4c-.1-4.9 1.9-9.6 5.4-13.1s8.3-5.4 13.1-5.4c1.4 0 2.4-1.1 2.4-2.4 0-1.4-1.1-2.4-2.4-2.4C19.2 2.2 13.2 4.6 8.8 9zm2.9 16.6c0 1.4 1 2.4 2.4 2.4s2.4-1.1 2.4-2.4c0-2.3.9-4.6 2.6-6.2 1.7-1.7 3.9-2.5 6.2-2.6 1.4 0 2.4-1.1 2.4-2.4 0-1.4-1-2.4-2.4-2.4-3.6 0-7.1 1.4-9.7 3.9-.4.5-4.1 4.2-3.9 9.7zM45.5 15.2c-.9-1.2-2.1-2.6-2.3-2.8-.3-.2-.7-.4-1.1-.4-.4 0-.8.1-1 .4L31 22.4c-2.4-2-6-1.9-8.3.4-2.3 2.3-2.4 5.9-.4 8.3l-9.7 9.7c-.3.3-.5.7-.5 1.1 0 .5.2 1 .6 1.3l2.7 2c3.7 2.9 8.3 4.5 13.2 4.5 11.8 0 21.4-9.6 21.4-21.4 0-4.8-1.7-9.4-4.5-13.1z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_events";
freezeTemplate(tmpl);
