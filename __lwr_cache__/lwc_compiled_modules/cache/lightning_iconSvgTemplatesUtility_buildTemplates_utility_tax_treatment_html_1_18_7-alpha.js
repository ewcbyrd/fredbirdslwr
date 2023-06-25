import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./tax_treatment.css";

import _implicitScopedStylesheets from "./tax_treatment.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M37.57 48.47h4.21c.14 0 .28 0 .41-.06.13-.05.25-.13.35-.23s.18-.22.23-.35.07-.27.06-.41V30.5c0-.14 0-.28-.06-.41-.05-.13-.13-.25-.23-.35a.952.952 0 00-.76-.29h-4.21c-.14 0-.28 0-.41.06-.13.05-.25.13-.35.23s-.18.22-.23.35c-.05.13-.07.27-.06.41v16.93c0 .14 0 .28.06.41.05.13.13.25.23.35s.22.18.35.23c.13.05.27.07.41.06zM47.08 48.47h2.13c.14 0 .28 0 .41-.06.13-.05.25-.13.35-.23s.18-.22.23-.35.07-.27.06-.41V30.5c0-.14 0-.28-.06-.41-.05-.13-.13-.25-.23-.35a.952.952 0 00-.76-.29h-2.13c-.14 0-.28 0-.41.06-.13.05-.25.13-.35.23s-.18.22-.23.35c-.05.13-.07.27-.06.41v16.93a1.014 1.014 0 00.3.76c.1.1.22.18.35.23s.27.07.41.07zM32.71 48.47c.14.02.29 0 .43-.05s.26-.12.37-.22c.1-.1.19-.22.24-.36.05-.13.08-.28.07-.42V30.5c0-.14 0-.28-.06-.41-.05-.13-.13-.25-.23-.35s-.22-.18-.35-.23a.952.952 0 00-.41-.06h-.06c-.14 0-.28 0-.41.06-.13.05-.25.13-.35.23s-.18.22-.23.35c-.05.13-.07.27-.06.41v16.93c0 .14 0 .28.05.42.05.13.12.26.22.36.1.1.22.18.36.22s.28.06.42.05zM26.76 48.47h1.04c.14 0 .28 0 .41-.06.13-.05.25-.13.35-.23a.952.952 0 00.29-.76V30.5c0-.14 0-.28-.06-.41-.05-.13-.13-.25-.23-.35s-.22-.18-.35-.23a.952.952 0 00-.41-.06h-1.04c-.14 0-.28 0-.41.06-.13.05-.25.13-.35.23s-.18.22-.23.35c-.05.13-.07.27-.06.41v16.93c0 .14 0 .28.05.42.05.13.12.26.22.36.1.1.22.18.36.22.13.05.28.06.42.05zM17.64 48.47h4.21c.14 0 .28 0 .41-.06.13-.05.25-.13.35-.23a.952.952 0 00.29-.76V30.5c0-.14 0-.28-.06-.41-.05-.13-.13-.25-.23-.35s-.22-.18-.35-.23a.952.952 0 00-.41-.06h-4.21c-.14 0-.28 0-.41.06-.13.05-.25.13-.35.23s-.18.22-.23.35c-.05.13-.07.27-.06.41v16.93a1.014 1.014 0 00.3.76c.1.1.22.18.34.23.13.05.27.07.41.07z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M18.31 3.66l13.09 7.21c.32.21.53.58.53.95v.95c0 .58-.48 1.06-1.06 1.06H3.31c-.58 0-1.06-.48-1.06-1.06v-1.01c0-.38.21-.69.53-.9l13.1-7.21c.38-.27.79-.43 1.22-.43s.85.16 1.22.43zm-3.87 5.41c0 1.48 1.17 2.65 2.65 2.65s2.65-1.17 2.65-2.65-1.17-2.65-2.65-2.65-2.65 1.17-2.65 2.65zM15.12 35.04v-4.56c0-.32.04-.64.15-.94.06-.17.14-.33.24-.47V18.08c0-.58-.48-1.06-1.06-1.06h-1.06c-.58 0-1.06.48-1.06 1.06v11.67H9.15V18.08c0-.58-.48-1.06-1.06-1.06H7.03c-.58 0-1.06.48-1.06 1.06v11.67h-.53c-1.75 0-3.18 1.43-3.18 3.18v1.06c0 .58.48 1.06 1.06 1.06h11.8zm6.75-7.07v-9.91c0-.58-.48-1.06-1.06-1.06h-1.06c-.58 0-1.06.48-1.06 1.06v9.9h3.18zm3.18.23l.21-.09c.3-.11.62-.17.94-.15h.9c.32 0 .64.04.94.15.06.02.13.05.19.08V18.07c0-.58-.48-1.06-1.06-1.06h-1.06c-.58 0-1.06.48-1.06 1.06v10.14z",
    "fill-rule": "evenodd"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_tax_treatment";
freezeTemplate(tmpl);
