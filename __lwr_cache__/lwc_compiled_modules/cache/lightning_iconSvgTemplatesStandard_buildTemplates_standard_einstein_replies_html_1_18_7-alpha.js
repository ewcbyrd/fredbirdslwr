import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./einstein_replies.css";

import _implicitScopedStylesheets from "./einstein_replies.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M50 22.4c-16.7 0-30 12.3-30 27.4 0 4.8 1.4 9.3 3.6 13.3.4.6.5 1.4.3 2.1L20 75.9c-.4 1 .6 1.9 1.6 1.6l10.9-4.1c.6-.3 1.4-.1 2.1.3 4.5 2.5 9.9 4 15.7 4 16.4-.2 29.8-12.3 29.8-27.6C80 34.6 66.6 22.4 50 22.4zm13.3 24.5l-7 5.2c-.3.2-.4.6-.3 1l3.3 8.8c.2.8-.6 1.5-1.3 1l-7.5-5.6c-.3-.2-.7-.2-1 0l-7.6 5.6c-.7.5-1.6-.2-1.3-1l3.2-8.8c.1-.3 0-.7-.3-1l-7-5.2c-.7-.5-.3-1.7.5-1.7h8.6c.4 0 .7-.1.8-.5l2.7-8.7c.2-.8 1.4-.7 1.6.1l2.6 8.6c.1.3.5.5.8.5h8.6c1 0 1.3 1.2.6 1.7z"
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
      "viewBox": "0 0 100 100",
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_einstein_replies";
freezeTemplate(tmpl);
