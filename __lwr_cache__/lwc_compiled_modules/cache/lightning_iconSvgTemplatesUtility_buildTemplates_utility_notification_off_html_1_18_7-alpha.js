import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./notification_off.css";

import _implicitScopedStylesheets from "./notification_off.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M47.78 6.65c.61-.61.61-1.6 0-2.21L45.8 2.46c-.61-.61-1.6-.61-2.21 0l-5.98 5.98a15.43 15.43 0 00-11.62-4.5c-8.25.38-14.59 7.49-14.59 15.84v10.65c0 1.82-1.54 3.26-3.36 3.26h-.48c-2.11 0-3.84 1.82-3.84 3.93v1.44c0 .67.67 1.34 1.44 1.34h.48l-2.97 2.97c-.61.61-.61 1.6 0 2.21l1.98 1.98c.61.61 1.6.61 2.21 0l34.11-34.1 6.81-6.82zM45.47 33.69h.48c2.11 0 3.84 1.73 3.84 3.84v1.44c0 .77-.67 1.44-1.44 1.44h-28.2l21.94-21.94c0 .27.02.55.02.83v11.04c0 1.82 1.54 3.36 3.36 3.36zM31.46 44.24h-9.41c-.58 0-1.06.58-.96 1.15.48 2.69 2.88 4.61 5.66 4.61s5.18-2.02 5.66-4.61c.1-.58-.38-1.15-.96-1.15z"
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
      "viewBox": "0 0 52 52",
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_notification_off";
freezeTemplate(tmpl);
