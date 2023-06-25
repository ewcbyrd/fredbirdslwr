import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./knowledge.css";

import _implicitScopedStylesheets from "./knowledge.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M32 59h13c1.1 0 2-.9 2-2V27c0-2.2-2-4-4-4H32.3C31 23 30 24 30 25.3V57c0 1.1.9 2 2 2zm44-30v32c0 2.2-1.8 4-4 4H28c-2.2 0-4-1.8-4-4V29c-3.3 0-6 2.7-6 6v30c0 3.3 2.7 6 6 6h19c1.1 0 2 .9 2 2s.9 2 2 2h6c1.1 0 2-.9 2-2s.9-2 2-2h19c3.3 0 6-2.7 6-6V35c0-3.3-2.7-6-6-6zM55 59h12.7c1.3 0 2.3-1 2.3-2.3V25c0-1.1-.9-2-2-2H57c-2 0-4 1.8-4 4v30c0 1.1.9 2 2 2z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_knowledge";
freezeTemplate(tmpl);
