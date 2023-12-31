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
    "d": "M66 26c0 1.8.8 3.4 2 4.5V76c0 2.2 1.8 4 4 4s4-1.8 4-4V30.5c1.2-1.1 2-2.7 2-4.5 0-3.3-2.7-6-6-6s-6 2.7-6 6zm-46 5.7v27.2c0 .7.4 1.3 1 1.7 15.5 8.4 24.2-5 38.4-.7 1.3.4 2.6-.6 2.6-1.9V32.2c0-.8-.5-1.6-1.3-1.9-14.8-5.4-23.5 8.7-39.2.5-.7-.4-1.5.1-1.5.9zm6 7.1c1.9.4 3.8.2 5.8.2h.2v6c2.1 0 4.1 0 6-.4v-5.9c2.1-.4 4-.8 6-1.4v6c.3-.1.5-.1.8-.2 2.2-.6 3.7-1.2 5.2-1.6v-6c1.1-.2 2.1-.4 3.5-.4.8 0 1.7.1 2.5.2v6c-.8-.1-1.6-.2-2.5-.2-1.4 0-2.5.2-3.5.4v5.7c1-.1 2.2-.2 3.5-.2.8 0 1.7.1 2.5.2v6c-.8-.1-1.6-.2-2.5-.2-1.3 0-2.5.1-3.5.2v-6c-2.1.3-3.8.9-6 1.6v5.9c-.6.2-1.2.4-1.9.6-1.3.4-2.7.8-4.1 1.1v-6c-2 .4-4 .7-6 .7v6h-.2c-2.2 0-4-.2-5.8-.8v-5.9c1.9.5 3.8.6 5.8.6h.2v-6h-.2c-2 0-3.9 0-5.8-.5v-5.7zm12 5.9v5.7c1.6-.3 3.1-.8 4.7-1.2.4-.1.9-.3 1.3-.4v-5.5c-2 .5-3.9.9-6 1.4z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_goals";
freezeTemplate(tmpl);
