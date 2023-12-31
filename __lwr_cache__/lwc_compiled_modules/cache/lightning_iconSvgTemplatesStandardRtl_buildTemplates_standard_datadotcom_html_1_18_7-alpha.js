import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./datadotcom.css";

import _implicitScopedStylesheets from "./datadotcom.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M71.1 80h-6.8c-.4-2.4-.6-4.6-.6-6.5h-.1c-3.2 5.1-8.4 7.7-15.6 7.7-6.1 0-10.9-2-14.2-6.3-3.3-4.2-4.9-9.7-4.9-16.3 0-4.3.8-8.2 2.4-11.6s4-6.3 7-8.2c3.1-2 6.6-3.1 10.7-3.1 5.9 0 10.6 1.9 14.2 5.6V20h7.2v50.6c0 3 .3 6.2.7 9.4zm-7.9-18.5V47.8c-1.7-2.2-3.6-3.7-5.7-4.9-2.2-1-4.6-1.5-7.4-1.5-4.2 0-7.5 1.5-10 4.7s-3.6 7.3-3.6 12.3c0 5.2 1.1 9.3 3.4 12.4s5.6 4.6 9.7 4.6 7.4-1.3 9.8-4c2.6-2.5 3.8-5.8 3.8-9.9z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_datadotcom";
freezeTemplate(tmpl);
