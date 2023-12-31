import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./funding_requirement.css";

import _implicitScopedStylesheets from "./funding_requirement.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M43.5 51.33v18.92c0 .47.31.78.78.78.16 0 .31 0 .39-.08 3.76-2.09 11.44-7.73 11.44-8.06 0-2.28.65-3.9.98-4.88.33-.98 1.18-2.28 1.63-2.93.44-.65.98-1.3 1.63-1.95s1.95-1.63 1.95-1.63V41.33c0-.47-.31-.78-.78-.78-.16 0-.31 0-.39.08l-16.84 9.38c-.47.23-.78.78-.78 1.32zm-1.57-5.27l16.92-9.38c.39-.23.47-.7.23-1.09l-.23-.23c-3.76-2.09-15.28-8.61-15.28-8.61a4.95 4.95 0 00-4.86 0s-11.52 6.43-15.28 8.61c-.39.23-.47.7-.24 1.09.08.08.16.16.24.23l16.92 9.38c.47.23 1.1.23 1.57 0zm-3.92 3.95l-16.84-9.38c-.39-.23-.86-.08-1.1.31-.08.08-.08.23-.08.39v16.9c0 1.71.94 3.26 2.43 4.11 0 0 11.44 6.43 15.2 8.53.39.23.86.08 1.1-.31.08-.16.08-.31.08-.39V51.33c0-.54-.31-1.09-.78-1.32z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M68.94 51.76c-6.13 0-11.06 4.93-11.06 11.06s4.93 11.06 11.06 11.06S80 68.95 80 62.82s-4.93-11.06-11.06-11.06zm6.17 8.29l-7.05 7.14c-.28.28-.74.28-1.01 0l-3.87-3.92a.712.712 0 010-1.01l1.01-1.01c.28-.28.74-.28 1.01 0l2.03 2.07c.18.18.51.18.69 0l5.16-5.35c.28-.28.74-.28 1.01 0l1.01 1.01c.32.28.32.74 0 1.06z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_funding_requirement";
freezeTemplate(tmpl);
