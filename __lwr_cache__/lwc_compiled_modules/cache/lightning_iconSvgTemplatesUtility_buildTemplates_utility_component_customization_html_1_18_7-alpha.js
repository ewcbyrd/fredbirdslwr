import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./component_customization.css";

import _implicitScopedStylesheets from "./component_customization.scoped.css?scoped=true";

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
    "d": "M50 5.4C50 2 47.2 2 47.2 2H4.9c-.5.1-2.9.3-2.9 3v14.2c.1.6.6 2.8 3 2.8h42.2c3.1 0 2.8-2.7 2.8-2.7V5.4zM49.1 35.3c-.6-.1-1.2-.1-1.8-.2-.1 0-.2-.1-.2-.2-.2-.7-.6-1.4-.8-1.9v-.3c.3-.5.8-1 1.1-1.5.2-.3.2-.7-.1-1l-2-2c-.1-.1-.3-.2-.5-.2-.1 0-.3.1-.5.2-.5.3-1 .8-1.5 1.1-.1 0-.1.1-.1.1h-.1c-.7-.2-1.2-.6-1.9-.8-.1 0-.2-.1-.2-.2-.1-.6-.1-1.1-.2-1.7 0-.3-.1-.6-.5-.8-.1-.1-.2-.1-.2-.1h-2.9c-.2 0-.3 0-.5.1-.2.2-.5.5-.5.8 0 .6-.1 1.1-.2 1.7 0 .1-.1.2-.2.2-.7.2-1.2.6-1.9.8h-.1c-.1 0-.1 0-.2-.1-.5-.3-.9-.8-1.5-1.1-.1-.1-.2-.2-.5-.2s-.3.1-.6.2l-2 2c-.3.3-.3.7-.1 1 .3.5.8.9 1.1 1.5.1.1.1.2 0 .3-.2.7-.6 1.2-.8 1.9 0 .1-.1.2-.2.2-.6.1-1.1.1-1.7.2-.3 0-.7.2-.8.6v3.4c.2.3.5.5.8.6.6 0 1.1.1 1.7.2.1 0 .2.1.2.2.2.7.6 1.2.8 1.9 0 .1.1.2 0 .3-.3.5-.8 1-1.1 1.5-.2.3-.2.7.1 1l2 2c.2.2.3.2.6.2.1 0 .3-.1.5-.2.5-.3.9-.8 1.5-1.1.1 0 .1-.1.2-.1h.1c.7.2 1.2.6 1.9.8.1 0 .2.1.2.2.1.6.1 1.2.2 1.8 0 .5.3.7.8.7h2.9c.5 0 .7-.2.8-.7.1-.6.1-1.2.2-1.8 0-.1.1-.2.2-.2.7-.2 1.4-.6 1.9-.8h.1s.1 0 .1.1c.5.3 1 .8 1.5 1.1.1.1.3.2.5.2s.3-.1.6-.2l2-2c.3-.3.3-.7.1-1-.3-.5-.8-.9-1.1-1.5-.1-.1-.1-.2 0-.3.2-.7.6-1.2.8-1.9 0-.1.1-.2.2-.2.6-.1 1.2-.1 1.8-.2.5 0 .7-.3.7-.8v-2.8c0-.7-.2-.9-.7-1zM38 42.1c-2.6 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5c-.1 2.4-2.1 4.5-4.5 4.5zM23.4 27.8c-.1-1.6-1.5-1.8-1.9-1.8H3.8c-.5 0-1.8.2-1.8 2v20.6c.1.5.4 1.4 2 1.4h17.5c2 0 2-2.3 2-2.3v-2.4c0-1 .2-2.1-.4-3.1-.1-.2-.2-.3-.3-.5s-.2-.3-.3-.5c-.6-.9-.5-2-.5-3.1 0-1 0-2.1.5-3 .2-.4.5-.8.7-1.2.4-.6.4-1.4.4-2.1l-.2-4z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_component_customization";
freezeTemplate(tmpl);