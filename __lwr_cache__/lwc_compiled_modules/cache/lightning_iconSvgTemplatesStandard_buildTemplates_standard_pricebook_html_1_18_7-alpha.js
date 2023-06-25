import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./pricebook.css";

import _implicitScopedStylesheets from "./pricebook.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M71.7 20H34.1c-3.3 0-6.1 2.8-6.1 5.8V28h-2c-2.2 0-4 1.8-4 4s1.8 4 4 4h2v10h-2c-2.2 0-4 1.8-4 4s1.8 4 4 4h2v10h-2c-2.2 0-4 1.8-4 4s1.8 4 4 4h2v1.8c0 3 2.8 6.2 6.1 6.2h37.6c3.3 0 6.3-3.3 6.3-6.6v-48c0-3.3-3-5.4-6.3-5.4zM43 61c0 .6-.4 1-1 1h-4c-.6 0-1-.4-1-1V39c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v22zm8 0c0 .6-.4 1-1 1h-2c-.6 0-1-.4-1-1V39c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v22zm10 0c0 .6-.4 1-1 1h-4c-.6 0-1-.4-1-1V39c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v22zm8 0c0 .6-.4 1-1 1h-2c-.6 0-1-.4-1-1V39c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v22z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_pricebook";
freezeTemplate(tmpl);
