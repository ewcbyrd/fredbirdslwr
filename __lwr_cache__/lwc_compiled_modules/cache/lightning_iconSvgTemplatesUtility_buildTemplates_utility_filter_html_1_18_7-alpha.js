import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./filter.css";

import _implicitScopedStylesheets from "./filter.scoped.css?scoped=true";

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
    "d": "M24.4 31.8c-.6-.6-1.5-.6-2.1 0l-3.6 3.6c-.6.6-1.7.2-1.7-.7V21.5c0-.8-.7-1.5-1.5-1.5h-3c-.8 0-1.5.7-1.5 1.5v13.2c0 .9-1.1 1.3-1.7.7l-3.6-3.6c-.6-.6-1.5-.6-2.1 0L1.4 34c-.6.6-.6 1.5 0 2.1l11.5 11.5c.6.6 1.5.6 2.1 0L26.6 36c.6-.6.6-1.5 0-2.1l-2.2-2.1zM51 9.5c0-.8-.7-1.5-1.5-1.5h-37c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h37c.8 0 1.5-.7 1.5-1.5v-3zM51 21.5c0-.8-.7-1.5-1.5-1.5h-27c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h27c.8 0 1.5-.7 1.5-1.5v-3zM51 33.5c0-.8-.7-1.5-1.5-1.5h-17c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h17c.8 0 1.5-.7 1.5-1.5v-3z"
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
      "viewBox": "0 0 52 52",
      "part": "icon"
    },
    key: 0,
    svg: true
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("path", stc2)])])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_filter";
freezeTemplate(tmpl);
