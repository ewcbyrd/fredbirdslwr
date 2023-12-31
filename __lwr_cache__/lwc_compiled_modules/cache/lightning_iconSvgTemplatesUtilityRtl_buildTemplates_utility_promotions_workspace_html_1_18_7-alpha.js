import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./promotions_workspace.css";

import _implicitScopedStylesheets from "./promotions_workspace.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M15.1 2a1.68 1.68 0 011.71 1.63v1.22a1.68 1.68 0 01-1.63 1.71H10a3.4 3.4 0 00-3.44 3.25V42a3.4 3.4 0 003.25 3.41H42a3.4 3.4 0 003.41-3.25V36.9a1.68 1.68 0 011.63-1.71h1.22A1.67 1.67 0 0150 36.82v6.35A6.82 6.82 0 0143.18 50H8.83A6.82 6.82 0 012 43.18V8.83A6.83 6.83 0 018.82 2h6.28z",
    "fill-rule": "evenodd"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M38.11 21a2.23 2.23 0 102.25 2.23A2.22 2.22 0 0038.14 21zM27.49 12.76A2.23 2.23 0 1029.72 15a2.22 2.22 0 00-2.23-2.23z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M49.1 16.87l-1.87-2.24a3.94 3.94 0 01-.93-2.31l-.22-2.86a3.66 3.66 0 00-3.35-3.41l-2.49-.2a5.3 5.3 0 01-3-1.28l-1.89-1.66a3.68 3.68 0 00-4.79-.05L28.5 4.6a4.72 4.72 0 01-2.7 1.1l-2.67.18a3.69 3.69 0 00-3.42 3.36l-.19 2.44a5.28 5.28 0 01-1.29 3l-1.63 1.91a3.67 3.67 0 000 4.78l1.77 2.14a4.42 4.42 0 011 2.54l.2 2.75a3.68 3.68 0 003.35 3.42l2.5.22a5.17 5.17 0 013 1.27l1.9 1.64a3.7 3.7 0 004.79 0l2.18-1.82a4.08 4.08 0 012.43-1l2.85-.21A3.68 3.68 0 0046 29l.2-2.31a5.93 5.93 0 011.43-3.32l1.52-1.73a3.66 3.66 0 00-.05-4.77zM23.38 15a4.15 4.15 0 114.15 4.14A4.13 4.13 0 0123.36 15zm6 12.22a.39.39 0 01-.25.17h-1.24a.33.33 0 01-.26-.16.29.29 0 010-.31L36.28 11a.4.4 0 01.26-.16h1.29a.31.31 0 01.15.42zm12.94-4a4.15 4.15 0 11-4.17-4.12 4.13 4.13 0 014.12 4.15z"
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
      "viewBox": "0 0 52 52",
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_promotions_workspace";
freezeTemplate(tmpl);
