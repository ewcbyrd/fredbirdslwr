import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./recurring_exception.css";

import _implicitScopedStylesheets from "./recurring_exception.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M39 35L27.8 23.9l-.8-.8-9.9-9.9-4.4-4.4L7.9 4c-.7-.8-1.8-.9-2.4-.3L3.4 5.8c-.5.5-.5 1.3-.1 2l40.5 40.6.1.1c.7.7 1.8.8 2.4.3l2.1-2.1c.6-.6.5-1.7-.3-2.4l-4.7-4.7L39 35zM24.9 11c4 0 7.8 1.6 10.6 4.4.5.4.9.9 1.2 1.4.3.8-.4 1.2-1.3 1.2h-7.3l6 6h12.6c.7 0 1.3-.6 1.3-1.3V4.5c-.2-.8-.9-1.5-1.7-1.5h-3c-.8 0-1.5.7-1.5 1.5v7c0 .9-.5 1.3-1.2.7-.3-.4-.6-.7-1-1-5-5-12-7.1-19.2-5.7-1.3.3-2.5.6-3.7 1.2l4.8 4.8c1-.4 2.2-.5 3.4-.5zM26.9 41.4c-4 0-7.8-1.6-10.6-4.4-.5-.4-.9-.9-1.2-1.4-.3-.8.4-1.2 1.3-1.2h7c.1 0 .2 0 .4-.1l-5.9-5.9H5.2c-.7 0-1.3.6-1.3 1.3v18.2c.1.8.8 1.5 1.6 1.5h3c.8 0 1.5-.7 1.5-1.5v-7c0-.9.5-1.3 1.2-.7.3.4.6.7 1 1 5 5 12 7.1 19.2 5.7 1.3-.3 2.5-.6 3.7-1.2l-4.8-4.8c-1.1.3-2.2.5-3.4.5z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_recurring_exception";
freezeTemplate(tmpl);
