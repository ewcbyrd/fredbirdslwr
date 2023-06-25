import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./capslock.css";

import _implicitScopedStylesheets from "./capslock.scoped.css?scoped=true";

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
    "d": "M43.6 21.1L27.2 2.5c-.6-.7-1.8-.7-2.4 0L8.4 21.1c-.6.7-.1 1.9.9 1.9H17v12.5c0 .8.7 1.5 1.5 1.5h15c.8 0 1.5-.7 1.5-1.5V23h7.7c1 0 1.5-1.2.9-1.9zM33.5 43h-15c-.8 0-1.5.7-1.5 1.5v4c0 .8.7 1.5 1.5 1.5h15c.8 0 1.5-.7 1.5-1.5v-4c0-.8-.7-1.5-1.5-1.5z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_capslock";
freezeTemplate(tmpl);
