import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./share_mobile.css";

import _implicitScopedStylesheets from "./share_mobile.scoped.css?scoped=true";

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
    "d": "M41.957 50.438c2.2 0 4-1.799 4-4V19.512c0-2.2-1.8-4-4-4h-7.5c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h4c.801 0 1.5.7 1.5 1.501v19.924c0 .799-.699 1.5-1.5 1.5H13.465c-.8 0-1.5-.701-1.5-1.5V23.013c0-.801.7-1.501 1.5-1.501h4c.8 0 1.5-.699 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5h-7.5c-2.2 0-4 1.8-4 4v26.925c0 2.198 1.8 4 4 4h31.992v.001z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M28.952 30.898V11.487h5.899c1 0 1.5-.9.899-1.4l-9-8.3c-.399-.3-1-.3-1.399 0l-9 8.3c-.601.6-.101 1.4.899 1.4h5.7v19.412c0 .802.7 1.602 1.5 1.602h3c.802-.001 1.502-.801 1.502-1.603z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_share_mobile";
freezeTemplate(tmpl);
