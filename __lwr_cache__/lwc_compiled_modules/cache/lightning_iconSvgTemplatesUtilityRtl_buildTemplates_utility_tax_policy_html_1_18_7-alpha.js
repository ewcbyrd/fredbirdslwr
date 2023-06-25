import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./tax_policy.css";

import _implicitScopedStylesheets from "./tax_policy.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M43.26 30.45c0 .7-.45 1.28-.88 1.83-.29.38-.58.76-.71 1.14-.16.42-.23.91-.3 1.39-.11.74-.2 1.45-.65 1.9s-1.17.55-1.9.65c-.48.07-.97.14-1.39.3-.36.15-.72.42-1.08.69-.61.45-1.23.9-1.9.9-.62 0-1.21-.44-1.78-.86-.41-.3-.79-.6-1.19-.73-.42-.16-.91-.23-1.39-.3-.74-.11-1.45-.2-1.9-.65s-.55-1.17-.65-1.9c-.07-.48-.14-.97-.3-1.39-.15-.36-.42-.72-.69-1.08-.45-.61-.9-1.23-.9-1.9 0-.62.44-1.21.86-1.78.3-.41.6-.79.73-1.19.16-.42.23-.91.3-1.39.11-.74.2-1.45.65-1.9s1.17-.55 1.9-.65c.48-.07.97-.14 1.39-.3.36-.15.72-.42 1.08-.69.61-.45 1.23-.9 1.9-.9.62 0 1.21.44 1.78.86.41.3.79.6 1.19.73.42.16.91.23 1.39.3.74.11 1.45.2 1.9.65s.55 1.17.65 1.9c.07.48.14.97.3 1.39.14.46.46.89.78 1.31.41.54.81 1.07.81 1.67zm-12.32 0c0-1.8 1.49-3.29 3.29-3.29s3.29 1.49 3.29 3.29-1.49 3.29-3.29 3.29-3.29-1.49-3.29-3.29zm10.72 9.03c-.7.39-1.4.55-2.01.69-.22.05-.44.1-.64.15-.21.11-.53.11-.75.11-.11.11-.32.21-.53.32-.17.11-.37.25-.57.4-.41.31-.88.66-1.44.87l5.52 7.75 1.38-3.72h3.72l-4.67-6.59v.02zm-8.93 2.44l-5.52 7.85-1.38-3.72h-3.72l4.77-6.48c.7.39 1.4.55 2.01.69.22.05.44.1.64.15.21.11.53.11.64.11.11.11.32.21.53.32a7.1 7.1 0 002.01 1.07zm1.49-17.62c3.51 0 6.16 2.76 6.16 6.16s-2.65 6.16-6.16 6.16-6.16-2.65-6.16-6.16 2.76-6.16 6.16-6.16zM21.38 2.2l12.81 7.06c.31.2.52.57.52.93v.93c0 .57-.46 1.04-1.04 1.04H6.7c-.57 0-1.04-.46-1.04-1.04v-.99c0-.37.2-.68.52-.88L19 2.19c.37-.26.77-.42 1.19-.42s.83.15 1.19.42zm-3.79 5.3c0 1.45 1.14 2.6 2.6 2.6s2.6-1.14 2.6-2.6-1.14-2.6-2.6-2.6-2.6 1.14-2.6 2.6z",
    "fill-rule": "evenodd"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M31.08 16.31v5.9c-.43.13-.89.19-1.35.25-.64.09-1.26.17-1.76.42v-6.57c0-.57.46-1.04 1.04-1.04h1.04c.57 0 1.04.46 1.04 1.04zm-6.23 11.42h1.2c-.17.3-.4.6-.63.9-.51.69-1.04 1.38-1.04 2.13s.49 1.46 1 2.15H6.7c-.57 0-1.04-.46-1.04-1.04v-1.04c0-1.71 1.4-3.11 3.11-3.11h.52V16.3c0-.57.46-1.04 1.04-1.04h1.04c.57 0 1.04.46 1.04 1.04v11.42h3.11V16.3c0-.57.46-1.04 1.04-1.04h1.04c.57 0 1.04.46 1.04 1.04v11.42h3.11V16.3c0-.57.46-1.04 1.04-1.04h1.04c.57 0 1.04.46 1.04 1.04v11.42h.02z",
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_tax_policy";
freezeTemplate(tmpl);
