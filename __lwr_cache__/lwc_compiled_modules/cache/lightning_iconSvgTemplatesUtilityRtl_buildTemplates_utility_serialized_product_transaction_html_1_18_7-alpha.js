import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./serialized_product_transaction.css";

import _implicitScopedStylesheets from "./serialized_product_transaction.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M7 14.94h37.34a2.11 2.11 0 002.07-2.08V4.17a2.11 2.11 0 00-2.07-2.07H7a2.12 2.12 0 00-2.13 2.07v8.69A2.12 2.12 0 007 14.94zm18.65-10a3.47 3.47 0 11-3.48 3.46 3.47 3.47 0 013.43-3.51zM7 29.45h37.34a2.07 2.07 0 002.07-2.09v-8.6a2.11 2.11 0 00-2.07-2.07H7a2.09 2.09 0 00-2.08 2.09v8.52A2.13 2.13 0 007 29.45zm20-6.38a3.47 3.47 0 110 .08zm-10.37 0a3.47 3.47 0 110 .08zM46.89 43l-.64-.63-5.1-5.11a.68.68 0 00-.95-.08l-.09.08-1 1a.71.71 0 00-.24.56.86.86 0 00.24.56l1.75 1.83a.47.47 0 01.08.56.54.54 0 01-.48.32h-6a.78.78 0 00-.79.71v1.52a.84.84 0 00.79.72h6.06a.62.62 0 01.48.32.71.71 0 01-.08.55l-1.75 1.84a.66.66 0 00-.08 1l.08.08 1 1a.68.68 0 001 .08.3.3 0 00.08-.08L47 44.2a1 1 0 00-.11-1.2z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M36.92 40a2.51 2.51 0 01-.23-1.11 2.91 2.91 0 01.87-2.08l1-1a2.77 2.77 0 013.91-.16c.08 0 .08.08.16.16l3.74 3.9v-6.43a2.09 2.09 0 00-2-2.16H7a2.09 2.09 0 00-2.08 2.09v8.52A2.13 2.13 0 007 43.88h24.58v-1.2A2.89 2.89 0 0134.45 40zm-18.25-2.58a3.47 3.47 0 110-.08zm10.36 0A3.54 3.54 0 0125.6 41a3.6 3.6 0 01-3.66-3.43 3.55 3.55 0 013.42-3.67A3.62 3.62 0 0129 37.34z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_serialized_product_transaction";
freezeTemplate(tmpl);
