import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./favorite.css";

import _implicitScopedStylesheets from "./favorite.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M27.4 3.1l4.6 15c.2.6.8.9 1.4.9h15c1.5 0 2.1 2 .9 2.9l-12.2 9c-.5.4-.7 1.1-.5 1.7L42.4 48c.4 1.4-1.1 2.6-2.3 1.7L27 39.9c-.5-.4-1.2-.4-1.8 0L12 49.7c-1.2.9-2.8-.3-2.3-1.7l5.6-15.4c.2-.6 0-1.3-.5-1.7l-12.2-9c-1.2-.9-.5-2.9.9-2.9h15c.7 0 1.2-.2 1.4-.9L24.6 3c.4-1.4 2.4-1.3 2.8.1z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_favorite";
freezeTemplate(tmpl);
