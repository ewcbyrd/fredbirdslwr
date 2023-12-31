import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./lightning_extension.css";

import _implicitScopedStylesheets from "./lightning_extension.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M47.6 37.6c-.5-.1-1.1-.1-1.6-.2-.1 0-.2-.1-.2-.2-.2-.6-.5-1.2-.7-1.7v-.3c.3-.4.7-.9 1-1.3.2-.3.2-.6-.1-.9l-1.8-1.8c-.1-.1-.3-.2-.4-.2s-.3.1-.4.2c-.4.3-.9.7-1.3 1-.1 0-.1.1-.1.1h-.1c-.6-.2-1.1-.5-1.7-.7-.1 0-.2-.1-.2-.2-.1-.5-.1-1-.2-1.5 0-.3-.1-.5-.4-.7-.1-.1-.2-.1-.2-.1h-2.6c-.2 0-.3 0-.4.1-.2.2-.4.4-.4.7 0 .5-.1 1-.2 1.5 0 .1-.1.2-.2.2-.6.2-1.1.5-1.7.7h-.1c-.1 0-.1 0-.2-.1-.4-.3-.8-.7-1.3-1-.1-.1-.2-.2-.4-.2s-.3.1-.5.2L29.4 33c-.3.3-.3.6-.1.9.3.4.7.8 1 1.3.1.1.1.2 0 .3-.2.6-.5 1.1-.7 1.7 0 .1-.1.2-.2.2-.5.1-1 .1-1.5.2-.3 0-.6.2-.7.5v3c.2.3.4.4.7.5.5 0 1 .1 1.5.2.1 0 .2.1.2.2.2.6.5 1.1.7 1.7 0 .1.1.2 0 .3-.3.4-.7.9-1 1.3-.2.3-.2.6.1.9l1.8 1.8c.2.2.3.2.5.2.1 0 .3-.1.4-.2.4-.3.8-.7 1.3-1 .1 0 .1-.1.2-.1h.1c.6.2 1.1.5 1.7.7.1 0 .2.1.2.2.1.5.1 1.1.2 1.6 0 .4.3.6.7.6H39c.4 0 .6-.2.7-.6.1-.5.1-1.1.2-1.6 0-.1.1-.2.2-.2.6-.2 1.2-.5 1.7-.7h.1s.1 0 .1.1c.4.3.9.7 1.3 1 .1.1.3.2.4.2.2 0 .3-.1.5-.2l1.8-1.8c.3-.3.3-.6.1-.9-.3-.4-.7-.8-1-1.3-.1-.1-.1-.2 0-.3.2-.6.5-1.1.7-1.7 0-.1.1-.2.2-.2.5-.1 1.1-.1 1.6-.2.4 0 .6-.3.6-.7v-2.5c0-.5-.2-.7-.6-.8zm-9.8 6s-.1 0 0 0c-2.3 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4c-.1 2.2-1.9 4-4 4zM38.7 20.7c-.2-.8-.8-1.3-1.6-1.3h-9.6c-1.2 0-.6-1-.6-1 .2-.4.4-.7.5-1.1 2.2-4.3 4.3-8.6 6.5-12.9.8-1.2 0-2.4-1.4-2.4H14.6c-.9 0-1.3.3-1.7 1.1-3 7.6-6 15.1-8.9 22.7 0 .2-.1.4-.1.5-.1 1 .6 1.7 1.7 1.7h9.7c.7.1 2.1.4 1.4 2.2-1.2 3.1-2.4 6.1-3.6 9.2-1.2 2.8-2.3 5.6-3.4 8.4-.4 1 0 1.9 1 2.2.7.2 1.2-.1 1.7-.6 4-4.2 8-8.4 12-12.7.5-.5.9-1 1.4-1.5.6-.6.5-1.6.5-1.6 0-1 .3-1.9 1.1-2.7l1.8-1.8c.7-.7 1.6-1.1 2.6-1.1.7 0 1.1-.3 1.3-.4l.1-.1c1.7-1.8 3.5-3.7 5.2-5.5.3-.3.5-.8.3-1.3z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_lightning_extension";
freezeTemplate(tmpl);
