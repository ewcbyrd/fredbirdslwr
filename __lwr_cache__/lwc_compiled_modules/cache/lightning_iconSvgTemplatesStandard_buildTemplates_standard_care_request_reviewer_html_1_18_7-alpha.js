import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./care_request_reviewer.css";

import _implicitScopedStylesheets from "./care_request_reviewer.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M73.3 69.4c-2.3-.9-2.6-1.8-2.6-2.8a3.59 3.59 0 011.4-2.6 6.42 6.42 0 002.1-5c0-3.8-2.3-7-6.3-7s-6.3 3.2-6.3 7a6.78 6.78 0 002.1 5 3.59 3.59 0 011.4 2.6c0 1-.3 1.9-2.6 2.9-3.3 1.5-6.4 3.3-6.5 6.3 0 2 1.5 4.1 3.4 4.1h17.2c1.9 0 3.4-2.1 3.2-4.1-.1-3-3.2-5-6.5-6.4z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M52 75.8v-.2c.2-5.4 5.2-8.1 8.2-9.5a10.53 10.53 0 01-2.6-7.1 12.59 12.59 0 01.84-4.6H50.1a1.22 1.22 0 01-1.2-1.2v-2.3a1.22 1.22 0 011.2-1.2h12a10.58 10.58 0 0111.15-.22V25.6A5.59 5.59 0 0067.7 20H32.3a5.59 5.59 0 00-5.6 5.6v44.8a5.59 5.59 0 005.6 5.6H52v-.2zm-3.1-40.9a1.22 1.22 0 011.2-1.2h15.2a1.22 1.22 0 011.2 1.2v2.3a1.13 1.13 0 01-1.1 1.2H50.1a1.22 1.22 0 01-1.2-1.2zm-4.1 20.5a.91.91 0 010 1.2l-1.2 1.2a.91.91 0 01-1.2 0L39 54.4l-3.3 3.3a.91.91 0 01-1.2 0l-1.2-1.2a.91.91 0 010-1.2l3.3-3.3-3.3-3.3a.91.91 0 010-1.2l1.2-1.2a.91.91 0 011.2 0l3.3 3.3 3.4-3.4a.91.91 0 011.2 0l1.2 1.2a.91.91 0 010 1.2L41.4 52zm2.8-24.3l-9 9a1.66 1.66 0 01-1.2.5 1.58 1.58 0 01-1.2-.5l-4.3-4.3a.75.75 0 010-1.2l1.2-1.2a.75.75 0 011.2 0l3.1 3.1 7.7-7.7a.75.75 0 011.2 0l1.2 1.2c.3.4.3 1 .1 1.1z"
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
      "viewBox": "0 0 100 100",
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_care_request_reviewer";
freezeTemplate(tmpl);
