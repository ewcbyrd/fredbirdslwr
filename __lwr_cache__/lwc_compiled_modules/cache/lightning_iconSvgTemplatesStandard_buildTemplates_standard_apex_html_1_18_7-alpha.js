import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./apex.css";

import _implicitScopedStylesheets from "./apex.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M78 67.5H44.4c-1 0-1.9.9-1.9 1.9v3.7c0 1 .9 1.9 1.9 1.9H78c1 0 1.9-.9 1.9-1.9v-3.7c0-1.1-.9-1.9-1.9-1.9zM49.2 44.8L25.1 25.4c-.7-.6-1.9-.5-2.5.4l-2.1 3c-.6.9-.4 2 .4 2.6L38 45.1c.6.5.6 1.5 0 2L20.8 60.9c-.7.6-1 1.9-.4 2.6l2.1 3.2c.6.9 1.7 1 2.5.4l24.2-19.3c1-.8 1-2.3 0-3z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_apex";
freezeTemplate(tmpl);
