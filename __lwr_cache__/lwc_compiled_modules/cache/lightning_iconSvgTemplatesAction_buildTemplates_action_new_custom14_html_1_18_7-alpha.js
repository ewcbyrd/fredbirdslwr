import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom14.css";

import _implicitScopedStylesheets from "./new_custom14.scoped.css?scoped=true";

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
    "d": "M48.4 11.7h-4.8c-1 0-2.1-.5-2.9-1.2l-3.8-3.3C36.1 6.5 35 6 34 6h-9.4c-1.2 0-2.3.5-3.2 1.4l-5 4.1c-.4.3-.4 1-.1 1.4l1.5 1.5c1 .8 2.4 1 3.4.2l4.4-2.7c.6-.4 1.4-.2 1.8.2l13.8 13.6c.3.3.6.8.6 1.3v3.6c0 1 .7 2 1.6 2h4.8c.9 0 1.6-.7 1.6-1.7V13.3c.2-1-.5-1.6-1.4-1.6z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M34.8 26.2l-8.6-8.5-2.4 1.5c-1.2.7-2.6 1.1-3.9 1.1-1.7 0-3.4-.6-4.8-1.8L11.9 16c-.7-.6-1.1-1.2-1.2-2.1-.2-.9-.8-1.4-1.6-1.4H3.6c-.9 0-1.6.5-1.6 1.4v14.7c0 1 .7 1.6 1.6 1.6h3.2c.2 0 .6-.9.9-1.3 1.2-1.6 3-2.5 4.9-2.8 1.9-.2 3.8.5 5.3 1.9l10 9.2c.9.8 1.5 1.7 1.9 2.8.2.6.9.7 1.3.3l3.8-3.8c1.9-1.9 3.4-6.5 1.6-8.6l-1.7-1.7z"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "d": "M14.7 32.2c-1-1-2.6-.8-3.4.3-.9 1.1-.7 2.8.3 3.7l10 9.1c.5.5 1.1.6 1.8.6.6-.1 1.2-.4 1.6-1 .9-1.1.7-2.8-.3-3.7l-10-9z"
  },
  key: 5,
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
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("path", stc2), api_element("path", stc3), api_element("path", stc4)])])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesAction_new_custom14";
freezeTemplate(tmpl);
