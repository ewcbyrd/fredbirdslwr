import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom88.css";

import _implicitScopedStylesheets from "./new_custom88.scoped.css?scoped=true";

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
    "d": "M48.5 42h-45c-.8 0-1.5.6-1.5 1.4v.1c0 3.6 4.5 6.5 8 6.5h32c3.5 0 8-2.9 8-6.5v-.1c0-.8-.7-1.4-1.5-1.4zM4.4 37.2h14.4c.9 0 1.6-.9 1.6-1.8V7.9c0-.4-.6-.6-.7-.2l-16 28.2c-.3.6.1 1.3.7 1.3zM26.8 37.2h20c1 0 1.7-.9 1.6-1.8-.7-5.8-1.7-23.7-22.1-33.3-.5-.2-1.1.1-1.1.7v32.6c0 .9.7 1.8 1.6 1.8z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesAction_new_custom88";
freezeTemplate(tmpl);
