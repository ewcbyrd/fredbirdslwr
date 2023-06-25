import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./work_order.css";

import _implicitScopedStylesheets from "./work_order.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M65.2 52.2c-3.6 1.4-5 4.8-5.2 5.3-.3.7-.8.8-.8.8h-18c-.3 0-.6-.4-.8-.7-1.5-3.5-5-6.1-9-6.1-3.7 0-6.9 2-8.6 5-.2.4-.8.5-1.2.2-1-.9-1.6-2.2-1.6-3.6 0 0-.6-11.6 3.3-17.6.7-1 1.2-1.4 2.1-1.4h38c.4 0 .8 0 1.2.3 0 0 4.2 6.4 4.8 7 .5.5 1 .9 2.3 1.2.8.2 8.1 2.8 8.1 2.8.4.2.3.7.3 1.1V53c0 1.4-.4 2.7-1.4 3.6-.4.3-.9.2-1.1-.2-1.7-3-4.8-5-8.5-5-1.5 0-2.7.3-3.9.8"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "cx": "69",
    "cy": "61.1",
    "r": "4.9"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "cx": "31.5",
    "cy": "61.1",
    "r": "4.9"
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
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("circle", stc2), api_element("circle", stc3)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_work_order";
freezeTemplate(tmpl);
