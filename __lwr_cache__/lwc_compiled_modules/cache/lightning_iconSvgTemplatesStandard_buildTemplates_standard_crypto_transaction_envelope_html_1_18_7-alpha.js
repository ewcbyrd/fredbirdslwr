import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./crypto_transaction_envelope.css";

import _implicitScopedStylesheets from "./crypto_transaction_envelope.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M53.32 20.89a6.64 6.64 0 016.65 0l14.46 8.35A6.64 6.64 0 0177.75 35v16.7a6.66 6.66 0 01-3.32 5.76l-14.46 8.35a6.64 6.64 0 01-6.65 0l-14.46-8.35a6.64 6.64 0 01-3.32-5.76V35a6.66 6.66 0 013.32-5.76l14.46-8.35zm.33 22.96l-5.5 5.65c-.14.1-.31.15-.48.15s-.34-.05-.48-.15l-5.5-5.65c-.41-.34-.07-.95.61-.95h3.34c-.02-1.44.24-2.87.79-4.21.54-1.33 1.35-2.55 2.37-3.56 1.02-1.02 2.24-1.82 3.57-2.35 1.34-.54 2.77-.8 4.21-.77v4.08c-3.44 0-6.81 3.41-6.81 6.81H53c.71 0 1.06.54.64.95zm17.33-.04h-3.37c0 1.45-.28 2.88-.84 4.21a11.02 11.02 0 01-2.4 3.56 10.944 10.944 0 01-3.6 2.35c-1.34.54-2.78.8-4.22.77v-4.08c4.11 0 6.97-2.72 6.97-6.81h-3.33c-.71 0-1.03-.54-.61-.95l5.5-5.65c.14-.1.31-.15.48-.15s.34.05.48.15l5.57 5.65c.41.34.07.95-.62.95z",
    "fill-rule": "evenodd"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M25.56 42.54l4.22-2.43v14.92a6.66 6.66 0 003.32 5.76l20.22 11.68c1.03.59 2.18.89 3.32.89l-9.97 5.76a6.64 6.64 0 01-6.65 0l-14.46-8.35a6.64 6.64 0 01-3.32-5.76v-16.7a6.66 6.66 0 013.32-5.76z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_crypto_transaction_envelope";
freezeTemplate(tmpl);
