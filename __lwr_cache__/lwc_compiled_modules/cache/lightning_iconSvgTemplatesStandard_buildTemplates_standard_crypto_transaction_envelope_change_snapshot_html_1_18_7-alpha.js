import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./crypto_transaction_envelope_change_snapshot.css";

import _implicitScopedStylesheets from "./crypto_transaction_envelope_change_snapshot.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M46.79 20.86a6.386 6.386 0 016.41 0l20.43 11.79a6.426 6.426 0 013.21 5.55v23.59c0 2.29-1.22 4.41-3.21 5.55L53.2 79.13a6.386 6.386 0 01-6.41 0L26.36 67.34a6.426 6.426 0 01-3.21-5.55V38.2c0-2.29 1.22-4.41 3.21-5.55l20.43-11.79zm1.67 14.62l-1.28-1.28a.884.884 0 00-1.25-.03l-.03.03-8.03 8.03-3.22-3.22a.884.884 0 00-1.25-.03c-.01 0-.02.02-.03.03l-1.28 1.28c-.35.34-.37.89-.03 1.25 0 .01.02.02.03.03l4.5 4.5c.37.37.85.55 1.28.55.49 0 .91-.18 1.28-.55l9.31-9.3c.3-.3.3-.91 0-1.28zm2.68 8.7h15.81c.67 0 1.21-.55 1.22-1.22v-2.43c0-.67-.54-1.21-1.22-1.22H51.14c-.67 0-1.21.55-1.22 1.22v2.43c0 .67.55 1.21 1.22 1.22zm15.81 10.95H47.49c-.67 0-1.21-.54-1.22-1.22v-2.43c0-.67.55-1.22 1.22-1.22h19.46c.67 0 1.21.55 1.22 1.22v2.43c0 .67-.55 1.21-1.22 1.22zm-29.19 0h2.43c.67 0 1.21-.55 1.22-1.22v-2.43c0-.67-.54-1.21-1.22-1.22h-2.43c-.67 0-1.21.55-1.22 1.22v2.43c0 .67.55 1.21 1.22 1.22zm2.43 10.95h-2.43c-.67 0-1.21-.55-1.22-1.22v-2.43c0-.67.55-1.21 1.22-1.22h2.43c.67 0 1.21.55 1.22 1.22v2.43c0 .67-.55 1.21-1.22 1.22zm7.3 0h19.46c.67 0 1.21-.55 1.22-1.22v-2.43c0-.67-.55-1.21-1.22-1.22H47.49c-.67 0-1.21.54-1.22 1.22v2.43c0 .67.55 1.21 1.22 1.22z",
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_crypto_transaction_envelope_change_snapshot";
freezeTemplate(tmpl);
