import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./questions_and_answers.css";

import _implicitScopedStylesheets from "./questions_and_answers.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M50 28c0-3.9-2.5-7.3-6-8.5C43.7 9.8 35.8 2 26 2S8.3 9.8 8 19.5c-3.5 1.2-6 4.6-6 8.5 0 4.2 2.9 7.7 6.7 8.7C10.9 44.4 17.8 50 26 50s15.1-5.6 17.3-13.3c3.8-1 6.7-4.5 6.7-8.7zm-10-9l-.1-.1.4.1H40zM26 46c-7.7 0-14-6.5-14-14.4 0-2 .4-5 1.2-6.8.1-.3.3-.6.4-.9 3-1.2 5.6-3.3 7.3-6 3.5 4.4 9 7.4 15.1 7.4 2.1 0 2.7.1 2.9 0 .4 1.3.8 2.9.9 4.5-.6 2.5-4.5 4.9-10 5.2-.2-.5-.8-1-1.4-1h-5c-.8 0-1.4.8-1.4 1.6v3c0 .8.6 1.4 1.4 1.4h5c.7 0 1.2-.3 1.4-.9 3.6-.1 6.8-1.1 9.3-2.6C37.2 42 32.1 46 26 46z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_questions_and_answers";
freezeTemplate(tmpl);
