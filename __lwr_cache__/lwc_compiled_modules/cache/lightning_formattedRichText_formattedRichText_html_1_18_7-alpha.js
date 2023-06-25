import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./formattedRichText.css";

import _implicitScopedStylesheets from "./formattedRichText.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  attrs: {
    "part": "formatted-rich-text"
  },
  context: {
    lwc: {
      dom: "manual"
    }
  },
  key: 0
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {h: api_element} = $api;
  return [api_element("span", stc0)];
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
tmpl.stylesheetToken = "lightning-formattedRichText_formattedRichText";
freezeTemplate(tmpl);
