import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom27.css";

import _implicitScopedStylesheets from "./custom27.scoped.css?scoped=true";

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
    "d": "M24 63h52c1.1 0 2-.9 2-2V29c0-3.3-2.7-6-6-6H28c-3.3 0-6 2.7-6 6v32c0 1.1.9 2 2 2zm4-32c0-1.1.9-2 2-2h40c1.1 0 2 .9 2 2v24c0 1.1-.9 2-2 2H30c-1.1 0-2-.9-2-2V31zM80 69H58c-1.1 0-2 .9-2 2s-.9 2-2 2h-8c-1.1 0-2-.9-2-2s-.9-2-2-2H20c-1.1 0-2 .9-2 2 0 3.3 2.7 6 6 6h52c3.3 0 6-2.7 6-6 0-1.1-.9-2-2-2z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustomRtl_custom27";
freezeTemplate(tmpl);
