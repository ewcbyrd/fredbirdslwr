import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./delete.css";

import _implicitScopedStylesheets from "./delete.scoped.css?scoped=true";

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
    "d": "M45.5 10H33V6c0-2.2-1.8-4-4-4h-6c-2.2 0-4 1.8-4 4v4H6.5c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h39c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5zM23 7c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v3h-6V7zM41.5 20h-31c-.8 0-1.5.7-1.5 1.5V45c0 2.8 2.2 5 5 5h24c2.8 0 5-2.2 5-5V21.5c0-.8-.7-1.5-1.5-1.5zM23 42c0 .6-.4 1-1 1h-2c-.6 0-1-.4-1-1V28c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v14zm10 0c0 .6-.4 1-1 1h-2c-.6 0-1-.4-1-1V28c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v14z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesAction_delete";
freezeTemplate(tmpl);
