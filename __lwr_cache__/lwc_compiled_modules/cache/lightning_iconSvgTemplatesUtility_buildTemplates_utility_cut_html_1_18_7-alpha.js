import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./cut.css";

import _implicitScopedStylesheets from "./cut.scoped.css?scoped=true";

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
    "d": "M40.7 31.4c-1.7-.4-3.3-.2-4.7.3L13.9 2.4c-.3-.4-1-.5-1.4-.2l-.8.6c-1.7 1.3-2 3.8-.7 5.6l10.6 14c.4.5.4 1.3 0 1.8l-5.7 7.5c-1.4-.5-3.1-.6-4.7-.3-3.7.8-6.6 3.8-7.1 7.5-.8 5.9 4.4 11 10.5 10 3.6-.6 6.5-3.4 7.3-6.9.5-2.5 0-4.8-1.2-6.5l4.2-5.6c.6-.8 1.8-.8 2.4 0l4.2 5.6c-1.2 1.9-1.7 4.2-1.2 6.5.7 3.6 3.7 6.3 7.3 6.9 6.1 1 11.3-4.1 10.5-10-.9-3.8-3.8-6.8-7.4-7.5zM12.9 43.1c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm26 0c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3c-.1 1.7-1.4 3-3 3zM31.3 18.9c.4.5 1.2.5 1.6 0l8-10.5c1.1-1.5 1-3.5-.1-4.9l.1-.1-.1.1c-.2-.3-1.5-1.3-1.5-1.3-.4-.3-1.1-.2-1.4.2l-8.8 11.7c-.4.5-.4 1.3 0 1.8l2.2 3z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_cut";
freezeTemplate(tmpl);
