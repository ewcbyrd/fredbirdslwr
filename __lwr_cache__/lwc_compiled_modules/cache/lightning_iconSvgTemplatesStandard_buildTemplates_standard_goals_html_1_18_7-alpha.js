import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./goals.css";

import _implicitScopedStylesheets from "./goals.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M26 20c-3.3 0-6 2.7-6 6 0 1.8.8 3.4 2 4.5V76c0 2.2 1.8 4 4 4s4-1.8 4-4V30.5c1.2-1.1 2-2.7 2-4.5 0-3.3-2.7-6-6-6zM76.5 30.8c-15.7 8.2-24.4-5.9-39.2-.5-.8.3-1.3 1.1-1.3 1.9V58c0 1.3 1.3 2.3 2.6 1.9 14.2-4.3 22.9 9.1 38.4.7.6-.4 1-1 1-1.7V31.7c0-.8-.8-1.3-1.5-.9zM72 44.5c-1.9.5-3.8.5-5.8.5H66v6h.2c2 0 3.9-.1 5.8-.6v5.9c-1.8.6-3.6.8-5.8.8H66v-6c-2 0-4-.3-6-.7v6c-1.4-.3-2.8-.7-4.1-1.1-.7-.2-1.3-.4-1.9-.6v-5.9c-2.2-.7-3.9-1.3-6-1.6v6c-1-.1-2.2-.2-3.5-.2-.9 0-1.7.1-2.5.2v-6c.8-.1 1.7-.2 2.5-.2 1.3 0 2.5.1 3.5.2v-5.7c-1-.2-2.1-.4-3.5-.4-.9 0-1.7.1-2.5.2v-6c.8-.1 1.7-.2 2.5-.2 1.4 0 2.4.2 3.5.4v6c1.5.4 3 1 5.2 1.6.3.1.5.1.8.2v-6c2 .6 3.9 1 6 1.4v5.9c1.9.4 3.9.4 6 .4v-6h.2c2 0 3.9.2 5.8-.2v5.7z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M54 43.3v5.5c.4.1.9.3 1.3.4 1.6.4 3.1.9 4.7 1.2v-5.7c-2.1-.5-4-.9-6-1.4z"
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
      "viewBox": "0 0 100 100",
      "part": "icon"
    },
    key: 0,
    svg: true
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_goals";
freezeTemplate(tmpl);
