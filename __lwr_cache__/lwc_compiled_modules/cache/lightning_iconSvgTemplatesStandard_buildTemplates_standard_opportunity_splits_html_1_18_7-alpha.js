import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./opportunity_splits.css";

import _implicitScopedStylesheets from "./opportunity_splits.scoped.css?scoped=true";

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
    "d": "M69.3 27.1C64.1 22.7 57.4 20 50 20c-16.5 0-30 13.5-30 30 0 7.4 2.7 14.1 7.1 19.3l42.2-42.2zM34 75.3c4.6 2.9 10.1 4.7 16 4.7 16.5 0 30-13.5 30-30 0-5.9-1.7-11.3-4.7-16L34 75.3z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_opportunity_splits";
freezeTemplate(tmpl);
