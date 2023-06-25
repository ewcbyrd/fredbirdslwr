import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./desktop.css";

import _implicitScopedStylesheets from "./desktop.scoped.css?scoped=true";

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
    "d": "M50 6c0-2.2-1.8-4-4-4H6C3.8 2 2 3.8 2 6v26c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V6zm-6 22.5c0 .8-.7 1.5-1.5 1.5h-33c-.8 0-1.5-.7-1.5-1.5v-19C8 8.7 8.7 8 9.5 8h33c.8 0 1.5.7 1.5 1.5v19zM33 44h-3c-.6 0-1-.4-1-1v-2c0-.6-.4-1-1-1h-4c-.6 0-1 .4-1 1v2c0 .6-.4 1-1 1h-3c-2.2 0-4 1.8-4 4v.5c0 .8.7 1.5 1.5 1.5h19c.8 0 1.5-.7 1.5-1.5V48c0-2.2-1.8-4-4-4z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_desktop";
freezeTemplate(tmpl);
