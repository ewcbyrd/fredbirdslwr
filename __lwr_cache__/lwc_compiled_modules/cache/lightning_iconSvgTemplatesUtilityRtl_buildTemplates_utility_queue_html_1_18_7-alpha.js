import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./queue.css";

import _implicitScopedStylesheets from "./queue.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M40.09 2.04c-2.32 0-4.33 1.68-5.13 4.01 3.05 1.36 5.37 4.33 6.17 7.93 2.48-.56 4.33-2.96 4.33-5.85 0-3.45-2.4-6.09-5.37-6.09zM45.06 16.3c-1.04.96-2.32 1.6-3.77 1.84-.24 2.16-1.04 4.17-2.24 5.77h8.89c1.12 0 2-.88 2-2v-.96c0-2.16-2.4-3.53-4.89-4.65zM36.57 26c-1.6 1.44-3.61 2.32-5.77 2.32-.16 2.48-.88 4.73-2 6.65h11.22c1.28 0 2.4-1.04 2.4-2.4v-.96c-.08-2.64-2.96-4.25-5.85-5.61zM26.23 38.18c-2.24 2.24-5.29 3.53-8.49 3.53s-6.33-1.36-8.57-3.69c-3.69 1.76-7.21 4.01-7.21 7.29v1.52c0 1.76 1.44 3.13 3.13 3.13h25.07c1.76 0 3.13-1.44 3.13-3.13v-1.44c0-3.37-3.37-5.53-7.05-7.21z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M30.56 9.57c-2.96 0-5.45 2.16-6.17 5.21 2.96 1.92 5.13 5.21 6.01 8.97h.16c3.53 0 6.41-3.21 6.41-7.13.08-3.85-2.8-7.05-6.41-7.05z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "cx": "17.66",
    "cy": "27.28",
    "rx": "8.57",
    "ry": "9.46"
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
      "viewBox": "0 0 52 52",
      "part": "icon"
    },
    key: 0,
    svg: true
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2), api_element("ellipse", stc3)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_queue";
freezeTemplate(tmpl);
