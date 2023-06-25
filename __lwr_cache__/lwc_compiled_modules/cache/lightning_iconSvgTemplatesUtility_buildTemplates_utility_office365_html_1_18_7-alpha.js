import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./office365.css";

import _implicitScopedStylesheets from "./office365.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M6 40.6z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M30.8 49.5c.6.2 1.3.2 1.9 0l11.9-3.9c.8-.3 1.4-1 1.4-1.9v-36c0-.6-.4-1.2-1-1.4L32.9 2.2c-.7-.2-1.4-.2-2 0L7 11.4c-.6.2-1 .8-1 1.4v27.1c0 .6.4 1.2 1 1.4l23.8 8.2zm1.2-6.7c0 .6-.5 1.1-1 1l-20-2.7c-.5-.1-.9-.5-.9-1v-.4c0-.4.2-.7.7-.9l3.8-1.8c.4-.2.6-.5.6-.9V14.8c0-.5.3-.9.8-1l15-3.4c.6-.1 1.2.3 1.2 1v31.4z"
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
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("g", stc2, [api_element("path", stc3)])])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_office365";
freezeTemplate(tmpl);
