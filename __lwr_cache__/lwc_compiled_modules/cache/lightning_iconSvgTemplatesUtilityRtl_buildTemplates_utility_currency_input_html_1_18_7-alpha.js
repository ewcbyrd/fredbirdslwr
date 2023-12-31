import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./currency_input.css";

import _implicitScopedStylesheets from "./currency_input.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M35.9 37.6c2.7-4.5 2.2-10.4-1.7-14.3-4.5-4.5-11.9-4.5-16.4 0-3.9 3.9-4.4 9.8-1.7 14.3h19.8z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M49.5 7.2v37.6c0 2.6-2.1 4.7-4.7 4.7H7.2c-2.6 0-4.7-2.1-4.7-4.7V7.2c0-2.6 2.1-4.7 4.7-4.7h37.6c2.6 0 4.7 2.1 4.7 4.7zm-39.2 36h31.3c.9 0 1.6-.7 1.6-1.6V10.3c0-.9-.7-1.6-1.6-1.6H10.3c-.9 0-1.6.7-1.6 1.6v31.3c.1.9.8 1.6 1.6 1.6z"
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
      "viewBox": "0 0 52 52",
      "part": "icon"
    },
    key: 0,
    svg: true
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_currency_input";
freezeTemplate(tmpl);
