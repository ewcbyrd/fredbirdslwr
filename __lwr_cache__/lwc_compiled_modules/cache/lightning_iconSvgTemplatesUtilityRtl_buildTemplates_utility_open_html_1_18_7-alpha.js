import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./open.css";

import _implicitScopedStylesheets from "./open.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M8 35v-.6.6z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M46 2H6C3.8 2 2 3.8 2 6v36c0 2.2 1.8 4 4 4h12c.6 0 1-.4 1-1v-4c0-.6-.4-1-1-1H9.5c-.8 0-1.5-.7-1.5-1.5v-25c0-.8.7-1.5 1.5-1.5h33c.8 0 1.5.7 1.5 1.5v25c0 .8-.7 1.5-1.5 1.5H34c-.6 0-1 .4-1 1v4c0 .6.4 1 1 1h12c2.2 0 4-1.8 4-4V6c0-2.2-1.8-4-4-4z"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "d": "M37.5 34.6l2.1-2.1c.6-.6.6-1.5 0-2.1L27 17.8c-.6-.6-1.5-.6-2.1 0L12.4 30.3c-.6.6-.6 1.5 0 2.1l2.1 2.1c.6.6 1.5.6 2.1 0l4.6-4.6c.6-.6 1.8-.2 1.8.7v17.9c0 .8.6 1.5 1.4 1.5h3c.8 0 1.6-.7 1.6-1.5V30.6c0-.9 1-1.3 1.7-.7l4.6 4.7c.6.5 1.6.5 2.2 0z"
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
      "viewBox": "0 0 52 52",
      "part": "icon"
    },
    key: 0,
    svg: true
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("g", stc2, [api_element("path", stc3), api_element("path", stc4)])])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_open";
freezeTemplate(tmpl);
