import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./section.css";

import _implicitScopedStylesheets from "./section.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    "d": "M47.6 29.2h-8c-1.3 0-2.4-1.1-2.4-2.4v-1.6c0-1.3 1.1-2.4 2.4-2.4h8c1.3 0 2.4 1.1 2.4 2.4v1.6c0 1.3-1.1 2.4-2.4 2.4M30 29.2h-8c-1.3 0-2.4-1.1-2.4-2.4v-1.6c0-1.3 1.1-2.4 2.4-2.4h8c1.3 0 2.4 1.1 2.4 2.4v1.6c0 1.3-1.1 2.4-2.4 2.4M12.4 29.2h-8C3 29.2 2 28.1 2 26.8v-1.6c0-1.3 1.1-2.4 2.4-2.4h8c1.3 0 2.4 1.1 2.4 2.4v1.6c0 1.3-1.1 2.4-2.4 2.4M43.6 34H8.4c-1.8 0-3.2 1.4-3.2 3.2v8c0 1.8 1.4 3.2 3.2 3.2h35.2c1.8 0 3.2-1.4 3.2-3.2v-8c0-1.8-1.5-3.2-3.2-3.2zM42 42.8c0 .4-.4.8-.8.8H10.8c-.4 0-.8-.4-.8-.8v-3.2c0-.4.4-.8.8-.8h30.4c.4 0 .8.4.8.8v3.2zM43.6 3.6H8.4C6.6 3.6 5.2 5 5.2 6.8v8c0 1.8 1.4 3.2 3.2 3.2h35.2c1.8 0 3.2-1.4 3.2-3.2v-8c0-1.8-1.5-3.2-3.2-3.2zM42 12.4c0 .4-.4.8-.8.8H10.8c-.4 0-.8-.4-.8-.8V9.2c0-.4.4-.8.8-.8h30.4c.4 0 .8.4.8.8v3.2z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_section";
freezeTemplate(tmpl);
