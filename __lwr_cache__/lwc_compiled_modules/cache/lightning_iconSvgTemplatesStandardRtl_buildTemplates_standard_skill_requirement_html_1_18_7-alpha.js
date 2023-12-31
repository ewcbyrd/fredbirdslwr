import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./skill_requirement.css";

import _implicitScopedStylesheets from "./skill_requirement.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M50.08 57.86a6.77 6.77 0 116.63-6.77 6.71 6.71 0 01-6.63 6.77z",
    "fill-rule": "evenodd"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M80.79 46.64h-5.57V26.7a6.8 6.8 0 00-6.69-6.7H31.47a6.8 6.8 0 00-6.69 6.71v19.93h-5.57a3.36 3.36 0 000 6.71h5.57V73.3a6.8 6.8 0 006.69 6.7h37.06a6.8 6.8 0 006.69-6.71V53.36h5.57a3.36 3.36 0 000-6.71zm-14.07 12.8l-1.17 2a2.67 2.67 0 01-2.15 1.19 2.8 2.8 0 01-.88-.2l-3.22-1.29a14 14 0 01-4.68 2.79L54 67.6a2.52 2.52 0 01-2.44 2.09h-2.4a2.52 2.52 0 01-2.44-2.09l-.59-3.68a12.07 12.07 0 01-4.49-2.59l-3.41 1.29a2.8 2.8 0 01-.88.2 2.53 2.53 0 01-2.15-1.29L34 59.44a2.52 2.52 0 01.59-3.19l2.83-2.39a13.32 13.32 0 01-.29-2.69 12.39 12.39 0 01.29-2.59l-2.79-2.38A2.5 2.5 0 0134 43l1.17-2.09a2.42 2.42 0 012.15-1.29 2.8 2.8 0 01.88.2l3.41 1.29a13.88 13.88 0 014.49-2.69l.62-3.42a2.34 2.34 0 012.44-2h2.44a2.35 2.35 0 012.4 1.85l.59 3.58A13.6 13.6 0 0159.11 41l3.41-1.29a2.8 2.8 0 01.88-.2 2.53 2.53 0 012.15 1.29l1.17 2.09a2.65 2.65 0 01-.59 3.19l-2.83 2.39a12.59 12.59 0 01.29 2.69 12.39 12.39 0 01-.29 2.59l2.83 2.39a2.63 2.63 0 01.59 3.3z",
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_skill_requirement";
freezeTemplate(tmpl);
