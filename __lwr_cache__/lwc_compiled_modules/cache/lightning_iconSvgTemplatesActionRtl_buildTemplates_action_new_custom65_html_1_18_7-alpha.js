import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom65.css";

import _implicitScopedStylesheets from "./new_custom65.scoped.css?scoped=true";

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
    "d": "M42.4 38.7H3.5c-.8 0-1.5.7-1.5 1.5v.1C2 42.9 4.1 45 6.7 45h32.6c2.6 0 4.7-2.1 4.7-4.8v-.1c-.1-.7-.8-1.4-1.6-1.4zM40.8 7H3.6c-.7 0-1.4.7-1.4 1.6-.2 2.1-.2 5.9.1 8.2 1 7.4 4.9 13.6 10.2 16.9.2.2.5.2.8.2h16.2c.3 0 .5-.1.8-.2 3-1.9 5.7-4.8 7.4-8.2.9.3 1.9.5 3 .5 5.1 0 9.3-4.3 9.3-9.5S45.9 7 40.8 7zm0 14.2c-.4 0-.8-.1-1.2-.2.8-2.5 1.2-5.2 1.2-8.1v-1.3c2.6 0 4.7 2.1 4.7 4.8s-2.2 4.8-4.7 4.8z"
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
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("path", stc2)])])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesActionRtl_new_custom65";
freezeTemplate(tmpl);
