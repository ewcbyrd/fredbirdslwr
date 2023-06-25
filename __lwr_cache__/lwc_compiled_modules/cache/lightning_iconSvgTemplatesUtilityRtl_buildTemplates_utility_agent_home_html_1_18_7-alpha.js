import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./agent_home.css";

import _implicitScopedStylesheets from "./agent_home.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M26.71 2.32l23 23a1.15 1.15 0 01.29 1.11c-.08.4-.64.64-1 .64h-5V49a.92.92 0 01-1 1H9a1 1 0 01-1-.88V27H3a.77.77 0 01-.87-.64.87.87 0 01.23-1.11l23-23a1 1 0 011.35.07zM18.29 38h-4.24a.88.88 0 00-.88.88v5.43a.88.88 0 00.88.88h4.24a.89.89 0 00.88-.88v-5.43a.89.89 0 00-.88-.88zm9.59-7.2h-4.24a.9.9 0 00-.88.88v12.63a.89.89 0 00.88.88h4.24a.89.89 0 00.88-.88V31.68a.9.9 0 00-.88-.88zm9.59-7.19h-4.23a.87.87 0 00-.88.88v19.82a.87.87 0 00.88.88h4.23a.87.87 0 00.88-.88V24.49a.87.87 0 00-.88-.88z",
    "fill-rule": "evenodd"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_agent_home";
freezeTemplate(tmpl);
