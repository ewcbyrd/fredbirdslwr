import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom97.css";

import _implicitScopedStylesheets from "./custom97.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M60 54.4V29.1C60 22.9 55.2 18 49.1 18h-.2C42.8 18 38 22.9 38 29.1v25.3c-3.2 3-5 7.199-5 11.6 0 8.8 7.2 16 16 16s16-7.2 16-16c0-4.5-1.8-8.6-5-11.6zM57.4 66H40.6c-.9 0-1.6-.9-1.5-1.8.4-2.4 1.7-4.5 3.6-6 .7-.601 1.2-1.5 1.2-2.4V29.1c0-2.9 2.2-5.1 4.9-5.1h.2c2.8 0 4.9 2.2 4.9 5.1v.9h-3c-1.7 0-3 1.3-3 3s1.3 3 3 3h3v4h-3c-1.7 0-3 1.3-3 3s1.3 3 3 3h3v4h-3c-1.7 0-3 1.3-3 3s1.3 3 3 3h3c.1.9.5 1.6 1.199 2.2 1.9 1.5 3.2 3.7 3.601 6 .3.9-.4 1.8-1.3 1.8z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustomRtl_custom97";
freezeTemplate(tmpl);
