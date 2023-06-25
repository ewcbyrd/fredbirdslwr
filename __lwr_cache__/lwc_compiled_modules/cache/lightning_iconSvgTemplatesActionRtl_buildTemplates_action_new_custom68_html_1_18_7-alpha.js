import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom68.css";

import _implicitScopedStylesheets from "./new_custom68.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M26 2C12.8 2 2 12.8 2 26s10.8 24 24 24 24-10.8 24-24S39.2 2 26 2zm19 21.6h-6.3c-.2-5.7-1.5-10.6-3.4-14.4 5.3 3 8.9 8.2 9.7 14.4zM23.6 7.8v15.8h-5.5c.4-7.5 2.8-13.4 5.5-15.8zm0 20.6v15.8c-2.7-2.3-5.1-8.2-5.5-15.8h5.5zm4.8 15.8V28.4h5.5c-.4 7.5-2.8 13.4-5.5 15.8zm0-20.6V7.8c2.7 2.3 5.1 8.2 5.5 15.8h-5.5zM16.7 9.2c-1.9 3.8-3.1 8.7-3.4 14.4H7c.8-6.2 4.4-11.4 9.7-14.4zM7 28.4h6.3c.2 5.7 1.5 10.6 3.4 14.4-5.3-3-8.9-8.2-9.7-14.4zm28.3 14.4c1.9-3.8 3.1-8.7 3.4-14.4H45c-.8 6.2-4.4 11.4-9.7 14.4z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesActionRtl_new_custom68";
freezeTemplate(tmpl);
