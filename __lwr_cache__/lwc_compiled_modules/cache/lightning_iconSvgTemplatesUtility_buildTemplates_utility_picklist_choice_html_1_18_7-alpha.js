import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./picklist_choice.css";

import _implicitScopedStylesheets from "./picklist_choice.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M6.9 33.7H3.7c-.9 0-1.6.7-1.6 1.6v3.2c0 .9.7 1.6 1.6 1.6H7c.9-.1 1.5-.8 1.4-1.6v-3.2c.1-.9-.6-1.6-1.5-1.6zM16.5 11.8h31.6c.9 0 1.6-.7 1.6-1.6V7c0-.9-.7-1.6-1.6-1.6H16.5c-.9 0-1.6.7-1.6 1.6v3.2c0 .9.7 1.6 1.6 1.6zM16.5 26h31.6c.9 0 1.6-.7 1.6-1.6v-3.2c0-.9-.7-1.6-1.6-1.6H16.5c-.9 0-1.6.7-1.6 1.6v3.2c0 .8.7 1.6 1.6 1.6zM6.9 5.4H3.7c-.9 0-1.6.7-1.6 1.6v3.2c0 .9.7 1.6 1.6 1.6H7c.9-.1 1.5-.8 1.4-1.6V6.9c.1-.8-.6-1.5-1.5-1.5zM6.9 19.5H3.7c-.9 0-1.6.7-1.6 1.6v3.2c0 .9.7 1.6 1.6 1.6H7c.9-.1 1.5-.8 1.4-1.6v-3.2c.1-.8-.6-1.6-1.5-1.6zM20.9 39.7c0-1.8.6-3.6 1.7-5v-.5-.6h-6.1c-.9 0-1.6.7-1.6 1.6v3.2c0 .9.7 1.6 1.6 1.6h4.4v-.3zM35.2 31.4c.8-.8 1.9-1.3 3.2-1.3 1.7 0 3.1.9 3.9 2.2.6-.2 1.4-.5 2.2-.5 2.9 0 5.4 2.5 5.4 5.3 0 2.9-2.5 5.3-5.4 5.3-.3 0-.7 0-1-.1-.6 1.2-2 2-3.4 2-.6 0-1.2-.2-1.7-.4-.7 1.6-2.3 2.7-4.1 2.7-2 0-3.6-1.2-4.2-2.9-.2 0-.6.1-.9.1-2.3 0-4.2-1.8-4.2-4.1 0-1.5.8-2.9 2.1-3.6-.2-.6-.4-1.2-.4-1.9 0-2.6 2.2-4.8 4.8-4.8 1.4.1 2.9.8 3.7 2z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_picklist_choice";
freezeTemplate(tmpl);
