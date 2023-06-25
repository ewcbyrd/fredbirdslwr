import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom28.css";

import _implicitScopedStylesheets from "./custom28.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M64 20H36c-3.3 0-6 2.7-6 6v48c0 3.3 2.7 6 6 6h28c3.3 0 6-2.7 6-6V26c0-3.3-2.7-6-6-6zM50 78c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm14-10c0 1.1-.9 2-2 2H38c-1.1 0-2-.9-2-2V30c0-1.1.9-2 2-2h24c1.1 0 2 .9 2 2v38z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustomRtl_custom28";
freezeTemplate(tmpl);
