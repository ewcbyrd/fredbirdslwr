import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom46.css";

import _implicitScopedStylesheets from "./new_custom46.scoped.css?scoped=true";

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
    "d": "M34.8 15.6H17.2c-.9 0-1.6.7-1.6 1.6v17.6c0 .9.7 1.6 1.6 1.6h17.6c.9 0 1.6-.7 1.6-1.6V17.2c0-.9-.7-1.6-1.6-1.6z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M48.8 7.8c.7-.3 1.2-.8 1.2-1.6V3.6c0-.9-.7-1.6-1.6-1.6h-2.6c-.7 0-1.3.5-1.5 1.2-.5 1.6-2 2.8-3.8 2.8s-3.3-1.2-3.8-2.8C36.3 2.5 35.8 2 35 2h-3.7c-.7 0-1.3.5-1.5 1.2-.4 1.6-2 2.8-3.8 2.8-1.8 0-3.3-1.2-3.8-2.8-.3-.7-.8-1.2-1.6-1.2H17c-.7 0-1.3.5-1.5 1.2C15 4.8 13.4 6 11.6 6 9.8 6 8.3 4.8 7.8 3.2 7.5 2.5 7 2 6.2 2H3.6C2.7 2 2 2.7 2 3.6v2.6c0 .8.5 1.3 1.2 1.6 1.6.4 2.8 2 2.8 3.8s-1.2 3.3-2.8 3.8c-.7.3-1.2.8-1.2 1.6v3.7c0 .7.5 1.3 1.2 1.5 1.6.4 2.8 2 2.8 3.8s-1.2 3.3-2.8 3.8c-.7.3-1.2.8-1.2 1.6V35c0 .7.5 1.3 1.2 1.5C4.8 37 6 38.6 6 40.4c0 1.8-1.2 3.3-2.8 3.8-.7.3-1.2.8-1.2 1.6v2.6c0 .9.7 1.6 1.6 1.6h2.6c.7 0 1.3-.5 1.5-1.2.5-1.6 2-2.8 3.8-2.8 1.8 0 3.3 1.2 3.8 2.8.2.7.8 1.2 1.5 1.2h3.7c.7 0 1.3-.5 1.5-1.2.5-1.6 2-2.8 3.8-2.8s3.3 1.2 3.8 2.8c.2.7.8 1.2 1.5 1.2H35c.7 0 1.3-.5 1.5-1.2.5-1.6 2-2.8 3.8-2.8 1.8 0 3.3 1.2 3.8 2.8.2.7.8 1.2 1.5 1.2h2.6c.9 0 1.6-.7 1.6-1.6v-2.6c0-.7-.5-1.3-1.2-1.5-1.6-.5-2.8-2-2.8-3.8s1.2-3.3 2.8-3.8c.7-.2 1.2-.8 1.2-1.5v-3.7c0-.7-.5-1.3-1.2-1.5-1.6-.5-2.8-2-2.8-3.8 0-1.8 1.2-3.3 2.8-3.8.7-.2 1.2-.8 1.2-1.5V17c0-.7-.5-1.3-1.2-1.5-1.6-.5-2.8-2-2.8-3.8s1.4-3.4 3-3.9zm-7.6 28.6c0 2.6-2.2 4.8-4.8 4.8H15.6c-2.6 0-4.8-2.2-4.8-4.8V15.6c0-2.6 2.2-4.8 4.8-4.8h20.8c2.6 0 4.8 2.2 4.8 4.8v20.8z"
  },
  key: 4,
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
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("path", stc2), api_element("path", stc3)])])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesActionRtl_new_custom46";
freezeTemplate(tmpl);
