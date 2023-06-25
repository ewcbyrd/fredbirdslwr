import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./product_item.css";

import _implicitScopedStylesheets from "./product_item.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "x": "19",
    "y": "18.92",
    "width": "60",
    "height": "16",
    "rx": "4",
    "ry": "4"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "x": "19",
    "y": "40.92",
    "width": "27",
    "height": "16",
    "rx": "4",
    "ry": "4"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "x": "19",
    "y": "62.92",
    "width": "27",
    "height": "16",
    "rx": "4",
    "ry": "4"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "x": "52",
    "y": "40.92",
    "width": "27",
    "height": "16",
    "rx": "4",
    "ry": "4"
  },
  key: 5,
  svg: true
};
const stc5 = {
  attrs: {
    "x": "52",
    "y": "62.92",
    "width": "27",
    "height": "16",
    "rx": "4",
    "ry": "4"
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
  }, [api_element("g", stc0, [api_element("rect", stc1), api_element("rect", stc2), api_element("rect", stc3), api_element("rect", stc4), api_element("rect", stc5)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_product_item";
freezeTemplate(tmpl);
