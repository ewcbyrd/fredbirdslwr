import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./question_best.css";

import _implicitScopedStylesheets from "./question_best.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "fill-rule": "evenodd"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M100 100V62l-38 38zm-3.9-14.4L93 88.8c-.1.1-.1.2-.1.3l.7 4.5c.1.3-.3.6-.5.4l-3.8-2.1c-.1-.1-.2-.1-.3 0L85 94c-.3.1-.6-.1-.5-.4l.7-4.5c0-.1 0-.3-.1-.3L82 85.6c-.2-.3-.1-.6.2-.7l4.3-.7c.1 0 .2-.1.3-.2l1.9-4.1c.1-.3.5-.3.7 0l1.9 4.1c.1.1.2.2.3.2l4.3.7c.3 0 .4.4.2.7z",
    "fill-opacity": ".65"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M49.9 22c-16.6 0-30 12.5-30 28 0 5 1.4 9.6 3.8 13.7.3.5.4 1.1.2 1.6l-2.8 8.9c-.5 1.6 1 3 2.6 2.5l8.8-3.1c.6-.2 1.2-.1 1.7.2 4.6 2.7 10 4.2 15.8 4.2 16.6 0 30-12.5 30-28-.1-15.5-13.4-28-30.1-28zm3 45c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2zm.9-12.7c-.4.1-.8.5-.8 1v1.6c0 1.1-.9 2.1-2 2.1h-2c-1.1 0-2-1-2-2.1v-1.6c0-3 2-5.7 4.9-6.7 1.1-.4 2.1-.9 2.7-1.8 3.4-4.5 0-9.7-4.5-9.8-1.6-.1-3.2.6-4.4 1.7-.8.8-1.4 1.8-1.6 2.8-.2.9-1 1.6-1.9 1.6h-2.1c-1.2 0-2.2-1.2-2-2.4.5-2.4 1.6-4.6 3.4-6.3 2.3-2.3 5.4-3.5 8.7-3.4 6.3.2 11.5 5.4 11.7 11.7.2 5.2-3 9.9-8.1 11.6z"
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
      "viewBox": "0 0 100 100",
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_question_best";
freezeTemplate(tmpl);
