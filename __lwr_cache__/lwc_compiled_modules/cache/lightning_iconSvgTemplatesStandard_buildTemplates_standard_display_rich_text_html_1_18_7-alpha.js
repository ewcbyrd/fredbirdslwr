import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./display_rich_text.css";

import _implicitScopedStylesheets from "./display_rich_text.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M22 71.8h56c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2H22c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2zM22 53.8h56c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2H22c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2zM57.6 35.8H78c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2H57.6c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2zM47.6 44.4L38.1 21c-.2-.4-.6-.7-1.1-.7h-7.2c-.4 0-.9.3-1 .7L20 44.4c-.1.4.1 1 .7 1h4.6c.4 0 .9-.4 1-.8l1.8-5h11.1l2 5c.1.4.6.8 1 .8h4.6c.6 0 .9-.5.8-1zM30.2 33.6l2.9-7.4h.6l3.2 7.4h-6.7z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_display_rich_text";
freezeTemplate(tmpl);
