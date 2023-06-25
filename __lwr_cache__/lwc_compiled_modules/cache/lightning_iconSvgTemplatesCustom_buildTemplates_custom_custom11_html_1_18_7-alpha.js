import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom11.css";

import _implicitScopedStylesheets from "./custom11.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M52.2 21.4l8 16.9L77.9 41c2 .3 2.8 2.9 1.3 4.3L66.4 58.5l3 18.5c.3 2.1-1.7 3.7-3.5 2.7L50 70.9l-15.9 8.8c-1.8 1-3.9-.601-3.5-2.7l3-18.5-12.9-13.2c-1.4-1.5-.6-4 1.3-4.3l17.8-2.7 8-16.9c.9-1.9 3.5-1.9 4.4 0z"
  },
  key: 2,
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
  }, [api_element("g", stc0, [api_element("path", stc1)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustom_custom11";
freezeTemplate(tmpl);
