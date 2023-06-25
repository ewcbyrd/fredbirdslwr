import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./currency.css";

import _implicitScopedStylesheets from "./currency.scoped.css?scoped=true";

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
    "d": "M74.4 30.8H25.6c-3.1 0-5.6 2.5-5.6 5.6v27.2c0 3.1 2.5 5.6 5.6 5.6h48.8c3.1 0 5.6-2.5 5.6-5.6V36.4c0-3.1-2.5-5.6-5.6-5.6zM32.2 63.6c0-3.7-2.9-6.6-6.6-6.6V43c3.7 0 6.6-2.9 6.6-6.6h35.6c0 3.7 2.9 6.6 6.6 6.6v14c-3.7 0-6.6 2.9-6.6 6.6H32.2z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "cx": "50",
    "cy": "49.5",
    "r": "9.4"
  },
  key: 4,
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
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("path", stc2), api_element("circle", stc3)])])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_currency";
freezeTemplate(tmpl);
