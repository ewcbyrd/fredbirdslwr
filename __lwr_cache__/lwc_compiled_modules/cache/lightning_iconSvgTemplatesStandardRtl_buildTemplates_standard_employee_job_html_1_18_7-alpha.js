import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./employee_job.css";

import _implicitScopedStylesheets from "./employee_job.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "cx": "44.6",
    "cy": "36.3",
    "r": "16"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M48.8 79.6c2.7 0 1.2-1.9 1.2-1.9a19.58 19.58 0 01-2.5-20.1l.2-.4a1.17 1.17 0 00-.9-1.9 18.48 18.48 0 00-2.4-.1 24.26 24.26 0 00-24 20.9c0 1.2.4 3.5 4.2 3.5h24.2zM65.2 51.2a14.2 14.2 0 1014.2 14.2 14.25 14.25 0 00-14.2-14.2zM60.4 74a3.5 3.5 0 113.5-3.5 3.54 3.54 0 01-3.5 3.5zm3.5-11.9a1.27 1.27 0 01-.4.7l-2.7 1.5a.48.48 0 01-.7 0l-2.7-1.5a1 1 0 01-.4-.7V59a1 1 0 01.4-.7l2.7-1.5a.48.48 0 01.7 0l2.7 1.5a1 1 0 01.4.7zm2.6-4.3a.68.68 0 01.7-.7h5.2a.68.68 0 01.7.7V63a.68.68 0 01-.7.7h-5.1a.68.68 0 01-.7-.7l-.1-5.2zM73.4 71l-3.1 3.2a.48.48 0 01-.7 0L66.5 71a.48.48 0 010-.7l3.1-3.2a.48.48 0 01.7 0l3.1 3.2a.48.48 0 010 .7z"
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
  }, [api_element("g", stc0, [api_element("circle", stc1), api_element("path", stc2)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_employee_job";
freezeTemplate(tmpl);
