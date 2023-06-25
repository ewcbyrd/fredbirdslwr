import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom45.css";

import _implicitScopedStylesheets from "./new_custom45.scoped.css?scoped=true";

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
    "d": "M13.2 20.8h25.5v10.5H13.2z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M50 19.5v-4c0-2.5-2-4.5-4.5-4.5h-39C4 11 2 13 2 15.5v4c0 .5.3 1.1.8 1.3 1.8 1.1 3 3 3 5.2s-1.2 4.1-3 5.2c-.5.2-.8.7-.8 1.2v4.1C2 39 4 41 6.5 41h39c2.5 0 4.5-2 4.5-4.5v-4c0-.5-.3-1.1-.8-1.3-1.8-1.1-3-3-3-5.2s1.2-4.1 3-5.2c.5-.3.8-.7.8-1.3zm-8.2 16.3H10.2c-.8 0-1.5-.7-1.5-1.5V17.8c0-.8.7-1.5 1.5-1.5h31.5c.8 0 1.5.7 1.5 1.5v16.5c0 .8-.6 1.5-1.4 1.5z"
  },
  key: 4,
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
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("path", stc2), api_element("path", stc3)])])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesAction_new_custom45";
freezeTemplate(tmpl);
