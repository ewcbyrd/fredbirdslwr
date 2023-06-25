import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./tour_check.css";

import _implicitScopedStylesheets from "./tour_check.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M79.88 58.32a10.53 10.53 0 01-10.52 10.52H38.91a16.21 16.21 0 001.25-3.52h29.2a7 7 0 000-14H34.29a10.53 10.53 0 010-21h21.38a5.73 5.73 0 00-.67 2.62 5.52 5.52 0 00.06.81H34.29a7 7 0 100 14h35.07a10.54 10.54 0 014.14.85 10.25 10.25 0 013.79 2.79 10.45 10.45 0 012.59 6.93zM77.3 23.93a1.09 1.09 0 00-.81.36l-9 10.12a.36.36 0 01-.28.12.35.35 0 01-.25-.1l-3.91-3.84a1.09 1.09 0 00-1.54 0L60 32.17a1.11 1.11 0 000 1.55l6.08 6a1.84 1.84 0 001.28.52 1.8 1.8 0 001.34-.6l11-12.34a1.09 1.09 0 00-.06-1.54L78 24.25a1.11 1.11 0 00-.7-.32z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M28.82 53.76A8.84 8.84 0 0020 62.62c0 6.13 6.31 11.75 8.26 13.23a.93.93 0 001.16 0c1.95-1.53 8.22-7.1 8.22-13.23a8.84 8.84 0 00-8.8-8.88zm0 12.54a3.75 3.75 0 113.75-3.75 3.73 3.73 0 01-3.73 3.75z"
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
      "viewBox": "0 0 100 100",
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_tour_check";
freezeTemplate(tmpl);
