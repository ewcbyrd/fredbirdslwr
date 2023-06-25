import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./contract_line_outcome.css";

import _implicitScopedStylesheets from "./contract_line_outcome.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M41.1 19H30.28c-2.55 0-4.64-2.09-4.64-4.64V3.55c0-.85-.7-1.55-1.55-1.55H8.64C6.09 2 4 4.09 4 6.64v37.1c0 2.55 2.09 4.64 4.64 4.64h16.54a14.94 14.94 0 01-3.22-9.28h-2.73c-.85 0-1.55-.7-1.55-1.55V36c0-.85.7-1.55 1.55-1.55h3.46c.55-1.7 1.39-3.26 2.47-4.64h-5.93c-.85 0-1.55-.7-1.55-1.55v-1.55c0-.85.7-1.55 1.55-1.55h12.08c1.75-.71 3.66-1.1 5.66-1.1s3.93.4 5.68 1.11v-4.65c0-.85-.7-1.55-1.55-1.55zM11.42 39.18c-1.31 0-2.4-1.08-2.4-2.4s1.08-2.4 2.4-2.4 2.4 1.08 2.4 2.4-1.08 2.4-2.4 2.4zm-2.4-11.67c0 1.31 1.08 2.4 2.4 2.4s2.4-1 2.4-2.4c0-1.31-1.08-2.4-2.4-2.4s-2.4 1.08-2.4 2.4zm6.18-9.89l-3.4 1.78c-.23.15-.54-.08-.46-.31l.62-3.79c0-.08 0-.23-.08-.31L9.1 12.28c-.08-.15.08-.46.31-.54l3.79-.54c.08 0 .23-.08.23-.15l1.7-3.48c.15-.23.46-.23.62 0l1.7 3.48c.08.08.15.15.23.15l3.79.54c.23.08.39.39.15.54l-2.78 2.71c-.08.08-.08.15-.08.31l.62 3.79c.08.23-.23.46-.46.31l-3.4-1.78a.23.23 0 00-.31 0zm26.36-3.25h-8.19c-1.7 0-3.09-1.39-3.09-3.09v-8.2c0-.62.46-1.08 1.08-1.08.31 0 .54.08.77.31l10.2 10.2c.23.23.31.46.31.77 0 .62-.46 1.08-1.08 1.08zm6.31 24.72c0 6.03-4.89 10.91-10.91 10.91s-10.91-4.89-10.91-10.91 4.89-10.91 10.91-10.91 10.91 4.89 10.91 10.91zm-9.36-6.03s-.01-.03-.03-.04c0 0-.02-.01-.03-.03-.21-.23-.57-.2-.76.07l-.82.86-.03.03c-.21.23-.21.63.03.83l2.12 2.32c.06.07.12.17.12.3 0 .23-.15.43-.39.43h-8.01c-.3 0-.54.27-.57.6v1.26c.03.33.27.6.57.66h8.04c.09 0 .15.03.21.1.18.13.21.43.06.6l-2.12 2.32-.03.03c-.21.23-.21.63.03.83l.79.9.03.03c.21.23.57.23.76-.03l5.11-5.61.03-.03c.21-.23.21-.63-.03-.83l-5.08-5.61z",
    "fill-rule": "evenodd"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_contract_line_outcome";
freezeTemplate(tmpl);
