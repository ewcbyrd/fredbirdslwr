import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom63.css";

import _implicitScopedStylesheets from "./custom63.scoped.css?scoped=true";

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
    "d": "M42 60h16c1.1 0 2-.9 2-2V42c0-1.1-.9-2-2-2H42c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M77 53c1.7 0 3-1.3 3-3s-1.3-3-3-3h-5v-6h5c1.7 0 3-1.3 3-3s-1.3-3-3-3h-5v-1c0-3.3-2.7-6-6-6h-1v-5c0-1.7-1.3-3-3-3s-3 1.3-3 3v5h-6v-5c0-1.7-1.3-3-3-3s-3 1.3-3 3v5h-6v-5c0-1.7-1.3-3-3-3s-3 1.3-3 3v5h-1c-3.3 0-6 2.7-6 6v1h-5c-1.7 0-3 1.3-3 3s1.3 3 3 3h5v6h-5c-1.7 0-3 1.3-3 3s1.3 3 3 3h5v6h-5c-1.7 0-3 1.3-3 3s1.3 3 3 3h5v1c0 3.3 2.7 6 6 6h1v5c0 1.7 1.3 3 3 3s3-1.3 3-3v-5h6v5c0 1.7 1.3 3 3 3s3-1.3 3-3v-5h6v5c0 1.7 1.3 3 3 3s3-1.3 3-3v-5h1c3.3 0 6-2.7 6-6v-1h5c1.7 0 3-1.3 3-3s-1.3-3-3-3h-5v-6h5zM66 63c0 1.7-1.3 3-3 3H37c-1.7 0-3-1.3-3-3V37c0-1.7 1.3-3 3-3h26c1.7 0 3 1.3 3 3v26z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustomRtl_custom63";
freezeTemplate(tmpl);
