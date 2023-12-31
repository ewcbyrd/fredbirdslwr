import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom72.css";

import _implicitScopedStylesheets from "./custom72.scoped.css?scoped=true";

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
    "d": "M77 20H23c-1.7 0-3 1.3-3 3s1.3 3 3 3h24v6.2c-10.8 1.4-19 10.6-19 21.7v6.9C28 68.1 33.8 74 41.2 74h17.7C66.2 74 72 68.1 72 60.7v-6.9c0-11.1-8.2-20.3-19-21.7V26h24c1.7 0 3-1.3 3-3s-1.3-3-3-3zM64 53.8c0 .1 0 0 0 0 0 2.9-2.3 5.2-5.2 5.2H41.2c-2.9 0-5.1-2.3-5.2-5.2v.1-.1.101C36.1 46.2 42.2 40 49.8 40h.4c7.6 0 13.7 6.2 13.8 13.8z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "cx": "26",
    "cy": "76",
    "r": "4"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "cx": "74",
    "cy": "76",
    "r": "4"
  },
  key: 5,
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
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("path", stc2), api_element("circle", stc3), api_element("circle", stc4)])])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustom_custom72";
freezeTemplate(tmpl);
