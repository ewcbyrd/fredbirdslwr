import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./script.css";

import _implicitScopedStylesheets from "./script.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M44 6.8c-8.8 0-15.6 6.9-15.6 15.7v21.1c0 .8.7 1.5 1.5 1.5h16.7c.8 0 1.5-.7 1.5-1.5V27c0-.8-.7-1.5-1.5-1.5H34.2v-2.9c0-4.9 4.8-9.8 9.7-9.8h2.6c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5H44zm-24.4 0C10.8 6.8 4 13.7 4 22.6v21.1c0 .8.7 1.5 1.5 1.5h16.7c.8 0 1.5-.7 1.5-1.5V27c0-.8-.7-1.5-1.5-1.5H9.9v-2.9c0-4.9 4.8-9.8 9.7-9.8h2.6c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5h-2.6z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesAction_script";
freezeTemplate(tmpl);
