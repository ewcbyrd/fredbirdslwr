import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./video.css";

import _implicitScopedStylesheets from "./video.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M46.9 13.1l-11 7.9v-5.6c0-1.5-1.2-2.7-2.7-2.7H4.7c-1.5 0-2.7 1.2-2.7 2.7v21.3c0 1.5 1.2 2.7 2.7 2.7h28.6c1.5 0 2.7-1.2 2.7-2.7v-5.5L46.9 39c.7.7 1.9.2 1.9-.8V13.9c0-1-1.2-1.5-1.9-.8z"
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
      "viewBox": "0 0 52 52",
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_video";
freezeTemplate(tmpl);
