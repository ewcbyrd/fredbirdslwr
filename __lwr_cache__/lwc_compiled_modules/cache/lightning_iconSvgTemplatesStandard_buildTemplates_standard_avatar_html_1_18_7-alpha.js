import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./avatar.css";

import _implicitScopedStylesheets from "./avatar.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M80 71.2V74c0 3.3-2.7 6-6 6H26c-3.3 0-6-2.7-6-6v-2.8c0-7.3 8.5-11.7 16.5-15.2.3-.1.5-.2.8-.4.6-.3 1.3-.3 1.9.1C42.4 57.8 46.1 59 50 59c3.9 0 7.6-1.2 10.8-3.2.6-.4 1.3-.4 1.9-.1.3.1.5.2.8.4 8 3.4 16.5 7.8 16.5 15.1z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "cx": "50",
    "cy": "36.5",
    "rx": "14.9",
    "ry": "16.5"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_avatar";
freezeTemplate(tmpl);
