import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./adduser.css";

import _implicitScopedStylesheets from "./adduser.scoped.css?scoped=true";

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
    "d": "M21.9 37c0-2.7.9-5.8 2.3-8.2 1.7-3 3.6-4.2 5.1-6.4 2.5-3.7 3-9 1.4-13-1.6-4.1-5.4-6.5-9.8-6.4s-8 2.8-9.4 6.9c-1.6 4.5-.9 9.9 2.7 13.3 1.5 1.4 2.9 3.6 2.1 5.7-.7 2-3.1 2.9-4.8 3.7-3.9 1.7-8.6 4.1-9.4 8.7C1.3 45.1 3.9 49 8 49h17c.8 0 1.3-1 .8-1.6-2.5-2.9-3.9-6.6-3.9-10.4z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M37.9 25c-6.6 0-12 5.4-12 12s5.4 12 12 12 12-5.4 12-12-5.4-12-12-12zM44 38c0 .6-.5 1-1.1 1H40v3c0 .6-.5 1-1.1 1h-2c-.6 0-.9-.4-.9-1v-3h-3.1c-.6 0-.9-.4-.9-1v-2c0-.6.3-1 .9-1H36v-3c0-.6.3-1 .9-1h2c.6 0 1.1.4 1.1 1v3h2.9c.6 0 1.1.4 1.1 1v2z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_adduser";
freezeTemplate(tmpl);
