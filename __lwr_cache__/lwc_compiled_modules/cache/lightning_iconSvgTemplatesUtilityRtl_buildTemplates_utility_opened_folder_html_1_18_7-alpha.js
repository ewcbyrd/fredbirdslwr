import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./opened_folder.css";

import _implicitScopedStylesheets from "./opened_folder.scoped.css?scoped=true";

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
    "d": "M44 15c0-2.2-1.8-4-4-4H25.3c-1.8 0-3.5-2-3.5-2l-2.5-3s-1.2-2-3.5-2H12C9.8 4 8 5.8 8 8v9h36v-2zM46.9 21H5.1c-2 0-3.5 1.9-3 3.8l5.7 21c.4 1.3 1.6 2.2 3 2.2h30.5c1.4 0 2.7-.9 3-2.2l5.7-21c.4-1.9-1.1-3.8-3.1-3.8z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_opened_folder";
freezeTemplate(tmpl);
