import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./employee_job_position.css";

import _implicitScopedStylesheets from "./employee_job_position.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M65.3 51.5a14.25 14.25 0 1014.2 14.3 14.32 14.32 0 00-14.2-14.3zM67.8 67a3.09 3.09 0 01-1.1-.2l-5.4 5.4a1.71 1.71 0 01-1.1.5c-.5 0-.9-.1-1.1-.5a1.82 1.82 0 010-2.4l5.4-5.4a4.47 4.47 0 014-5.8 3.09 3.09 0 011.1.2c.2 0 .2.2.1.4l-2.5 2.4a.37.37 0 000 .6l1.6 1.6a.48.48 0 00.7 0l2.4-2.4c.1-.1.5-.1.5.1a6.53 6.53 0 01.2 1.1 4.47 4.47 0 01-4.8 4.4z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M48.9 79.7c2.7 0 1.2-1.9 1.2-1.9a19.58 19.58 0 01-2.5-20.1l.2-.4a1.17 1.17 0 00-.9-1.9 18.48 18.48 0 00-2.4-.1 24.54 24.54 0 00-24.2 21c0 1.2.4 3.5 4.2 3.5h23.9a1.75 1.75 0 01.5-.1z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "cx": "44.6",
    "cy": "36.1",
    "r": "16.1"
  },
  key: 4,
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
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2), api_element("circle", stc3)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_employee_job_position";
freezeTemplate(tmpl);
