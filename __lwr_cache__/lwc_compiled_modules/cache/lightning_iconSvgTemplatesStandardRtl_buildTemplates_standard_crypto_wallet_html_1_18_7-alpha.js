import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./crypto_wallet.css";

import _implicitScopedStylesheets from "./crypto_wallet.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M53.21 20.96a6.423 6.423 0 00-6.43 0l-6.56 3.79a6.425 6.425 0 00-3.21 5.57v7.58c0 2.3 1.23 4.42 3.21 5.57l6.56 3.79a6.423 6.423 0 006.43 0l6.56-3.79a6.425 6.425 0 003.21-5.57v-7.58c0-2.3-1.23-4.42-3.21-5.57l-6.56-3.79z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M26.43 39.19h6.87v.84c0 2.3 1.23 4.42 3.21 5.57l.03.02h-6.9c-1.78 0-3.21 1.44-3.21 3.21s1.44 3.21 3.21 3.21h43.93c3.55 0 6.43 2.88 6.43 6.43v15c0 3.55-2.88 6.43-6.43 6.43H26.43c-3.55 0-6.43-2.88-6.43-6.43V45.61c0-3.55 2.88-6.43 6.43-6.43zM73.57 45.62H63.16l.12-.06a6.43 6.43 0 003.42-5.68v-.68h.44c3.55 0 6.43 2.88 6.43 6.43z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_crypto_wallet";
freezeTemplate(tmpl);
