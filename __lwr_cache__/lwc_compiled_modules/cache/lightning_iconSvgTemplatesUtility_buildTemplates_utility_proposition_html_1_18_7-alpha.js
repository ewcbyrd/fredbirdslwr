import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./proposition.css";

import _implicitScopedStylesheets from "./proposition.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M6.64 34.49h-3.6c-.56 0-1.04.48-1.04 1.04v12.88c0 .56.48 1.04 1.04 1.04H4.8c1.6 0 2.88-1.28 2.88-2.88V35.61c.08-.64-.48-1.12-1.04-1.12zM49.92 41.53c-.56-1.28-1.6-2.64-3.12-2.8-.8-.08-1.6.24-2.32.48-2.88 1.04-5.76 2-8.64 3.04-1.84.64-3.76 1.28-5.76 1.44-1.36.08-2.72 0-4.08 0-.72 0-1.36-.56-1.36-1.36s.56-1.36 1.36-1.36h7.28c1.36 0 2.4-1.12 2.4-2.4s-1.12-2.4-2.4-2.4h-5.6c-.24 0-1.76-.08-2.72-.48-1.04-.48-2.4-.56-2.4-.48h-9.84c-1.2 0-2.16.96-2.16 2.16v9.04c0 1.04.8 1.92 1.84 2.08h.24c1.84 0 3.68.4 5.52.72 1.84.4 3.6.64 5.52.64 2.4.08 4.88-.32 7.2-.88 2.32-.64 4.56-1.52 6.8-2.24 3.84-1.28 7.76-2.64 11.6-3.92.48-.24.88-.64.64-1.28z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M32.4 18.09v12c0 .4.4.56.72.48 2.32-1.36 9.52-5.36 9.52-5.36.96-.56 1.52-1.52 1.52-2.64v-10.8c0-.4-.4-.56-.72-.48l-10.56 5.92c-.24.24-.48.56-.48.88M31.44 14.81L42 8.89c.32-.16.32-.64 0-.8-2.32-1.36-9.6-5.44-9.6-5.44a2.96 2.96 0 00-3.04 0l-9.6 5.44c-.32.16-.32.64 0 .8l10.72 5.92c.24.16.64.16.96 0M28.96 17.29L18.4 11.37c-.32-.16-.72.08-.72.48v10.72c0 1.04.56 2.08 1.52 2.64 0 0 7.2 4.08 9.52 5.36.32.16.72-.08.72-.48v-12a.88.88 0 00-.48-.8",
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_proposition";
freezeTemplate(tmpl);
