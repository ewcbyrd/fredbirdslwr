import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./screen.css";

import _implicitScopedStylesheets from "./screen.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M80 25c0-2.8-2.2-5-5-5H25c-2.8 0-5 2.2-5 5v34.7c0 2.8 2.2 5 5 5h50c2.8 0 5-2.2 5-5V25zm-7.5 30.3c0 1-.9 1.9-1.9 1.9H29.4c-1 0-1.9-.9-1.9-1.9V29.4c0-1 .9-1.9 1.9-1.9h41.2c1 0 1.9.9 1.9 1.9v25.9zM41.2 72.5c-2.8 0-5 2.2-5 5v.6c0 1 .9 1.9 1.9 1.9h23.8c1 0 1.9-.9 1.9-1.9v-.6c0-2.8-2.2-5-5-5H41.2z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M40.2 50.9h-5.6c-.5 0-1-.5-1-1V34.7c0-.6.5-1 1-1h5.6c.5 0 1 .4 1 1v15.2c0 .5-.5 1-1 1zM65.4 50.9H48.3c-.5 0-1-.5-1-1V34.7c0-.5.5-1 1-1h17.1c.5 0 1 .5 1 1v15.2c0 .6-.5 1-1 1z"
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
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_screen";
freezeTemplate(tmpl);
