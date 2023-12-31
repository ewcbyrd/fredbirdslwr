import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./data_model.css";

import _implicitScopedStylesheets from "./data_model.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M72.7 65.8a6.6 6.6 0 00-3.2.8l-8.8-6.5a11.36 11.36 0 001.2-5.2A11.91 11.91 0 0053 43.4v-10a7 7 0 004-6.2 6.9 6.9 0 10-13.8 0 6.73 6.73 0 004 6.2v10a11.91 11.91 0 00-8.9 11.5 11.36 11.36 0 001.2 5.2l-8.8 6.5a7.22 7.22 0 00-3.2-.8 6.9 6.9 0 106.9 6.9c0-.5-.1-.9-.1-1.3l9.2-6.8a11.61 11.61 0 0013.6 0l9.2 6.8a5.7 5.7 0 00-.1 1.3 6.9 6.9 0 0013.8 0 7.41 7.41 0 00-7.3-6.9zm-21.3-5.1a6.75 6.75 0 01-1.4.2 6.1 6.1 0 01-5.7-4.4 7.72 7.72 0 01-.2-1.5 5.81 5.81 0 013-5.1 6 6 0 016 0 5.81 5.81 0 013 5.1 7.72 7.72 0 01-.2 1.5 6.54 6.54 0 01-4.5 4.2z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_data_model";
freezeTemplate(tmpl);
