import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./flow.css";

import _implicitScopedStylesheets from "./flow.scoped.css?scoped=true";

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
    "d": "M79.9 30.7c-2.6-5.1-9.2-14.6-21.5-9-7.6 3.5-11.9 5.5-11.9 5.5l-11 4.8c-3.1 1.5-9.9-.6-13.7-2-1.1-.4-2.1.8-1.6 1.9 2.6 5.1 9.2 14.6 21.5 9 7.6-3.5 22.9-10.1 22.9-10.1 3.1-1.5 9.9.6 13.7 2 1.1.2 2.1-.9 1.6-2.1zM53.5 46.8c-1.4.8-6.9 3.3-6.9 3.3l-5.5 2.4C38.4 54 32.5 52 29 50.6c-1-.5-1.9.8-1.4 1.8 2.2 5 8.1 14 18.9 8.5 6.7-3.4 12.4-5.6 12.4-5.6 2.7-1.5 8.6.5 12.1 1.9 1 .4 1.9-.8 1.4-1.9-2.3-5-8.2-14-18.9-8.5zM49.5 68.9c-1.1.6-3 1.8-3 1.8-2.1 1.3-6.5-.4-9.1-1.7-.7-.4-1.4.8-1 1.8 1.6 4.5 6 12.6 14.1 7.6 3-1.9 3-1.8 3-1.8 2.2-1.1 6.5.4 9.1 1.6.7.4 1.4-.8 1-1.8-1.6-4.4-5.7-12.1-14.1-7.5z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_flow";
freezeTemplate(tmpl);
