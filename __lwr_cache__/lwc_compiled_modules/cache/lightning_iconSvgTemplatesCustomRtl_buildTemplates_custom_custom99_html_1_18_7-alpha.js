import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom99.css";

import _implicitScopedStylesheets from "./custom99.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M74 36H57.2c-.5-1.2-1.2-2.2-2.101-3.1l6.301-8.1c1-1.3.8-3.2-.5-4.2-1.301-1-3.2-.8-4.2.5l-7 9c-.6 0-1.1-.1-1.7-.1s-1.1.1-1.6.1l-7-9c-1-1.3-2.9-1.5-4.2-.5-1.3 1-1.5 2.9-.5 4.2l6.3 8.1c-.9.9-1.6 1.9-2.1 3.1H26c-3.3 0-6 2.7-6 6v28c0 3.3 2.7 6 6 6h48c3.3 0 6-2.7 6-6V42c0-3.3-2.7-6-6-6zm-8 32c0 1.1-.9 2-2 2H28c-1.1 0-2-.9-2-2V44c0-1.1.9-2 2-2h36c1.1 0 2 .9 2 2v24zm7-10c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm0-10c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustomRtl_custom99";
freezeTemplate(tmpl);
