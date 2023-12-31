import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./work_type.css";

import _implicitScopedStylesheets from "./work_type.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M75.87 29.25l-9-8.88A1.13 1.13 0 0066 20a1.39 1.39 0 00-1.38 1.38v6.38a3.89 3.89 0 003.87 3.87h6.37a1.39 1.39 0 001.38-1.38 1.66 1.66 0 00-.37-1zM29.63 62.63v-31a5.84 5.84 0 00-5.88 5.75v36.74A5.87 5.87 0 0029.63 80h29.12a5.84 5.84 0 005.88-5.75H41.25c-6.37 0-11.62 0-11.62-11.62z",
    "fill-rule": "evenodd"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M74.25 37.38H64.5a5.84 5.84 0 01-5.87-5.75v-9.75A1.77 1.77 0 0056.75 20h-15.5a5.84 5.84 0 00-5.87 5.75V62.5a5.76 5.76 0 005.88 5.75h29.12a5.84 5.84 0 005.88-5.75V39.38a2 2 0 00-2.01-2zM49.91 62.22a2.49 2.49 0 01-2.49 2.49h-5A2.49 2.49 0 0140 62.22v-5a2.49 2.49 0 012.49-2.49h5a2.49 2.49 0 012.49 2.49zm0-13.68A2.49 2.49 0 0147.43 51h-5A2.49 2.49 0 0140 48.54v-5a2.49 2.49 0 012.49-2.49h5a2.49 2.49 0 012.49 2.49zm13.68 13.68a2.49 2.49 0 01-2.49 2.48h-5a2.49 2.49 0 01-2.49-2.49v-5a2.49 2.49 0 012.49-2.49h5a2.49 2.49 0 012.49 2.49zm0-13.68A2.49 2.49 0 0161.1 51h-5a2.49 2.49 0 01-2.49-2.49v-5a2.49 2.49 0 012.49-2.49h5a2.49 2.49 0 012.49 2.49z",
    "fill-rule": "evenodd"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_work_type";
freezeTemplate(tmpl);
