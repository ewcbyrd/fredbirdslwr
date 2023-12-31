import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom75.css";

import _implicitScopedStylesheets from "./custom75.scoped.css?scoped=true";

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
    "d": "M50 20c-1.7 0-3 1.3-3 3v54c0 1.7 1.3 3 3 3 16.5 0 30-13.5 30-30S66.5 20 50 20zm23.8 27h-7.9c-.3-7.1-1.9-13.3-4.3-18 6.6 3.7 11.2 10.3 12.2 18zM53 72.7V53h6.9c-.5 9.4-3.5 16.8-6.9 19.7zM53 47V27.3c3.4 2.9 6.4 10.3 6.9 19.7H53zm8.6 24c2.4-4.7 3.9-10.9 4.301-18H73.8c-1 7.7-5.6 14.3-12.2 18zM33.5 39.9c.8.6 2 .5 2.7-.3l5.5-6.2c.7-.8.7-2-.1-2.7l-5.5-5.5c-.7-.7-1.7-.8-2.5-.3-.4.2-.7.5-1.1.7C25 31 20 39.9 20 50c0 10.1 5 19 12.5 24.4.4.3.7.5 1.1.699.8.5 1.8.4 2.5-.3l5.5-5.5c.7-.7.8-2 .1-2.7L36.2 60.4c-.7-.801-1.9-.9-2.7-.301L31.4 61.7C29.2 58.3 28 54.3 28 50s1.2-8.3 3.4-11.7l2.1 1.6z"
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
      "viewBox": "0 0 100 100",
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustomRtl_custom75";
freezeTemplate(tmpl);
