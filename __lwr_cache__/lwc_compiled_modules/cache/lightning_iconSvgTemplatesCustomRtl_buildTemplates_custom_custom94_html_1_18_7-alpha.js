import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom94.css";

import _implicitScopedStylesheets from "./custom94.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M56 38V23c0-1.7-1.3-3-3-3h-4c-1.7 0-3 1.3-3 3s1.3 3 3 3h1v12c0 6.6-5.4 12-12 12s-12-5.4-12-12V26h1c1.7 0 3-1.3 3-3s-1.3-3-3-3h-4c-1.7 0-3 1.3-3 3v15c0 9.9 8.1 18 18 18s18-8.1 18-18z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M80 50c0-5-4-9-9-9s-9 4-9 9c0 3.9 2.5 7.2 6 8.5v2.2C68 68 62 74 54.7 74h-.3c-6.3 0-11.601-4.5-13-10.4-.2-.899-1-1.6-2-1.6h-2c-1.3 0-2.2 1.2-2 2.4C37.1 73.3 45 80 54.3 80h.3C65.3 80 74 71.3 74 60.7v-2.2c3.5-1.3 6-4.6 6-8.5zm-9 3c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"
  },
  key: 4,
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
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("path", stc2), api_element("path", stc3)])])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustomRtl_custom94";
freezeTemplate(tmpl);
