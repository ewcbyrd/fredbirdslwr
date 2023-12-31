import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./medication_ingredient.css";

import _implicitScopedStylesheets from "./medication_ingredient.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M61.12 21.67H33.89A1.36 1.36 0 0032.53 23v3.74A1.37 1.37 0 0033.89 28h27.2a1.37 1.37 0 001.36-1.29V23a1.36 1.36 0 00-1.33-1.33z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M68.11 56.27a11.14 11.14 0 1011.13 11.15 11.1 11.1 0 00-11.09-11.15zm0 5.61a1.4 1.4 0 11-1.4 1.4 1.37 1.37 0 011.35-1.39zm2.32 9.75A.43.43 0 0170 72h-3.75a.42.42 0 01-.46-.38v-.92a.5.5 0 01.46-.51.43.43 0 00.46-.4v-1.88a.5.5 0 00-.46-.51.42.42 0 01-.46-.38v-1a.5.5 0 01.46-.51H69a.5.5 0 01.47.51v3.71a.42.42 0 00.44.42.5.5 0 01.47.51z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M54 67.4a14.15 14.15 0 0110.76-13.71v-13a9.27 9.27 0 00-9.17-9.35h-16a9.27 9.27 0 00-9.36 9.16v2.6h17a1.5 1.5 0 011.5 1.5v17.09a1.5 1.5 0 01-1.5 1.5h-17v7.48a1.44 1.44 0 001.5 1.33h23a13.84 13.84 0 01-.73-4.6z"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "x": "30.28",
    "y": "47.61",
    "width": "13.37",
    "height": "3.09",
    "rx": "1"
  },
  key: 5,
  svg: true
};
const stc5 = {
  attrs: {
    "x": "30.28",
    "y": "55.28",
    "width": "9.37",
    "height": "3.09",
    "rx": "1"
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
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2), api_element("path", stc3), api_element("rect", stc4), api_element("rect", stc5)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_medication_ingredient";
freezeTemplate(tmpl);
