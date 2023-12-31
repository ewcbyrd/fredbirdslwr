import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./opportunity.css";

import _implicitScopedStylesheets from "./opportunity.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M41.82 40H10.17c-.75 0-1.42.68-1.42 1.43v.07c0 2.48 2.03 4.5 4.5 4.5h25.5c2.48 0 4.5-2.02 4.5-4.5v-.07c0-.75-.68-1.43-1.43-1.43zM45.5 9.25c-2.48 0-4.5 2.03-4.5 4.5 0 1.35.6 2.62 1.57 3.45-1.27 2.93-4.2 4.95-7.65 4.8-3.97-.22-7.2-3.45-7.42-7.43 0-.68 0-1.28.15-1.87 1.65-.67 2.85-2.25 2.85-4.2C30.5 6.03 28.47 4 26 4s-4.5 2.03-4.5 4.5c0 1.87 1.2 3.52 2.85 4.2.15.6.15 1.2.15 1.87-.22 3.97-3.45 7.2-7.43 7.43-3.45.22-6.45-1.87-7.65-4.8.97-.82 1.58-2.1 1.58-3.45 0-2.47-2.03-4.5-4.5-4.5S2 11.28 2 13.75s2.03 4.5 4.5 4.5L8.6 34.3c.08.68.67 1.2 1.42 1.2h31.95c.68 0 1.27-.53 1.43-1.2l2.1-16.05c2.48 0 4.5-2.03 4.5-4.5s-2.02-4.5-4.5-4.5z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_opportunity";
freezeTemplate(tmpl);
