import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./news.css";

import _implicitScopedStylesheets from "./news.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M50.5 6h-41C8.7 6 8 6.7 8 7.5V38c0 1.2-1.1 2.2-2.3 2-1-.2-1.7-1.1-1.7-2.1V16c0-.6-.4-1-1-1H1.5c-.8 0-1.5.7-1.5 1.5V42c0 2.2 1.8 4 4 4h44c2.2 0 4-1.8 4-4V7.5c0-.8-.7-1.5-1.5-1.5zM28 35c0 .6-.4 1-1 1H15c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h12c.6 0 1 .4 1 1v2zm0-8c0 .6-.4 1-1 1H15c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h12c.6 0 1 .4 1 1v2zm18 8c0 .6-.4 1-1 1H33c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h12c.6 0 1 .4 1 1v2zm0-8c0 .6-.4 1-1 1H33c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h12c.6 0 1 .4 1 1v2zm0-8c0 .6-.4 1-1 1H15c-.6 0-1-.4-1-1v-6c0-.6.4-1 1-1h30c.6 0 1 .4 1 1v6z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_news";
freezeTemplate(tmpl);
