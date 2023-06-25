import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./table_settings.css";

import _implicitScopedStylesheets from "./table_settings.scoped.css?scoped=true";

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
    "d": "M21.5 20h9c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5h-9c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5zM46.5 14h-9c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h9c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5zM5.5 10h41c.8 0 1.5-.7 1.5-1.5v-5c0-.8-.7-1.5-1.5-1.5h-41C4.7 2 4 2.7 4 3.5v5c0 .8.7 1.5 1.5 1.5zM48 27.4v-1.9c0-.8-.7-1.5-1.5-1.5h-2.7c1.3.7 2.5 1.6 3.5 2.7.3.2.5.5.7.7zM20 25.5v3c0 .8.7 1.5 1.5 1.5h.7c.7-1.2 1.5-2.3 2.5-3.3 1.1-1.1 2.3-2 3.5-2.7h-6.7c-.8 0-1.5.7-1.5 1.5zM24.7 49.3c-1.5-1.5-2.7-3.3-3.5-5.2-.7.1-1.2.8-1.2 1.5v3c0 .8.7 1.5 1.5 1.5h4c-.3-.3-.5-.6-.8-.8zM14.5 14h-9c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h9c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5zM14.5 24h-9c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h9c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5zM14.5 44h-9c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h9c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5zM14.5 34h-9c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h9c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "d": "M36.1 35c-1.7 0-3 1.3-3 3s1.3 3 3 3c1.6 0 2.9-1.4 3-3-.1-1.7-1.4-3-3-3z"
  },
  key: 5,
  svg: true
};
const stc5 = {
  attrs: {
    "d": "M44.5 29.5c-4.7-4.7-12.3-4.7-17 0-4.7 4.7-4.7 12.3 0 17 4.7 4.7 12.3 4.7 17 0 4.7-4.7 4.7-12.3 0-17zm-.6 9.5c0 .3-.1.5-.5.5-.4.1-.8.1-1.2.1-.1 0-.1.1-.1.1-.1.5-.4.8-.5 1.3-.1.1-.1.1 0 .2.2.4.5.7.7 1 .1.2.1.5-.1.7l-1.3 1.3c-.2.1-.3.1-.4.1s-.3-.1-.3-.1c-.3-.2-.7-.5-1-.7 0-.1-.1-.1-.1-.1H39c-.3.1-.8.4-1.3.5-.1 0-.1.1-.1.1-.1.4-.1.8-.1 1.2-.1.3-.5.5-.5.5h-1.9c-.3 0-.5-.1-.5-.5-.1-.4-.1-.8-.1-1.2 0-.1-.1-.1-.1-.1-.5-.1-.8-.4-1.3-.5H33c-.1 0-.1.1-.1.1-.4.2-.7.5-1 .7-.1.1-.3.1-.3.1-.2 0-.3 0-.4-.1l-1.3-1.3c-.2-.2-.2-.5-.1-.7.2-.3.5-.7.7-1 .1-.1 0-.1 0-.2-.1-.5-.4-.8-.5-1.3 0-.1-.1-.1-.1-.1-.4-.1-.7-.1-1.1-.1-.2-.1-.4-.2-.5-.4v-2.2c.1-.3.3-.4.5-.4.4-.1.7-.1 1.1-.1.1 0 .1-.1.1-.1.1-.5.4-.8.5-1.3.1-.1.1-.1 0-.2-.2-.4-.5-.7-.7-1-.1-.2-.1-.5.1-.7l1.3-1.3c.2-.1.2-.1.4-.1s.3.1.3.1c.4.2.7.5 1 .7l.1.1c.5-.1.8-.4 1.3-.5.1 0 .1-.1.1-.1.1-.4.1-.7.1-1.1 0-.2.2-.4.3-.5.1-.1.2-.1.3-.1H37s.1 0 .1.1c.3.1.3.3.3.5.1.4.1.7.1 1.1 0 .1.1.1.1.1.5.1.8.4 1.3.5h.1s0-.1.1-.1c.3-.2.7-.5 1-.7.1-.1.3-.1.3-.1.1 0 .3.1.3.1l1.3 1.3c.2.2.2.5.1.7-.2.3-.5.7-.7 1v.2c.1.3.4.8.5 1.3 0 .1.1.1.1.1.4.1.8.1 1.2.1.3.1.5.2.5.7V39z"
  },
  key: 6,
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
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("path", stc2), api_element("g", stc3, [api_element("path", stc4), api_element("path", stc5)])])])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_table_settings";
freezeTemplate(tmpl);
