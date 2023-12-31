import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./variable.css";

import _implicitScopedStylesheets from "./variable.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M70.9 39.7c3.1 0 9.1-2.5 9.1-10.6s-5.8-8.5-7.6-8.5c-3.6 0-7.1 2.6-10.2 7.9C59.1 34 55.6 40 55.6 40h-.1c-.8-3.8-1.4-7-1.7-8.4-.6-3.3-4.5-10.6-12.5-10.6S26 25.6 26 25.6c-1.4.9-2.3 2.4-2.3 4.1 0 2.7 2.2 4.9 4.9 4.9.8 0 1.5-.2 2.1-.5 0 0 6.1-3.4 7.4 0 .4 1 .7 2.2 1.1 3.4 1.6 5.2 3 11.4 4.2 17l-5.2 7.6s-5.9-2.1-9-2.1S20 62.5 20 70.6s5.8 8.5 7.6 8.5c3.6 0 7.1-2.6 10.2-7.9 3.1-5.5 6.6-11.5 6.6-11.5 1 5 1.9 9 2.4 10.6 2 5.7 6.6 9.1 12.7 9.1 0 0 6.3 0 13.7-4.2 1.8-.7 3.1-2.5 3.1-4.5 0-2.7-2.2-4.9-4.9-4.9-.8 0-1.5.2-2.1.5 0 0-5.3 3-7.1.6-1.3-2.5-2.4-5.7-3.2-9.7-.8-3.6-1.7-7.8-2.5-11.9l5.3-7.7c.1 0 6 2.1 9.1 2.1z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_variable";
freezeTemplate(tmpl);
