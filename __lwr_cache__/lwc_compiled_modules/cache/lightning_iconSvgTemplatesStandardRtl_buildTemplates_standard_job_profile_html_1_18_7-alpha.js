import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./job_profile.css";

import _implicitScopedStylesheets from "./job_profile.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M37.3 31.9h21.8c1.1 0 2-.9 2-2v-4c0-3.3-2.7-5.9-5.9-5.9H41.3c-3.3 0-5.9 2.7-5.9 5.9v4c-.1 1.1.8 2 1.9 2z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M70 24.9h-2c-.6 0-1 .4-1 1v4c0 4.4-3.6 7.9-7.9 7.9H37.3c-4.4 0-7.9-3.6-7.9-7.9v-4c0-.6-.4-1-1-1h-2c-3.3 0-5.9 2.7-5.9 5.9v40.6c0 3.3 2.7 5.9 5.9 5.9h20c2.8 0 3.1-2.3 3.1-3.1V52.8c0-2.3 1.3-2.8 2-2.8h21.6c2.4 0 2.8-2.1 2.8-2.8V31c.1-3.4-2.6-6.1-5.9-6.1z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M78.4 60.4H56.6c-.6 0-1.1-.5-1.1-1.1v-2.2c0-.6.5-1.1 1.1-1.1h21.8c.6 0 1.1.5 1.1 1.1v2.2c0 .6-.5 1.1-1.1 1.1zm0 9.8H56.6c-.6 0-1.1-.5-1.1-1.1v-2.2c0-.6.5-1.1 1.1-1.1h21.8c.6 0 1.1.5 1.1 1.1v2.2c0 .6-.5 1.1-1.1 1.1zm0 9.8H56.6c-.6 0-1.1-.5-1.1-1.1v-2.2c0-.6.5-1.1 1.1-1.1h21.8c.6 0 1.1.5 1.1 1.1v2.2c0 .6-.5 1.1-1.1 1.1z"
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
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2), api_element("path", stc3)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_job_profile";
freezeTemplate(tmpl);
