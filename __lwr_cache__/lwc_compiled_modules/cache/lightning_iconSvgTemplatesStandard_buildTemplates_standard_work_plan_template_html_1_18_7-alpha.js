import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./work_plan_template.css";

import _implicitScopedStylesheets from "./work_plan_template.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M33.3 73.5a4.89 4.89 0 01-4.8-4.9v-34h-1.6a4.89 4.89 0 00-4.8 4.9v35.4a4.89 4.89 0 004.8 4.9h35.6a4.89 4.89 0 004.8-4.9v-1.4z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M46.5 30.2h17.8a1.58 1.58 0 001.6-1.6v-3.3a4.91 4.91 0 00-4.9-4.9H49.7a4.91 4.91 0 00-4.9 4.9v3.3a1.73 1.73 0 001.7 1.6zm26.7-5.7h-1.6a.74.74 0 00-.8.8v3.3a6.57 6.57 0 01-6.5 6.6H46.5a6.57 6.57 0 01-6.5-6.6v-3.3a.74.74 0 00-.8-.8h-1.6a4.91 4.91 0 00-4.9 4.9v35.3a4.91 4.91 0 004.9 4.9h35.6a4.91 4.91 0 004.9-4.9V29.4a4.91 4.91 0 00-4.9-4.9zM46.5 59.8a1.58 1.58 0 01-1.6 1.6h-1.6a1.58 1.58 0 01-1.6-1.6v-1.6a1.58 1.58 0 011.6-1.6h1.6a1.58 1.58 0 011.6 1.6zm0-8.2a1.58 1.58 0 01-1.6 1.6h-1.6a1.58 1.58 0 01-1.6-1.6V50a1.58 1.58 0 011.6-1.6h1.6a1.58 1.58 0 011.6 1.6zm0-8.2a1.58 1.58 0 01-1.6 1.6h-1.6a1.58 1.58 0 01-1.6-1.6v-1.6a1.58 1.58 0 011.6-1.6h1.6a1.58 1.58 0 011.6 1.6zm22.7 16.4a1.58 1.58 0 01-1.6 1.6H51.4a1.58 1.58 0 01-1.6-1.6v-1.6a1.58 1.58 0 011.6-1.6h16.2a1.58 1.58 0 011.6 1.6zm0-8.2a1.58 1.58 0 01-1.6 1.6H51.4a1.58 1.58 0 01-1.6-1.6V50a1.58 1.58 0 011.6-1.6h16.2a1.58 1.58 0 011.6 1.6zm0-8.2a1.58 1.58 0 01-1.6 1.6H51.4a1.58 1.58 0 01-1.6-1.6v-1.6a1.58 1.58 0 011.6-1.6h16.2a1.58 1.58 0 011.6 1.6z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_work_plan_template";
freezeTemplate(tmpl);
