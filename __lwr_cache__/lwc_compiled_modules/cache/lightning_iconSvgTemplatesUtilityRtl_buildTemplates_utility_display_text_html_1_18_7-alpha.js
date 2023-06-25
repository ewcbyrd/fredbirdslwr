import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./display_text.css";

import _implicitScopedStylesheets from "./display_text.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M2.5 8.6v34.7c0 3.4 2.7 6.1 6.1 6.1h34.8c3.4 0 6.1-2.7 6.1-6.1V8.6c0-3.4-2.7-6.1-6.1-6.1H8.5c-3.3 0-6.1 2.7-6 6.1zm39 4.1v2.1c0 1.1-.9 2-2 2h-23c-1.1 0-2-.9-2-2v-2.1c0-1.1.9-2 2-2h22.9c1.1 0 2 .9 2.1 2zM17.3 37.3c0-1.1.9-2 2-2h20c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2h-20c-1.1 0-2-.9-2-2v-2zM10.7 27v-2c0-1.1.9-2 2-2h26.6c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2H12.6c-1.1 0-2-.9-1.9-2z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_display_text";
freezeTemplate(tmpl);
