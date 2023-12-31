import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./contract_payment.css";

import _implicitScopedStylesheets from "./contract_payment.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M64.35 32.13L52.58 20.36a1.12 1.12 0 00-.89-.36 1.23 1.23 0 00-1.25 1.25v9.45A3.59 3.59 0 0054 34.27h9.45A1.22 1.22 0 0064.71 33a1.13 1.13 0 00-.36-.87z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M62.93 39.62H50.45a5.36 5.36 0 01-5.35-5.35V21.78A1.79 1.79 0 0043.31 20H25.48a5.36 5.36 0 00-5.35 5.35v42.81a5.36 5.36 0 005.35 5.35h13.74V59.69a7.05 7.05 0 017-7h18.49V41.4a1.78 1.78 0 00-1.78-1.78zm-22.35-7.69l-3.23 3.14c-.09.09-.09.18-.09.36l.72 4.4a.35.35 0 01-.54.36l-3.95-2.07a.26.26 0 00-.35 0l-3.95 2.07a.35.35 0 01-.54-.36l.72-4.4a.54.54 0 00-.09-.36l-3.23-3.14c-.09-.18.09-.54.36-.63l4.39-.62c.09 0 .27-.09.27-.18l2-4a.41.41 0 01.71 0l2 4c.09.09.18.18.27.18l4.39.62c.23.09.41.45.14.63z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M76.43 56.22H46.25a3.46 3.46 0 00-3.46 3.47v16.84A3.46 3.46 0 0046.25 80h30.18a3.47 3.47 0 003.44-3.47V59.69a3.47 3.47 0 00-3.44-3.47zM50.31 76.53a4 4 0 00-3.93-4.15h-.12v-8.62a4 4 0 004.16-3.93v-.15h21.92a4 4 0 004 4.09h.11v8.66a4.07 4.07 0 00-4.16 4v.14z",
    "fill-rule": "evenodd"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "cx": "61.33",
    "cy": "67.81",
    "r": "5.82"
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
      "viewBox": "0 0 100 100",
      "part": "icon"
    },
    key: 0,
    svg: true
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2), api_element("path", stc3), api_element("circle", stc4)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_contract_payment";
freezeTemplate(tmpl);
