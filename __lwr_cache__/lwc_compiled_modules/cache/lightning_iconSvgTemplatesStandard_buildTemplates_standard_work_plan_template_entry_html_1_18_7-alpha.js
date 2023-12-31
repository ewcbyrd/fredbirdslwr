import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./work_plan_template_entry.css";

import _implicitScopedStylesheets from "./work_plan_template_entry.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M69.6 59.3a10.2 10.2 0 1010.2 10.2 10.24 10.24 0 00-10.2-10.2zm6.6 7.4l-7.5 7.5a1.45 1.45 0 01-2 0L63 70.6a.67.67 0 010-1l1-1a.67.67 0 011 0l2.6 2.6 6.5-6.5a.67.67 0 011 0l1 1a.76.76 0 01.1 1zM44.5 30h17.8a1.58 1.58 0 001.6-1.6v-3.3a4.91 4.91 0 00-4.9-4.9H47.7a4.91 4.91 0 00-4.9 4.9v3.3a1.73 1.73 0 001.7 1.6zM56.1 73.3H31.4a4.89 4.89 0 01-4.8-4.9v-34H25a4.89 4.89 0 00-4.8 4.9v35.4a4.89 4.89 0 004.8 4.9h34.9a12.11 12.11 0 01-3.8-6.3z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M35.6 69.5h20.1a15.14 15.14 0 01.7-3.7 13.68 13.68 0 012.3-4.5h-9.4a1.58 1.58 0 01-1.6-1.6V58a1.58 1.58 0 011.6-1.6h16.2c.2 0 .3 0 .4.1a13.61 13.61 0 013.6-.5 13.89 13.89 0 016.5 1.6V29.2a4.91 4.91 0 00-4.9-4.9h-1.6a.74.74 0 00-.8.8v3.3a6.57 6.57 0 01-6.5 6.6H44.5a6.64 6.64 0 01-6.5-6.6v-3.3a.74.74 0 00-.8-.8h-1.6a4.91 4.91 0 00-4.9 4.9v35.3a5.06 5.06 0 004.9 5zm12.1-28a1.58 1.58 0 011.6-1.6h16.2a1.58 1.58 0 011.6 1.6v1.6a1.58 1.58 0 01-1.6 1.6H49.4a1.58 1.58 0 01-1.6-1.6v-1.6zm0 8.2a1.58 1.58 0 011.6-1.6h16.2a1.58 1.58 0 011.6 1.6v1.6a1.58 1.58 0 01-1.6 1.6H49.4a1.58 1.58 0 01-1.6-1.6v-1.6zm-8-8.2a1.58 1.58 0 011.6-1.6h1.6a1.58 1.58 0 011.6 1.6v1.6a1.58 1.58 0 01-1.6 1.6h-1.6a1.58 1.58 0 01-1.6-1.6zm0 8.2a1.58 1.58 0 011.6-1.6h1.6a1.58 1.58 0 011.6 1.6v1.6a1.58 1.58 0 01-1.6 1.6h-1.6a1.58 1.58 0 01-1.6-1.6zm0 8.3a1.58 1.58 0 011.6-1.6h1.6a1.58 1.58 0 011.6 1.6v1.6a1.58 1.58 0 01-1.6 1.6h-1.6a1.58 1.58 0 01-1.6-1.6z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_work_plan_template_entry";
freezeTemplate(tmpl);
