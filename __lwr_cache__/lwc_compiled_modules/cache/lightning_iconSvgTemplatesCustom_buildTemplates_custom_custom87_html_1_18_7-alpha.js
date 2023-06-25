import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom87.css";

import _implicitScopedStylesheets from "./custom87.scoped.css?scoped=true";

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
    "d": "M75 20H25c-1.7 0-3 1.3-3 3v48c0 1.7 1.3 3 3 3h1v3c0 1.7 1.3 3 3 3h2c1.7 0 3-1.3 3-3v-3h32v3c0 1.7 1.3 3 3 3h2c1.7 0 3-1.3 3-3v-3h1c1.7 0 3-1.3 3-3V23c0-1.7-1.3-3-3-3zM31 68c-1.7 0-3-1.3-3-3V29c0-1.7 1.3-3 3-3h38c1.7 0 3 1.3 3 3v36c0 1.7-1.3 3-3 3H31z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M64 32H36c-1.1 0-2 .9-2 2v26c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2V34c0-1.1-.9-2-2-2zm-4.7 18H51c-1.1 2-3.4 4-6.2 4-3.8 0-6.8-3.2-6.8-7s3-7 6.8-7c2.8 0 5.2 2 6.2 4h8.2c1.5 0 2.7 1.5 2.7 3s-1.1 3-2.6 3z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustom_custom87";
freezeTemplate(tmpl);
