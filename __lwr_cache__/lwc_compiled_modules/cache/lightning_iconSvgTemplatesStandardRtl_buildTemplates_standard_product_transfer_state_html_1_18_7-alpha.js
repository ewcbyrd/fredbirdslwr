import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./product_transfer_state.css";

import _implicitScopedStylesheets from "./product_transfer_state.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M46.72 20.52a1.73 1.73 0 012.47 0l13.46 13a1.62 1.62 0 010 2.43L49.19 49a1.72 1.72 0 01-2.47 0l-2.47-2.42a1.62 1.62 0 010-2.43L48.46 40a1.12 1.12 0 00-.82-1.9H24.83A1.85 1.85 0 0123 36.38v-3.46a1.92 1.92 0 011.83-1.74h22.81a1.1 1.1 0 00.82-1.9l-4.21-4.08a1.62 1.62 0 010-2.43zm-7.24 30.53a1.73 1.73 0 00-2.48 0l-13.45 13a1.62 1.62 0 000 2.43l13.45 13a1.74 1.74 0 002.48 0L42 77.05a1.61 1.61 0 000-2.42l-4.21-4.08a1.12 1.12 0 01.82-1.91h10.81A15.63 15.63 0 0149 65a16.17 16.17 0 01.34-3.29H38.56a1.1 1.1 0 01-.82-1.91L42 55.73a1.62 1.62 0 000-2.43zM53 65a12 12 0 1112 12 12 12 0 01-12-12zm19.52-2.81l-8.07 8.08a1.46 1.46 0 01-2.15 0l-3.9-3.91a.69.69 0 010-1.07l1.07-1.08a.71.71 0 011.08 0L63.37 67l6.93-6.93a.7.7 0 011.08 0l1.07 1.08a.66.66 0 01.07 1.04z",
    "fill-rule": "evenodd"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_product_transfer_state";
freezeTemplate(tmpl);
