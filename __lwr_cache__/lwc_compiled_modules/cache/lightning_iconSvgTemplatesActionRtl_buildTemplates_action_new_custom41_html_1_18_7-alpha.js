import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom41.css";

import _implicitScopedStylesheets from "./new_custom41.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M45.5 11h-39C4 11 2 13 2 15.4v21.2C2 39 4 41 6.5 41h39c2.5 0 4.5-2 4.5-4.4V15.4c0-2.4-2-4.4-4.5-4.4zM11.8 36.6c0-2.9-2.3-5.1-5.2-5.1v-11c2.9 0 5.2-2.3 5.2-5.1h28.5c0 2.9 2.3 5.1 5.2 5.1v11c-2.9 0-5.2 2.3-5.2 5.1H11.8z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "cx": "26",
    "cy": "25.6",
    "rx": "7.5",
    "ry": "7.3"
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
      "viewBox": "0 0 52 52",
      "part": "icon"
    },
    key: 0,
    svg: true
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("ellipse", stc2)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesActionRtl_new_custom41";
freezeTemplate(tmpl);
