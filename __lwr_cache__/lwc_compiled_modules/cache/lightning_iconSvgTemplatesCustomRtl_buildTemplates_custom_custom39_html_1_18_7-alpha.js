import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom39.css";

import _implicitScopedStylesheets from "./custom39.scoped.css?scoped=true";

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
    "d": "M63.6 28.6c-.199-.8-1.1-1.3-1.899-1.1l-40.3 13c-1 .3-1.5 1.4-1.3 2.4l1.6 6.2c.3 1 1.3 1.7 2.3 1.5L34.2 49.2c.3 1.1.8 2.2 1.5 3.1L27 75.9c-.6 1.6.2 3.3 1.8 3.899.3.101.7.2 1 .2 1.2 0 2.4-.8 2.8-2l8.2-22.4c.7.2 1.3.2 2 .2s1.4-.1 2-.2L53.1 78c.4 1.2 1.601 2 2.801 2 .3 0 .699-.1 1-.2 1.6-.6 2.399-2.3 1.8-3.899L50 52.2c1.1-1.5 1.8-3.4 1.8-5.4v-.1l14.101-2c.899-.1 1.5-1 1.199-1.9l-3.5-14.2zM79.9 42.7l-5.5-20.4c-.4-1.6-2.101-2.6-3.7-2.2-1.601.4-2.601 2.1-2.2 3.7L74 44.2c.4 1.6 2.1 2.6 3.7 2.2 1.6-.4 2.6-2.1 2.2-3.7z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustomRtl_custom39";
freezeTemplate(tmpl);
