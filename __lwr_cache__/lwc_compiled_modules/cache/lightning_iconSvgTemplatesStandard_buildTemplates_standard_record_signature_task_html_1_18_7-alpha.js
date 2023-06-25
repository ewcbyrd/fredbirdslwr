import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./record_signature_task.css";

import _implicitScopedStylesheets from "./record_signature_task.scoped.css?scoped=true";

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
    "d": "M77.27 29.57a1.49 1.49 0 00-1-.45 1.33 1.33 0 00-1 .45L74 30.77a.43.43 0 000 .55l3.13 3.13a.52.52 0 00.29.09.35.35 0 00.25-.09l1.21-1.21a1.42 1.42 0 00-.06-2.11zM73.05 32.34a.52.52 0 00-.29-.09.35.35 0 00-.25.09L60 44.78l-1.2 4.15a.57.57 0 00.52.75h.14l4.16-1.21L76.12 36a.38.38 0 000-.49z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M78.24 38.14l-5.58 5.56v19.18a2 2 0 01-2 2h-42a2 2 0 01-2-2v-23a2 2 0 012-2h34l6-6h-42a6 6 0 00-6 6v27a6 6 0 006 6h46a6 6 0 006-6v-27-.24a2.8 2.8 0 01-.42.5z"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "d": "M54.82 50.45c-.94.55-1.82 1.15-2.77 1.65a3.81 3.81 0 01-.87.33.6.6 0 000-.12A4.07 4.07 0 0046.34 49a58.78 58.78 0 00-6.68 2.11 57.84 57.84 0 01-6.95 1.73 1.89 1.89 0 00-1.31 2.31 1.91 1.91 0 002.3 1.31 58.81 58.81 0 006.95-1.73c1.14-.36 2.28-.74 3.41-1.11l2-.65a5 5 0 011.17-.34c.11 0 .13.22.2.37.2.46.33.94.58 1.39a3.25 3.25 0 002.74 1.84c2.24.12 4.12-1.5 6-2.52 2.07-1.19.18-4.43-1.93-3.26z"
  },
  key: 5,
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
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("path", stc2), api_element("path", stc3), api_element("path", stc4)])])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_record_signature_task";
freezeTemplate(tmpl);
