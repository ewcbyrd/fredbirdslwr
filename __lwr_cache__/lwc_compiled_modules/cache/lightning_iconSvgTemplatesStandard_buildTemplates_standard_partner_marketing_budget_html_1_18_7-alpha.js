import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./partner_marketing_budget.css";

import _implicitScopedStylesheets from "./partner_marketing_budget.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M73.8 37.8c-18.2 5.6-32.5-11.6-52.5-3.5-1.5.6-2.3 2-2.3 3.7v20.7c0 2.7 2.3 4.5 4.8 3.7 19.7-6 34.1 11.2 52.6 3.5 1.4-.6 2.5-1.9 2.5-3.7V41.5c.1-2.5-2.6-4.5-5.1-3.7zM49.6 57.2c-4.3 0-7.7-3.5-7.7-7.7s3.5-7.7 7.7-7.7 7.7 3.5 7.7 7.7-3.5 7.7-7.7 7.7z"
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
      "viewBox": "0 0 100 100",
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_partner_marketing_budget";
freezeTemplate(tmpl);
