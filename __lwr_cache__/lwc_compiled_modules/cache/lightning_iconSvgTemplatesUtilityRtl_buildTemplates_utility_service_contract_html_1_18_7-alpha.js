import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./service_contract.css";

import _implicitScopedStylesheets from "./service_contract.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M39.21 11.44l-9.12-9.11a.878.878 0 00-.69-.28c-.55 0-.97.41-.97.97v7.32c0 1.52 1.24 2.76 2.76 2.76h7.32c.55 0 .97-.41.97-.97 0-.28-.07-.48-.28-.69zm.28 7.18c0-.76-.62-1.38-1.38-1.38h-9.67c-2.28 0-4.14-1.86-4.14-4.14V3.43c0-.76-.62-1.38-1.38-1.38H9.09c-2.28 0-4.14 1.86-4.14 4.14v33.15c0 2.28 1.86 4.14 4.14 4.14h14.02c1.11 0 1.38-.76 1.31-1.93s-.48-6.22 2.97-10.22 9.12-4.28 9.95-4.28 2.21-.07 2.14-1.24 0-7.18 0-7.18zm-29.7-7.87l3.38-.48c.07 0 .21-.07.21-.14l1.52-3.11c.14-.21.41-.21.55 0l1.52 3.11c.07.07.14.14.21.14l3.38.48c.21.07.35.35.14.48l-2.49 2.42c-.07.07-.07.14-.07.28l.55 3.38c.07.21-.21.41-.41.28L15.24 16a.213.213 0 00-.28 0l-3.04 1.59c-.21.14-.48-.07-.41-.28l.55-3.38c0-.07 0-.21-.07-.28L9.5 11.23c-.07-.14.07-.41.28-.48zm12.43 23.07c0 .76-.62 1.38-1.38 1.38h-8.98c-.76 0-1.38-.62-1.38-1.38v-1.38c0-.76.62-1.38 1.38-1.38h8.98c.76 0 1.38.62 1.38 1.38v1.38zm7.6-8.29c0 .76-.62 1.38-1.38 1.38H11.86c-.76 0-1.38-.62-1.38-1.38v-1.38c0-.76.62-1.38 1.38-1.38h16.57c.76 0 1.38.62 1.38 1.38v1.38z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M37.27 30.3c-5.46 0-9.88 4.42-9.88 9.88s4.42 9.88 9.88 9.88 9.88-4.42 9.88-9.88-4.49-9.88-9.88-9.88zM39 41.07c-.28 0-.55-.07-.83-.14l-3.8 3.73c-.28.28-.55.35-.83.35-.35 0-.55-.07-.83-.35-.41-.41-.41-1.17 0-1.66l3.8-3.8a2.45 2.45 0 01-.14-.76c-.14-1.73 1.24-3.32 2.97-3.32.28 0 .55.07.83.14.14 0 .14.14.07.28l-1.66 1.73c-.14.07-.14.35 0 .41l1.17 1.17c.14.14.35.14.48 0l1.66-1.66c.07-.07.28-.07.28.07.07.28.14.55.14.83-.07 1.73-1.52 3.11-3.32 2.97z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_service_contract";
freezeTemplate(tmpl);
