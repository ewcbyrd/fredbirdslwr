import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./recall.css";

import _implicitScopedStylesheets from "./recall.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M18.2 22.6c-.5-.6-.2-1.6.5-1.8h9c6.7 0 12.1 5.7 11.5 12.6-.6 5.9-5.8 10.3-11.8 10.3H24c-.8 0-1.6.7-1.6 1.6v3.1c0 .8.7 1.6 1.6 1.6h3.6c9.7 0 17.5-7.8 17.7-17.4.2-9.9-8.2-18-18.1-18.1h-8.3s-2.7.1-1-1.8l5.9-5.8c.6-.6.6-1.6 0-2.2l-2.2-2.2c-.6-.6-1.6-.6-2.2 0l-14 14.1c-.6.6-.6 1.6 0 2.2l14.1 14.1c.6.6 1.6.6 2.2 0l2.2-2.2c.6-.6.6-1.6 0-2.2l-5.7-5.9z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesAction_recall";
freezeTemplate(tmpl);
