import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./outcome.css";

import _implicitScopedStylesheets from "./outcome.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M36.2 11.6l-.1-.1c-.6-.5-1.5-.5-2 .1l-2.2 2.1c-.6.6-.5 1.5 0 2l5.6 5.6c.2.2.3.4.3.7 0 .6-.4 1.1-1 1.1H15.6c-.8 0-1.5.6-1.5 1.4v3c.1.8.7 1.5 1.5 1.6h21.3c.2 0 .4.1.5.2.5.4.5 1 .2 1.5L32 36.5c-.6.6-.5 1.5 0 2l2.1 2.2c.6.6 1.5.5 2 0l13.5-13.5c.6-.6.5-1.5 0-2L36.2 11.6z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M21.1 17.2h3c.8 0 1.5-.7 1.5-1.5V6.1c0-2.2-1.8-4-4-4H6.1c-2.2 0-4 1.8-4 4v40c0 2.2 1.8 4 4 4h15.4c2.2 0 4-1.8 4-4v-9.5c0-.8-.7-1.5-1.5-1.5h-3c-.8 0-1.5.7-1.5 1.5v5.9c0 .8-.7 1.5-1.5 1.5H9.6c-.8 0-1.5-.7-1.5-1.5v-33c0-.8.7-1.5 1.5-1.5H18c.8 0 1.5.7 1.5 1.5v6.1c.1.9.7 1.6 1.6 1.6z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_outcome";
freezeTemplate(tmpl);
