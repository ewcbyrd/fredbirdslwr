import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./customer.css";

import _implicitScopedStylesheets from "./customer.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "cx": "55.73",
    "cy": "77.54",
    "r": "2.46"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "cx": "67.78",
    "cy": "77.54",
    "r": "2.46"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M55.4 66.05h14.82c.46.03.86-.32.9-.78l2.68-9.51a.948.948 0 00-.62-1.19.903.903 0 00-.28-.04H50.02l-.33-1.44c-.2-.64-.79-1.09-1.46-1.11h-2.41c-.82 0-1.51.62-1.58 1.44-.08.79.5 1.5 1.29 1.58H47.14l1.3 4.36 3.36 11.49c.2.64.78 1.08 1.44 1.11h17.39c.8 0 1.47-.58 1.58-1.36.09-.78-.48-1.49-1.26-1.58H55.41c-.64 0-1.22-.4-1.46-1v-.11c-.23-.76.2-1.57.97-1.8.16-.05.32-.07.49-.06z"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "d": "M44.25 60.7l-.44-1.58a5.36 5.36 0 01-2.46-1.68c-2.14-2.47-1.88-6.22.59-8.36 1.1-.96 2.52-1.47 3.99-1.45h2.33c1.95-.01 3.78.91 4.93 2.49h6.34c-1.9-1.25-3.91-2.32-6.02-3.17-3.57-1.44-4.01-2.9-4.01-4.34a6.33 6.33 0 012.11-3.98c2.15-2.01 3.31-4.86 3.17-7.8 0-5.8-3.57-10.82-9.81-10.82s-9.81 5.02-9.81 10.82c-.04 2.92 1.11 5.73 3.17 7.8 1.25.98 2.05 2.44 2.19 4.03 0 1.44-.55 2.9-4.01 4.34-5.36 2.12-10.27 4.75-10.38 9.51a5.624 5.624 0 005.25 5.91h13.15l-.27-1.71z"
  },
  key: 5,
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
  }, [api_element("g", stc0, [api_element("circle", stc1), api_element("circle", stc2), api_element("path", stc3), api_element("path", stc4)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_customer";
freezeTemplate(tmpl);
