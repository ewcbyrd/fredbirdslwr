import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom53.css";

import _implicitScopedStylesheets from "./custom53.scoped.css?scoped=true";

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
    "d": "M74.7 57h-.6c-2.3 0-4.1-1.8-4.1-4.1V39.7c0-11.6-10.4-20.9-22.3-19.5C37.5 21.3 30 30.2 30 40.5v11.9c0 2.5-2.1 4.6-4.6 4.6h-.1c-1.8 0-3.3 1.5-3.3 3.3v2.4c0 1.8 1.5 3.3 3.3 3.3h49.4c1.8 0 3.3-1.5 3.3-3.3v-2.4c0-1.8-1.5-3.3-3.3-3.3zM56.6 72H43.4c-.8 0-1.5.6-1.3 1.4.7 3.8 4 6.6 8 6.6s7.2-2.7 8-6.6c0-.8-.6-1.4-1.5-1.4z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustomRtl_custom53";
freezeTemplate(tmpl);
