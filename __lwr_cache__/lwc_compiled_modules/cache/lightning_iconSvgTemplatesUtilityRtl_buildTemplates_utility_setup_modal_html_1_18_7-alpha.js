import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./setup_modal.css";

import _implicitScopedStylesheets from "./setup_modal.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M48.5 2h-45C2.7 2 2 2.7 2 3.5v32.4c0 .8.7 1.5 1.5 1.5h45c.8 0 1.5-.7 1.5-1.5V3.5c0-.8-.7-1.5-1.5-1.5z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M32 44c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0-2c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "cx": "20",
    "cy": "46",
    "r": "4"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "cx": "8",
    "cy": "46",
    "r": "4"
  },
  key: 5,
  svg: true
};
const stc5 = {
  attrs: {
    "cx": "44",
    "cy": "46",
    "r": "4"
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
      "viewBox": "0 0 52 52",
      "part": "icon"
    },
    key: 0,
    svg: true
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2), api_element("circle", stc3), api_element("circle", stc4), api_element("circle", stc5)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_setup_modal";
freezeTemplate(tmpl);
