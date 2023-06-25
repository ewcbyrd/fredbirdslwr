import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./shift_pattern.css";

import _implicitScopedStylesheets from "./shift_pattern.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M43.6 6.8h-4V5.2a3.2 3.2 0 00-6.4 0v1.6H18.8V5.2a3.2 3.2 0 00-6.4 0v1.6h-4a4.81 4.81 0 00-4.8 4.8v1.6a1.6 1.6 0 001.6 1.6h41.6a1.6 1.6 0 001.6-1.6v-1.6a4.81 4.81 0 00-4.8-4.8zm3.2 12.8a1.6 1.6 0 011.6 1.6v24a4.81 4.81 0 01-4.8 4.8H8.4a4.81 4.81 0 01-4.8-4.8v-24a1.6 1.6 0 011.6-1.6h41.6zM36 41.46h-9.39a.93.93 0 00-.93.93V45a.93.93 0 00.93.93H36a.93.93 0 00.93-.93v-2.61a.93.93 0 00-.93-.93zm0-10.79H15.54a.93.93 0 00-.93.93v6.32a.93.93 0 00.93.93H36a.93.93 0 00.93-.93V31.6a.93.93 0 00-.93-.93zM24.93 23.6h-9.39a.93.93 0 00-.93.93v2.65a.93.93 0 00.93.93h9.39a.93.93 0 00.93-.93v-2.65a.93.93 0 00-.93-.93z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_shift_pattern";
freezeTemplate(tmpl);
