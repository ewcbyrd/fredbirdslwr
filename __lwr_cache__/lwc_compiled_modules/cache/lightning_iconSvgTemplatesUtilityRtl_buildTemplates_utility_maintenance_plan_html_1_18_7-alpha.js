import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./maintenance_plan.css";

import _implicitScopedStylesheets from "./maintenance_plan.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M38.5 13.13h6.31c.72 0 1.36-.64 1.36-1.36 0-.32-.16-.72-.4-.96l-9.03-8.86c-.24-.24-.56-.4-.88-.4-.72 0-1.36.64-1.36 1.36v6.31c.16 2.16 1.84 3.83 3.99 3.91z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M44.09 18.72h-9.74c-3.19 0-5.75-2.56-5.83-5.75V3.39c.08-.96-.64-1.76-1.6-1.84H11.26c-3.19 0-5.75 2.56-5.83 5.75v36.5c0 3.19 2.64 5.75 5.83 5.75h28.91c3.19 0 5.75-2.56 5.83-5.75V20.72c.08-1.04-.8-2-1.92-2zm-5.51 24.6c-.64.64-1.44.96-2.4.96-.88 0-1.76-.32-2.4-.96L22.76 32.3c-.72.32-1.44.48-2.24.56-4.63.56-8.79-2.8-9.34-7.43-.16-1.2 0-2.4.32-3.51.08-.32.48-.4.8-.16l4.79 4.79c.32.4.96.4 1.28.08 0 0 .08 0 .08-.08l3.35-3.35c.4-.32.4-.96.08-1.28 0 0 0-.08-.08-.08l-4.79-4.79c-.16-.16-.16-.48 0-.72q.08-.08.16-.08c.8-.16 1.68-.32 2.48-.32 4.71 0 8.47 3.75 8.55 8.47 0 .32 0 .64-.08.96-.08.8-.32 1.52-.56 2.24l11.02 11.1a3.271 3.271 0 010 4.63z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_maintenance_plan";
freezeTemplate(tmpl);
