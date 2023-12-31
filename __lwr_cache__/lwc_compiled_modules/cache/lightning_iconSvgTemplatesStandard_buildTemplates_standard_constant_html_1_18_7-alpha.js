import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./constant.css";

import _implicitScopedStylesheets from "./constant.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M79.4 26.7c-.3-.3-.8-.5-1.2-.5-4.8-.2-9.9.2-14.7.2l-17.2.1c-5.3 0-9.4 1.1-13.4 4.7-2.6 2.4-5 5.7-6.9 8.5-.2.3-.3.7-.3 1.1 0 1.1.9 1.9 1.9 1.9 1.1 0 1.4-.7 1.9-1.5s1.2-1.6 1.9-2.3c2.6-2.5 6.3-3.8 9.9-3.5-3 8.4-7.3 18.1-13.4 24.7-2.5 2.8-6.8 5.7-7.8 9.5-1 3.9 3 5 6.1 3.8 3.9-1.5 6.2-5.5 8.2-8.9 2.4-4.3 4.5-8.6 6.4-13.2 1.9-4.4 3.8-8.9 5.6-13.3 1.1-2.6 1.5-2.7 4.2-2.7h7.5c-2.8 6.1-5.5 12.3-8 18.6-1.9 4.8-5.3 11.7-2.9 16.9 2.4 5.1 9.2 3.2 12.9.6 3.8-2.6 6.2-6.9 8.3-10.9.4-.7.8-1.6.5-2.4-.3-.7-1-1.2-1.8-1.2-1.7 0-2.1 2.1-2.6 3.4-1 2.1-3.4 4.1-5.8 3.7-5.7-.8-.6-10.9.4-13.6 1-2.8 2.2-5.6 3.4-8.3.7-1.6 1.3-3.2 2.1-4.7 1-2 1-1.9 3.3-2 2-.1 7.5.9 9.2-.2 1.3-.9 2.2-4.2 2.8-6.6.2-.8 0-1.5-.5-1.9z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_constant";
freezeTemplate(tmpl);
