import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom100.css";

import _implicitScopedStylesheets from "./custom100.scoped.css?scoped=true";

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
    "d": "M61.9 72H38.1c-.7 0-1.1.6-1 1.3 1 3.8 6.4 6.7 12.8 6.7 6.5 0 11.9-2.9 12.8-6.7.3-.7-.2-1.3-.8-1.3zM74 26H26c-3.3 0-6 2.7-6 6v28c0 3.3 2.7 6 6 6h48c3.3 0 6-2.7 6-6V32c0-3.3-2.7-6-6-6zm0 32c0 1.1-.9 2-2 2H28c-1.1 0-2-.9-2-2V34c0-1.1.9-2 2-2h44c1.1 0 2 .9 2 2v24z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustom_custom100";
freezeTemplate(tmpl);
