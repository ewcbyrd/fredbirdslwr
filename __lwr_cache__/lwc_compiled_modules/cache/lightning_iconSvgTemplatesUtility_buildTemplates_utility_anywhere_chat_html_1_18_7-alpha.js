import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./anywhere_chat.css";

import _implicitScopedStylesheets from "./anywhere_chat.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M26 2.7c-13.21 0-24 9.62-24 21.59v.42a20.64 20.64 0 007.71 15.43l.32.27v.08a11.05 11.05 0 01-3.1 4.67 1.79 1.79 0 001.45 3.12l1.17-.17.53-.08c4.76-.73 8.13-1.59 10.23-2.66l.15-.08.5.11a27.38 27.38 0 005.06.48c13.21 0 24-9.62 24-21.59S39.21 2.7 26 2.7z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_anywhere_chat";
freezeTemplate(tmpl);
