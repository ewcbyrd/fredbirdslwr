import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom_notification.css";

import _implicitScopedStylesheets from "./custom_notification.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M53.77 21.87L50 40.11a1 1 0 001.12 1.12h19.52a2 2 0 011.62 2.87L51 79a1.85 1.85 0 01-3.5-.87l3.75-21.48c0-.75-.62-.5-1.37-.5H29.42c-1.37 0-2.37-2-1.62-3.25L50.28 21a1.86 1.86 0 013.49.87z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_custom_notification";
freezeTemplate(tmpl);
