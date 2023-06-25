import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom16.css";

import _implicitScopedStylesheets from "./custom16.scoped.css?scoped=true";

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
    "d": "M72 70h-1V48c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v22h-6V48c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v22h-6V48c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v22h-6V48c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v22h-1c-3.3 0-6 2.7-6 6v2c0 1.1.9 2 2 2h52c1.1 0 2-.9 2-2v-2c0-3.3-2.7-6-6-6zM77 34.4L52.3 20.8c-.7-.5-1.5-.8-2.3-.8-.8 0-1.6.3-2.3.8L23 34.4c-.6.4-1 1-1 1.7V38c0 1.1.9 2 2 2h52c1.1 0 2-.9 2-2v-1.8c0-.7-.4-1.4-1-1.8zM50 36c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustomRtl_custom16";
freezeTemplate(tmpl);
