import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./all.css";

import _implicitScopedStylesheets from "./all.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M57 44.5c-1.5 0-2.7-1.2-2.7-2.7V24.5c0-1.5 1.2-2.7 2.7-2.7h17.6c1.5 0 2.7 1.2 2.7 2.7v17.3c0 1.5-1.2 2.7-2.7 2.7H57zM64.6 54.7L54.3 65.8c-.6.6-.6 1.7 0 2.3l10.3 11.1c.7.7 1.8.7 2.5 0l10.3-11.1c.6-.6.6-1.7 0-2.3L67.1 54.7c-.7-.7-1.9-.7-2.5 0z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M23.6 25.7l8.9-5.1c.8-.5 1.8-.5 2.7 0l8.9 5.1c.8.5 1.3 1.4 1.3 2.3v10.2c0 .9-.5 1.8-1.3 2.3l-8.9 5.1c-.8.5-1.8.5-2.7 0l-8.9-5.1c-.8-.5-1.4-1.4-1.4-2.3V28c0-1 .6-1.9 1.4-2.3z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "cx": "33.8",
    "cy": "66.6",
    "r": "11.6"
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
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2), api_element("circle", stc3)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_all";
freezeTemplate(tmpl);
