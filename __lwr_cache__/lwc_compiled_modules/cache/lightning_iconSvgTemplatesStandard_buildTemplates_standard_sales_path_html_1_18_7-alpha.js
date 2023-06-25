import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./sales_path.css";

import _implicitScopedStylesheets from "./sales_path.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M15.2 68.2L29.4 51c.4-.7.4-1.5 0-2.1l-14.2-17c-.1-.2-.2-.4-.2-.6 0-.6.5-1 1-1h20.7c.6 0 1.1.2 1.4.7L53 49c.4.6.4 1.4 0 2.1l-14.8 18c-.3.4-.9.7-1.4.7H16.1c-.6 0-1-.4-1-1-.1-.2 0-.5.1-.6z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M46.8 68.2L60.9 51c.4-.7.4-1.5 0-2.1l-14.2-17c-.1-.2-.2-.4-.2-.6 0-.6.5-1 1-1h20.7c.6 0 1.1.2 1.4.7l14.9 18c.4.6.4 1.4 0 2.1l-14.8 18c-.3.4-.9.7-1.4.7H47.6c-.6 0-1-.4-1-1 0-.2.1-.5.2-.6z"
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
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_sales_path";
freezeTemplate(tmpl);
