import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./folder.css";

import _implicitScopedStylesheets from "./folder.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M51.48 15.46A4.52 4.52 0 0156 20v31a4.52 4.52 0 01-4.52 4.52h-47A4.52 4.52 0 010 51V13a4.52 4.52 0 014.52-4.48H16c3.82 0 4.23 1.14 6.74 4.45 2.07 2.74 7.11 2.49 10.39 2.49z",
    "fill": "#032D60"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M51.48 18.12H9.24a4.52 4.52 0 00-4.52 4.52v2.84L9.19 19h42.35L56 25.49v-2.85a4.52 4.52 0 00-4.52-4.52z",
    "fill": "#90D0FE"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M4.57 55.48h46.91A4.52 4.52 0 0056 51V23.48A4.52 4.52 0 0051.48 19H9.25a4.52 4.52 0 00-4.52 4.52V51a4.65 4.65 0 01-.06.72 2.33 2.33 0 01-4.6 0 4.5 4.5 0 004.5 3.76z",
    "fill": "#1AB9FF"
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
      "viewBox": "0 0 56 64",
      "part": "icon"
    },
    key: 0,
    svg: true
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2), api_element("path", stc3)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesDoctypeRtl_folder";
freezeTemplate(tmpl);
