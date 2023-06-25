import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./snippet.css";

import _implicitScopedStylesheets from "./snippet.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M74.1 23.9c-12.1 0-21.3 9.4-21.3 21.4v28.8c0 1.1.9 2 2 2h22.8c1.1 0 2-.9 2-2V51.3c0-1.1-.9-2-2-2H60.8v-4c0-6.7 6.6-13.4 13.3-13.4h3.5c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2h-3.5zm-33.3 0c-12.1 0-21.3 9.4-21.3 21.4v28.8c0 1.1.9 2 2 2h22.8c1.1 0 2-.9 2-2V51.3c0-1.1-.9-2-2-2H27.6v-4c0-6.7 6.6-13.4 13.3-13.4h3.5c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2h-3.6z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_snippet";
freezeTemplate(tmpl);
