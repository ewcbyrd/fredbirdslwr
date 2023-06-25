import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_event.css";

import _implicitScopedStylesheets from "./new_event.scoped.css?scoped=true";

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
    "d": "M46.5 20h-41c-.8 0-1.5.7-1.5 1.5V46c0 2.2 1.8 4 4 4h36c2.2 0 4-1.8 4-4V21.5c0-.8-.7-1.5-1.5-1.5zM19 42c0 .6-.4 1-1 1h-4c-.6 0-1-.4-1-1v-4c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v4zm0-10c0 .6-.4 1-1 1h-4c-.6 0-1-.4-1-1v-4c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v4zm10 10c0 .6-.4 1-1 1h-4c-.6 0-1-.4-1-1v-4c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v4zm0-10c0 .6-.4 1-1 1h-4c-.6 0-1-.4-1-1v-4c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v4zm10 10c0 .6-.4 1-1 1h-4c-.6 0-1-.4-1-1v-4c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v4zm0-10c0 .6-.4 1-1 1h-4c-.6 0-1-.4-1-1v-4c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v4zM44 7h-5V5c0-1.6-1.3-3-3-3-1.6 0-3 1.3-3 3v2H19V5c0-1.6-1.3-3-3-3-1.6 0-3 1.3-3 3v2H8c-2.2 0-4 1.8-4 4v2.5c0 .8.7 1.5 1.5 1.5h41c.8 0 1.5-.7 1.5-1.5V11c0-2.2-1.8-4-4-4z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesAction_new_event";
freezeTemplate(tmpl);
