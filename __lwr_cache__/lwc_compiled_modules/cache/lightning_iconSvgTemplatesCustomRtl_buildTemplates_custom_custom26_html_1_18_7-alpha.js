import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom26.css";

import _implicitScopedStylesheets from "./custom26.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M26 20c-3.3 0-6 2.7-6 6 0 1.8.8 3.4 2 4.5V76c0 2.2 1.8 4 4 4s4-1.8 4-4V30.5c1.2-1.1 2-2.7 2-4.5 0-3.3-2.7-6-6-6zM78.5 30.8c-15.7 8.2-26.4-5.9-41.2-.5-.8.3-1.3 1-1.3 1.9V58c0 1.3 1.3 2.3 2.6 1.9 14.2-4.3 24.9 9.1 40.4.6.6-.3 1-1 1-1.7V31.7c0-.8-.8-1.3-1.5-.9z"
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
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("path", stc2)])])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustomRtl_custom26";
freezeTemplate(tmpl);
