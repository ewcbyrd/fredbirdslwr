import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./education.css";

import _implicitScopedStylesheets from "./education.scoped.css?scoped=true";

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
    "d": "M25.8 26.7c-1.2.1-2.3-.4-3.5-.8-6.3-2.1-12.7-4.2-19-6.3-.4-.2-.7-.3-1-.6-.4-.3-.4-.7 0-1 .3-.2.7-.5 1.1-.6 6.8-2 13.5-4 20.3-6.1 1.5-.5 3.1-.5 4.7 0l20.1 6c.4.2.8.3 1.2.6.5.3.5.8 0 1.1-.3.2-.6.4-1 .5-6.7 2.2-13.4 4.5-20.2 6.7-.9.4-1.7.5-2.7.5zM12.5 27c-1-.2-1.2.4-1.2.9v7.6c0 .9.3 1.4.9 2 .2.2.5.4.7.6 1.6 1.1 3.5 1.8 5.4 2.3 3.8 1 7.6 1.2 11.5.7 2.5-.3 5-1 7.3-2 1-.5 2-1 2.7-1.8.5-.5.7-1 .6-1.7.1-2.4.1-4.9.1-7.4 0-1.4-1-1.2-1.4-1.1-3.5 1.2-7.2 2.3-10.7 3.5-1.8.6-3.5.6-5.2 0L12.5 27zM45.9 24.7c-.3.1-.4.2-.4.6v6.8c0 .2-.1.5-.2.7-.5 1.2-1 2.4-1.4 3.6-.4 1.1-.2 2.3.6 3.1.2.3.6.6.9.8.3.3.8.4 1.2.5.7.1 1.3-.3 1.8-.7.2-.2.5-.4.7-.7.6-.8.7-1.8.5-2.7-.3-1.4-.9-2.6-1.5-3.8-.2-.2-.2-.6-.2-.8v-7.4c0-.5-.4-.4-.6-.3l-1.4.3z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_education";
freezeTemplate(tmpl);
