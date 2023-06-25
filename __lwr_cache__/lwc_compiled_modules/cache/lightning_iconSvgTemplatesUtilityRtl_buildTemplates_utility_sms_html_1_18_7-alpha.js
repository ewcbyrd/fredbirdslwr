import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./sms.css";

import _implicitScopedStylesheets from "./sms.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M26 4C12.7 4 2.1 13.8 2.1 25.9c0 3.8 1.1 7.4 2.9 10.6.3.5.4 1.1.2 1.7l-3.1 8.5c-.3.8.5 1.5 1.3 1.3l8.6-3.3c.5-.2 1.1-.1 1.7.2 3.6 2 7.9 3.2 12.5 3.2C39.3 48 50 38.2 50 26.1 49.9 13.8 39.2 4 26 4zm-9.6 25.6c-.3.5-.6 1-1 1.3s-.9.6-1.5.8c-.5.2-1.1.2-1.7.2-.8 0-1.5-.1-2.2-.4-.7-.3-1.4-.7-1.9-1.3l-.2-.2c-.1-.1 0-.3.2-.5L9.7 28c.2-.2.4-.2.5-.1s.2.3.2.3c.2.3.5.5.8.7.5.3 1 .3 1.6.2.2 0 .3-.1.5-.2l.3-.3c.1-.1.1-.3.1-.4 0-.4-.1-.5-.2-.6-.2-.2-.5-.4-.9-.5s-.8-.3-1.3-.4c-.5-.2-1-.4-1.4-.6-.5-.3-.8-.7-1.1-1.1-.3-.5-.5-1.1-.5-1.9 0-.7.1-1.3.4-1.8.3-.5.6-.9 1.1-1.2.4-.3.9-.6 1.5-.7 1.2-.3 2.4-.3 3.6.1.6.2 1.2.6 1.5.8l.3.2c.2.1.1.4-.1.6l-1.5 1.5c-.2.2-.5.2-.7 0-.2-.1-.3-.3-.4-.3-.5-.3-1.2-.4-1.8-.3-.2 0-.3.1-.4.2l-.3.3c-.1.1-.1.2-.1.4 0 .3.1.4.2.5.2.2.5.3.9.5.4.1.8.3 1.3.4.5.2 1 .4 1.4.6.5.3.8.7 1.1 1.1.3.5.5 1.1.5 1.9 0 .6-.1 1.2-.4 1.7zM33 31c0 .6-.5 1-1.1 1h-1c-.6 0-.9-.4-.9-1v-5.9c0-.6-.8-.7-1-.2l-1.7 4.5c-.1.4-.5.6-.9.6h-.7c-.4 0-.8-.3-.9-.6L23 24.9c-.2-.5-1-.4-1 .2V31c0 .6-.5 1-1.1 1h-1c-.6 0-.9-.4-.9-1V20c0-.6.4-1 .9-1h2.6c.4 0 .8.3.9.6l2 5.2c.2.4.8.4.9 0l2-5.2c.1-.4.5-.6.9-.6h2.7c.6 0 1.1.4 1.1 1v11zm10.5-1.3c-.3.5-.6 1-1.1 1.3-.4.3-.9.6-1.5.8s-1.1.2-1.7.2c-.8 0-1.5-.1-2.2-.4-.7-.3-1.4-.7-1.9-1.3l-.2-.2c-.1-.1 0-.3.2-.5l1.6-1.5c.2-.2.4-.2.5-.1s.2.3.2.3c.2.3.5.5.8.7.5.3 1.1.3 1.6.2.2-.1.4-.1.5-.2l.3-.3c.1-.1.1-.3.1-.4 0-.4-.1-.5-.2-.6-.2-.2-.5-.4-.9-.5s-.8-.3-1.3-.4c-.5-.2-1-.4-1.4-.6-.5-.3-.9-.7-1.2-1.1-.3-.5-.5-1.1-.5-1.9 0-.7.1-1.3.4-1.8.3-.5.6-.9 1.1-1.2.4-.3 1-.6 1.5-.7 1.2-.3 2.4-.3 3.6.1.6.2 1.2.6 1.5.9l.3.3c.2.1.1.4-.1.6L42 22.9c-.2.2-.5.2-.7 0-.2-.1-.3-.3-.4-.3-.5-.3-1.2-.4-1.8-.3-.2 0-.3.1-.4.2l-.3.3c-.1.1-.1.3-.1.4 0 .3.1.4.2.5.2.2.5.3.9.5.4.1.8.3 1.3.4.5.2 1 .4 1.4.6.5.3.8.7 1.2 1.1.3.5.5 1.1.5 1.9.1.3 0 1-.3 1.5z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_sms";
freezeTemplate(tmpl);
