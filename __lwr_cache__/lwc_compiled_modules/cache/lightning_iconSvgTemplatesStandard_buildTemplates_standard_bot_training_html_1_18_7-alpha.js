import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./bot_training.css";

import _implicitScopedStylesheets from "./bot_training.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M54.6 61c-1 .4-2 .7-3.2.8-7.3.8-13.4-4.9-13.4-12 0-1.2.2-2.4.5-3.6.2-.5.8-.6 1.1-.3l6.8 6.8c.5.5 1.3.5 1.9 0l4.8-4.8c.5-.5.5-1.3 0-1.9l-6.8-6.8c-.3-.4-.2-1 .3-1.1 1.1-.3 2.3-.5 3.5-.5 7.1 0 12.8 6.1 12 13.4-.1 1.1-.4 2.1-.8 3.2l12.6 12.6c3.9-4.6 6.2-10.5 6.2-16.8C80 34.5 66.6 22.3 50 22.3c-16.7 0-30 12.3-30 27.4 0 4.8 1.4 9.3 3.6 13.3.4.6.5 1.4.3 2.1L20 75.8c-.4 1 .6 1.9 1.6 1.6l10.9-4.1c.6-.3 1.4-.1 2.1.3 4.5 2.5 9.9 4 15.7 4 6-.1 11.6-1.8 16.3-4.6l-12-12z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_bot_training";
freezeTemplate(tmpl);
