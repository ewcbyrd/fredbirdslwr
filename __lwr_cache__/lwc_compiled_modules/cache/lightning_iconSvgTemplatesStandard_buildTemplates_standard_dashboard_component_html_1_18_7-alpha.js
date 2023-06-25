import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./dashboard_component.css";

import _implicitScopedStylesheets from "./dashboard_component.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M43.66 20H23.94A4 4 0 0020 23.94v19.72a4 4 0 003.94 3.94h19.72a4 4 0 003.94-3.94V23.94A4 4 0 0043.66 20zM76.06 20H56.34a4 4 0 00-3.94 3.94v19.72a4 4 0 003.94 3.94h19.72A4 4 0 0080 43.66V23.94A4 4 0 0076.06 20zM43.66 52.4H23.94A4 4 0 0020 56.34v19.72A4 4 0 0023.94 80h19.72a4 4 0 003.94-3.94V56.34a4 4 0 00-3.94-3.94zM76.06 52.4H56.34a4 4 0 00-3.94 3.94v19.72A4 4 0 0056.34 80h19.72A4 4 0 0080 76.06V56.34a4 4 0 00-3.94-3.94z"
  },
  key: 2,
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
  }, [api_element("g", stc0, [api_element("path", stc1)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_dashboard_component";
freezeTemplate(tmpl);
