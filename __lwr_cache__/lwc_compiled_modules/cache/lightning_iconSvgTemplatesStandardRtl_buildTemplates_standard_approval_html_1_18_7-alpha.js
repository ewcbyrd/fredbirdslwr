import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./approval.css";

import _implicitScopedStylesheets from "./approval.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M74 54H63c-3.3 0-6-2.7-6-6 .5-8.9 4.6-9.4 5-15.1.4-6-3.4-11.4-9.3-12.7C44.9 18.6 38 24.5 38 32c0 6.6 4.5 6.6 5 16 0 3.3-2.7 6-6 6H26c-3.3 0-6 2.7-6 6v4c0 1.1.9 2 2 2h56c1.1 0 2-.9 2-2v-4c0-3.3-2.7-6-6-6zM74.1 72H25.9c-1.1 0-1.9.9-1.9 1.9v.1c0 3.3 2.7 6 6 6h40.1c3.3 0 5.9-2.7 5.9-6v-.1c0-1-.9-1.9-1.9-1.9z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_approval";
freezeTemplate(tmpl);
