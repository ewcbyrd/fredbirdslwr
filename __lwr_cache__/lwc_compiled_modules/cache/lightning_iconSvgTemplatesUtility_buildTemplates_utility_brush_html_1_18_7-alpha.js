import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./brush.css";

import _implicitScopedStylesheets from "./brush.scoped.css?scoped=true";

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
    "d": "M49.4 2.7C46-.8 27 10 15.4 28.6c-.5.9-.2 2 .7 2.4 2.6 1.2 4.7 3.4 5.8 6.1.4 1 1.5 1.3 2.4.7 18-11.9 28.5-31.6 25.1-35.1zM11.9 35.2C10.4 35.2 9 36 8 37h-.1c-.5 0-1 .8-1.4 1.5-1.6 2.7-1.9 5.9-4.3 9.4-.4.6-.3 1.5.4 1.7 3.4 1.1 9.5.1 12.5-2.1v.1c1-.2.7-.6 1-.6 1.1-2 2-3 2-4.9-.1-3.7-2.7-6.9-6.2-6.9z"
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
      "viewBox": "0 0 52 52",
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_brush";
freezeTemplate(tmpl);
