import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./stage_collection.css";

import _implicitScopedStylesheets from "./stage_collection.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "cx": "49.8",
    "cy": "50",
    "r": "4.2"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M75.9 45.8c-1.5 0-2.9.8-3.6 2.1h-4.5c-1.1-9-8.7-15.9-17.9-15.9S33.1 38.9 32 47.8h-4.3c-.7-1.2-2.1-2.1-3.6-2.1-2.3 0-4.2 1.9-4.2 4.2s1.9 4.2 4.2 4.2c1.5 0 2.8-.8 3.6-1.9h4.4C33.2 61.1 40.8 68 49.9 68c9.1 0 16.7-6.9 17.8-15.7h4.5c.8 1.2 2.1 1.9 3.6 1.9 2.3 0 4.2-1.9 4.2-4.2s-1.8-4.2-4.1-4.2zM49.9 62c-6.6 0-12-5.4-12-12s5.4-12 12-12 12 5.4 12 12-5.4 12-12 12z"
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
  }, [api_element("g", stc0, [api_element("circle", stc1), api_element("path", stc2)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_stage_collection";
freezeTemplate(tmpl);
