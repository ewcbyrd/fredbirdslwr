import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom13.css";

import _implicitScopedStylesheets from "./custom13.scoped.css?scoped=true";

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
    "d": "M74 22H26c-3.3 0-6 2.7-6 6v6c0 1.1.9 2 2 2h56c1.1 0 2-.9 2-2v-6c0-3.3-2.7-6-6-6zM74 42H26c-1.1 0-2 .9-2 2v28c0 3.3 2.7 6 6 6h40c3.3 0 6-2.7 6-6V44c0-1.1-.9-2-2-2zm-13 9c0 1.6-1.3 3-3 3H42c-1.6 0-3-1.3-3-3 0-1.6 1.3-3 3-3h16c1.7 0 3 1.3 3 3z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustomRtl_custom13";
freezeTemplate(tmpl);
