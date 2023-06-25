import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./promotion_tiers.css";

import _implicitScopedStylesheets from "./promotion_tiers.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M27.35 24.87l-.16-.1.16.1zM41.87 38.84c-1.04 0-1.88.84-1.88 1.88s.84 1.88 1.88 1.88 1.88-.84 1.88-1.88-.84-1.88-1.88-1.88z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M49.32 35.13l-1.42-1.71c-.42-.5-.67-1.12-.71-1.77l-.16-2.18a2.8 2.8 0 00-2.56-2.6l-1.9-.15c-.85-.08-1.65-.43-2.29-1l-1.44-1.27c-1.05-.9-2.6-.9-3.65 0l-1.57 1.32c-.58.5-1.31.79-2.07.84l-2 .14c-1.38.1-2.49 1.18-2.62 2.56l-.14 1.86c-.08.86-.43 1.66-1 2.31l-1.25 1.44c-.89 1.05-.89 2.6 0 3.65l1.36 1.63c.46.55.73 1.23.77 1.94l.16 2.1a2.79 2.79 0 002.55 2.6l1.91.17c.84.08 1.64.43 2.27 1l1.45 1.26c1.06.89 2.6.89 3.66 0l1.66-1.39c.5-.44 1.12-.72 1.78-.8l2.18-.16a2.782 2.782 0 002.6-2.55l.22-1.73c.07-.94.44-1.84 1.06-2.56l1.16-1.33c.89-1.04.89-2.58-.01-3.62zm-20.94-2.12c0-1.98 1.6-3.59 3.58-3.6s3.59 1.6 3.6 3.58a3.6 3.6 0 01-3.58 3.6h-.02c-1.98 0-3.58-1.6-3.58-3.58zm5.2 11.54c-.05.09-.14.15-.24.16H32.2c-.11 0-.21-.06-.26-.16a.272.272 0 010-.3l8.25-15.12c.06-.08.14-.14.24-.15h1.23c.15.07.22.26.15.41l-8.23 15.16zm8.29-.25c-1.98 0-3.59-1.61-3.59-3.59s1.61-3.59 3.59-3.59 3.59 1.61 3.59 3.59-1.61 3.59-3.59 3.59z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M30.08 33.01c0-1.04.84-1.88 1.88-1.88H32c1.04 0 1.88.84 1.88 1.88h-.03c0 .54-.22 1.02-.58 1.36-.32.3-.74.49-1.2.51H32h-.02-.02c-1.04 0-1.88-.84-1.88-1.88z"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "d": "M24.38 27.84c-.16.45-.27.92-.31 1.41v.03l-.14 1.85c-.02.21-.11.41-.27.59s-1.27 1.47-1.27 1.47h-.01c-.7.84-1.13 1.8-1.3 2.81H4.6c-2.03 0-3.27-2.23-2.23-3.93l2.5-4.23h19.51zm2.02-2.72H6.48l4.82-8.16H32l2.71 4.58c-.47.22-.91.5-1.32.85l-1.58 1.32h-.01c-.07.07-.18.12-.31.13l-2.01.14c-1.14.08-2.19.49-3.06 1.14zM12.91 14.24l6.48-10.97c.98-1.7 3.47-1.7 4.52 0l6.48 10.97H12.91z",
    "fill-rule": "evenodd"
  },
  key: 5,
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
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2), api_element("path", stc3), api_element("path", stc4)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_promotion_tiers";
freezeTemplate(tmpl);
