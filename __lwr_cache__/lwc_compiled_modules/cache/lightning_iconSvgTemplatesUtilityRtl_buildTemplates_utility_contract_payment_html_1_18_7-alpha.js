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
    "d": "M37.48 11.7l-9.41-9.41a.92.92 0 00-.72-.29 1 1 0 00-1 1v7.56a2.86 2.86 0 002.86 2.85h7.56a1 1 0 001-1 .92.92 0 00-.29-.71z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M36.34 17.7h-10a4.29 4.29 0 01-4.28-4.28v-10A1.43 1.43 0 0020.65 2H6.38A4.29 4.29 0 002.1 6.28v34.25a4.29 4.29 0 004.28 4.28h11V33.75A5.64 5.64 0 0123 28.12h14.77v-9a1.43 1.43 0 00-1.43-1.42zm-17.88-6.16l-2.58 2.52c-.07.07-.07.14-.07.28l.57 3.52a.28.28 0 01-.43.29l-3.16-1.65a.19.19 0 00-.28 0l-3.16 1.65a.28.28 0 01-.43-.29l.57-3.52a.42.42 0 00-.07-.28l-2.58-2.52c-.07-.14.07-.43.29-.5l3.51-.5c.07 0 .21-.07.21-.14l1.59-3.23a.33.33 0 01.57 0l1.58 3.23c.07.07.14.14.22.14l3.51.5c.21.07.36.36.14.5z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M47.14 31H23a2.77 2.77 0 00-2.77 2.77v13.46A2.77 2.77 0 0023 50h24.14a2.77 2.77 0 002.76-2.77V33.75A2.77 2.77 0 0047.14 31zM26.25 47.23a3.24 3.24 0 00-3.15-3.33H23V37a3.23 3.23 0 003.33-3.14v-.13h17.54A3.23 3.23 0 0047.05 37h.09v6.94a3.23 3.23 0 00-3.32 3.16v.1z",
    "fill-rule": "evenodd"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "cx": "35.07",
    "cy": "40.25",
    "r": "4.65"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_contract_payment";
freezeTemplate(tmpl);
