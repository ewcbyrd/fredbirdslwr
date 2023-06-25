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
    "d": "M84.7 68.8c0 .6-.4 1-1 1H63c-.5 0-1.1-.3-1.4-.7l-14.8-18c-.4-.7-.4-1.5 0-2.1l14.9-18c.3-.5.8-.7 1.4-.7h20.7c.5 0 1 .4 1 1 0 .2-.1.4-.2.6l-14.2 17c-.4.6-.4 1.4 0 2.1l14.2 17.2c.1.1.2.4.1.6zm-31.5 0c0 .6-.4 1-1 1H31.5c-.5 0-1.1-.3-1.4-.7l-14.8-18c-.4-.7-.4-1.5 0-2.1l14.9-18c.3-.5.8-.7 1.4-.7h20.7c.5 0 1 .4 1 1 0 .2-.1.4-.2.6l-14.2 17c-.4.6-.4 1.4 0 2.1L53 68.2c.1.1.2.4.2.6z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_sales_path";
freezeTemplate(tmpl);
