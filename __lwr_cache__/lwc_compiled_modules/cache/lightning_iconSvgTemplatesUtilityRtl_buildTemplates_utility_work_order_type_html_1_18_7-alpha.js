import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./work_order_type.css";

import _implicitScopedStylesheets from "./work_order_type.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M12.5 26.9V25c0-1 .9-1.9 1.9-1.9h22.9c1 0 1.9.9 1.9 1.9v1.9c0 1-.9 1.9-1.9 1.9H14.5c-1 0-1.9-.9-1.9-1.9h-.1zm3.8 11.4v-1.9c0-1 .9-1.9 1.9-1.9h19.1c1 0 1.9.9 1.9 1.9v1.9c0 1-.9 1.9-1.9 1.9h-19c-1 0-1.9-.9-2-1.9zm22.9-22.9c0 1-.9 1.9-1.9 1.9H18.2c-1 0-1.9-.9-1.9-1.9v-1.9c0-1 .9-1.9 1.9-1.9h19.1c1 0 1.9.9 1.9 1.9v1.9zM5 9.7v32.4c0 3.1 2.6 5.7 5.7 5.7h30.5c3.1 0 5.7-2.6 5.7-5.7V9.7c0-3.1-2.6-5.7-5.8-5.7H10.7C7.5 4 4.9 6.6 5 9.7z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_work_order_type";
freezeTemplate(tmpl);
