import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom20.css";

import _implicitScopedStylesheets from "./custom20.scoped.css?scoped=true";

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
    "d": "M38 47.7c0-.8-1-1.3-1.6-.8l-14 10.8c-1.5 1.1-2.4 2.9-2.4 4.8v4.1c0 .7.7 1.2 1.3.9l15.4-5.8c.8-.3 1.3-1 1.3-1.9V47.7zM60.1 75.7L56 73V27.6c0-2.7-2.9-5.7-4.8-7.2-.7-.6-1.8-.6-2.5 0-1.8 1.5-4.8 4.5-4.8 7.2V73l-4.6 3c-.8.6-1.4 1.5-1.4 2.5v.6c0 .5.4.9.9.9h22.1c.5 0 1.1-.4 1.1-.9 0-1.4-.8-2.6-1.9-3.4zM77.6 57.7l-14-10.8a1 1 0 00-1.6.8v12.2c0 .8.5 1.6 1.3 1.899l15.4 5.8c.7.201 1.3-.199 1.3-.899v-4.1c0-2-.9-3.8-2.4-4.9z"
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
      "viewBox": "0 0 100 100",
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustomRtl_custom20";
freezeTemplate(tmpl);
