import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./record_create.css";

import _implicitScopedStylesheets from "./record_create.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M40.8 7.7"
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
    "d": "M17.2 11.6h17.6c.9 0 1.6-.7 1.6-1.6V6.8c0-2.6-2.2-4.8-4.8-4.8H20.4c-2.6 0-4.8 2.2-4.8 4.8V10c0 .9.7 1.6 1.6 1.6z"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "d": "M43.6 6H42c-.5 0-.8.3-.8.8V10c0 3.5-2.9 6.4-6.4 6.4H17.2c-3.5 0-6.4-2.9-6.4-6.4V6.8c0-.5-.3-.8-.8-.8H8.4c-2.6 0-4.8 2.2-4.8 4.8v34.4c0 2.6 2.2 4.8 4.8 4.8h35.2c2.6 0 4.8-2.2 4.8-4.8V10.8c0-2.6-2.2-4.8-4.8-4.8zm-5.9 28.2c0 .4-.4.8-.8.8h-8.8c-.3 0-.5.2-.5.5v8.8c0 .4-.4.8-.8.8h-1.6c-.4 0-.8-.4-.8-.8v-8.8c0-.3-.2-.5-.5-.5h-8.8c-.4 0-.8-.4-.8-.8v-1.6c0-.4.4-.8.8-.8h8.8c.3 0 .5-.2.5-.5v-8.8c0-.4.4-.8.8-.8h1.6c.4 0 .8.4.8.8v8.8c0 .3.2.5.5.5h8.8c.4 0 .8.4.8.8v1.6z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_record_create";
freezeTemplate(tmpl);
