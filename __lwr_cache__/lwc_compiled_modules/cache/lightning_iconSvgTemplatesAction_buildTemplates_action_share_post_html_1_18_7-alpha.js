import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./share_post.css";

import _implicitScopedStylesheets from "./share_post.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M26 4C12.7 4 2 13.8 2 26c0 3.9 1.1 7.5 3 10.8.2.4.3.9.2 1.3L3 45c-.4 1.3.8 2.4 2.1 2l7-2.4c.5-.2 1-.1 1.4.2 3.7 2.1 8 3.3 12.6 3.3 13.3 0 24-9.8 24-22C49.8 13.8 39.1 4 26 4z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesAction_share_post";
freezeTemplate(tmpl);
