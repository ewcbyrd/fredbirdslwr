import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom91.css";

import _implicitScopedStylesheets from "./custom91.scoped.css?scoped=true";

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
    "d": "M77.8 32.6c-3-.9-5.6-3-7.3-5.7-1.3-2.1-1.4-6.9-4.6-6.9H34.1c-3.3 0-3.3 4.8-4.6 6.9-2.1 3.3-4.8 4.1-8 6-3.3 1.9-.2 9.9.5 12.7 3.1 11.1 9 21.4 18.2 28.7 2.6 2.101 5.4 3.9 8.4 5.4 2.7 1.399 7.2-2.5 9.2-4C63 72 67.3 67.3 70.7 62c2.899-4.6 5.1-9.6 6.7-14.8.6-2.1 1.2-4.2 1.6-6.4.4-1.8 1.3-4.6.7-6.4-.2-.8-1-1.5-1.9-1.8-4.6-1.4 1.4.4 0 0zm-4.4 7C70.7 53 63.5 65.5 51.6 72.8l-1.6 1-1.6-1C34 64 28.6 49.9 26.6 39.6l-.4-2.1 1.8-1.1c3.1-1.9 6-5.2 7.7-8.7l.8-1.8h27l.5 1.3c1.7 3.8 4.8 7.4 8.5 9.5l1.3.7v.1l-.4 2.1z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M48.9 32c-2.3 0-7.9 0-9 1-1.9 1.7-3 4.2-5 5.9-2.1 1.8-1.1 3.6-.4 6 1.4 4.2 3.3 8.3 5.9 12 1.3 1.899 2.8 3.699 4.5 5.3.5.5 5.1 5.1 5.1 2.2V34c0-1.1 0-2-1.1-2z"
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
      "viewBox": "0 0 100 100",
      "part": "icon"
    },
    key: 0,
    svg: true
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("path", stc2), api_element("path", stc3)])])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustomRtl_custom91";
freezeTemplate(tmpl);