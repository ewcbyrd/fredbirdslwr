import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./process.css";

import _implicitScopedStylesheets from "./process.scoped.css?scoped=true";

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
    "d": "M37.6 46.3l10.8-13.4c.8-1 2.3-1 3.1 0l10.8 13.4c.4.5 1 .7 1.6.7H76c1.1 0 2-.9 2-2V28c0-3.3-2.7-6-6-6H28c-3.3 0-6 2.7-6 6v17c0 1.1.9 2 2 2h12c.6 0 1.2-.3 1.6-.7zM62.3 53.7L51.5 67.1c-.8 1-2.3 1-3.1 0L37.6 53.7c-.4-.5-1-.7-1.6-.7H24c-1.1 0-2 .9-2 2v17c0 3.3 2.7 6 6 6h44c3.3 0 6-2.7 6-6V55c0-1.1-.9-2-2-2H63.9c-.6 0-1.2.3-1.6.7z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_process";
freezeTemplate(tmpl);
