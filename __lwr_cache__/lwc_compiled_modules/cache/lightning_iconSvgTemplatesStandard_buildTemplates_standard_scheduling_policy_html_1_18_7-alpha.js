import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./scheduling_policy.css";

import _implicitScopedStylesheets from "./scheduling_policy.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M22 74a5.69 5.69 0 005.6 6s32.4.3 32.3 0l-.7-1.4a7.67 7.67 0 01-1.9-4.8 8.31 8.31 0 011.8-4.8 7.39 7.39 0 012.2-4.8 8.52 8.52 0 014.5-2h.1a7.67 7.67 0 014.8-1.9 8.31 8.31 0 014.8 1.8 11 11 0 012.5.6V44c0-1.8-2-2.1-2-2.1H24a2 2 0 00-2 2z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M68.1 83.1l-5.2 7.4-1.3-3.5h-3.5l4.5-6.1a10.19 10.19 0 002.5.8 1.49 1.49 0 00.6.1 2.19 2.19 0 00.5.3 6.49 6.49 0 001.9 1zm8.4-2.3a10.19 10.19 0 01-2.5.8 1.7 1.7 0 01-.7.1 2.19 2.19 0 01-.5.3 10.46 10.46 0 01-1.9 1.2l5.2 7.3 1.3-3.5h3.5zm-7-11.6a3.1 3.1 0 103.1 3.1 3.12 3.12 0 00-3.1-3.1zm8.5 3.1c0 1.1-1.2 1.9-1.5 2.8s-.2 2.4-.9 3.1-2.1.5-3.1.9-1.8 1.5-2.8 1.5-1.9-1.2-2.8-1.5-2.4-.2-3.1-.9-.5-2.1-.9-3.1-1.5-1.8-1.5-2.8 1.2-1.9 1.5-2.8.2-2.4.9-3.1 2.1-.5 3.1-.9 1.8-1.5 2.8-1.5 1.9 1.2 2.8 1.5 2.4.2 3.1.9.5 2.1.9 3.1 1.5 1.8 1.5 2.8zm-2.7 0a5.8 5.8 0 00-11.6 0 5.68 5.68 0 005.8 5.8 5.74 5.74 0 005.8-5.8zM72 26h-5v-2a4 4 0 00-8 0v2H41v-2a4 4 0 00-8 0v2h-5a6 6 0 00-6 6v2a2 2 0 002 2h52a2 2 0 002-2v-2a6 6 0 00-6-6zM48 70.2c0 1.4-.7 2.6-1.7 2.6H29c-.9 0-1.8-1.2-1.8-2.6v-2.6c0-1.4.8-2.6 1.8-2.6h17.2c.9 0 1.8 1.2 1.8 2.6zM56.9 54.4c0 1.4-.8 2.6-1.9 2.6H29.2c-1.1 0-2-1.2-2-2.6v-2.6c0-1.4.9-2.6 2-2.6H55c1.1 0 2 1.2 2 2.6v2.6z"
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
      "viewBox": "0 0 100 100",
      "part": "icon"
    },
    key: 0,
    svg: true
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_scheduling_policy";
freezeTemplate(tmpl);
