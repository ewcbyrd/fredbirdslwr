import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./form.css";

import _implicitScopedStylesheets from "./form.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "fill": "none",
    "height": "6",
    "rx": "2",
    "width": "34",
    "x": "33",
    "y": "50"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "fill": "none",
    "height": "6",
    "rx": "2",
    "width": "30",
    "x": "33",
    "y": "62"
  },
  key: 3,
  svg: true
};
const stc3 = {
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "d": "M63 36h10.6a1.37 1.37 0 001.4-1.4 1.28 1.28 0 00-.4-1L61.4 20.4a1.28 1.28 0 00-1-.4 1.37 1.37 0 00-1.4 1.4V32a4 4 0 004 4z"
  },
  key: 5,
  svg: true
};
const stc5 = {
  attrs: {
    "d": "M73 42H59a6 6 0 01-6-6V22a2 2 0 00-2-2H31a6 6 0 00-6 6v48a6 6 0 006 6h38a6 6 0 006-6V44a2 2 0 00-2-2zm-40-2a2 2 0 012-2h8.18a2 2 0 012 2v2a2 2 0 01-2 2H35a1.94 1.94 0 01-2-2zm30 26a2 2 0 01-2 2H35a2 2 0 01-2-2v-2a2 2 0 012-2h26a2 2 0 012 2zm4-12a2 2 0 01-2 2H35a2 2 0 01-2-2v-2a2 2 0 012-2h30a2 2 0 012 2z"
  },
  key: 6,
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
  }, [api_element("g", stc0, [api_element("rect", stc1), api_element("rect", stc2), api_element("g", stc3, [api_element("path", stc4), api_element("path", stc5)])])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_form";
freezeTemplate(tmpl);
