import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom47.css";

import _implicitScopedStylesheets from "./new_custom47.scoped.css?scoped=true";

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
    "d": "M36.6 43.6H8.9c-2.7 0-4.9 2.2-4.9 4.8v.1c0 .8.7 1.5 1.5 1.5h34.4c.8 0 1.5-.7 1.5-1.5v-.1c.1-2.6-2.1-4.8-4.8-4.8zM47.5 18.3l-13-11.8 2.1-3.1c.3-.5.1-1.1-.5-1.2-4-.8-6.4 1.9-6.4 1.9-25.1 0-21 27.1-19.8 33.4.2.7.8 1.3 1.6 1.3h22.1c.7 0 1.1-.8.7-1.3-4.5-5.4-6.8-11.4-8.3-15.2-.2-.6.4-1.4 1.1-1 5.9 3 8.4-.2 12.4 2.2 2 1.2 4.4.9 6-.7l2.2-2.2c.4-.6.4-1.6-.2-2.3zm-16.6-2.7c-1.4 0-2.4-1-2.4-2.4s1.1-2.4 2.4-2.4 2.4 1 2.4 2.4-1 2.4-2.4 2.4z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesAction_new_custom47";
freezeTemplate(tmpl);
