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
    "d": "M72.3 20.1H27.8c-4.3 0-7.8 3.5-7.8 7.8v44.3c0 4.3 3.5 7.8 7.8 7.8h44.4c4.3 0 7.8-3.5 7.8-7.8V27.9c.1-4.3-3.4-7.8-7.7-7.8zm-41.9 13c0-1.4 1.2-2.6 2.6-2.6h29.2c1.4 0 2.6 1.2 2.6 2.6v2.7c0 1.4-1.1 2.6-2.5 2.6H33c-1.4 0-2.6-1.2-2.6-2.6v-2.7zm30.8 34c0 1.4-1.1 2.6-2.5 2.6H33c-1.4 0-2.6-1.2-2.6-2.6v-2.6c0-1.4 1.2-2.6 2.6-2.6h25.6c1.4 0 2.6 1.2 2.6 2.6v2.6zm8.4-15.7c0 1.4-1.1 2.6-2.5 2.6H33c-1.4 0-2.6-1.2-2.6-2.6v-2.6c0-1.4 1.2-2.6 2.6-2.6h34c1.4 0 2.6 1.2 2.6 2.6v2.6z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_display_text";
freezeTemplate(tmpl);
