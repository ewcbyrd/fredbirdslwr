import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./store.css";

import _implicitScopedStylesheets from "./store.scoped.css?scoped=true";

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
    "d": "M43.1 29.5h-.2c-1.6-.2-2.9-.6-4.1-1.5-.1-.1-.1-.1-.2-.1-.6-.5-1.1-.2-1.4-.1l-.1.1c-1.5 1.1-3.2 1.7-5.2 1.7-2.1 0-3.8-.6-5.4-1.8-.6-.4-1 0-1 0-1.6 1.3-3.4 1.9-5.5 1.9-2 0-3.8-.6-5.3-1.8-.1-.1-.2-.1-.2-.2-.5-.4-1 0-1 0-1.5 1.2-3.2 1.8-5.1 1.9 0 0-.6 0-.6.7v14.9c0 .3.2 1 1.1 1.2h18.5c1-.2 1.1-.9 1.1-1.2v-2.9-7.7c.1-.3.2-.6 1-.6h8.9c.3.1.6.3.6 1v10c0 1.1.8 1.3 1 1.3h2.8c.2 0 1-.2 1-1.3V30.6c.1-.8-.3-1-.7-1.1zM23.2 41v.3c0 .4-.2 1-1.2 1h-8.1c-.9 0-1.1-.4-1.2-.8v-.4-5.7c0-1.4.8-1.5 1.1-1.5h8.5c.3 0 1 .2 1 1.3-.1 2-.1 3.9-.1 5.8zM42.3 25.5c2.2.6 4.1.2 5.7-1.4 1-1 1.7-2.2 1.9-3.5v-.2c-.2-.5-.4-1-.6-1.4-2.4-4.3-4.7-8.6-7-12.9-.3-.6-1-.6-1.2-.6H10.6s-.9 0-1.2.6C7 10.4 4.7 14.8 2.4 19c-.2.4-.4 1-.4 1.6v.2c.2 1.4.8 2.6 1.8 3.5 1.8 1.6 3.8 2 6.2 1.2 1.3-.5 2.2-1.3 3-2.5l.3-.3c.5-.3 1.1-.2 1.5.3.4.6.9 1.2 1.5 1.6 1.7 1.3 3.6 1.5 5.6.9 1.3-.4 2.3-1.3 3-2.5.4-.6 1.4-.7 1.8 0 .2.2.3.5.5.7 1 1.2 2.3 1.9 3.8 2.1 1.4.2 2.8-.2 4.1-1 .7-.5 1.3-1.1 1.7-1.8.5-.6 1.4-.6 1.8 0 .8 1.3 1.8 2.1 3.3 2.5h.4z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_store";
freezeTemplate(tmpl);
