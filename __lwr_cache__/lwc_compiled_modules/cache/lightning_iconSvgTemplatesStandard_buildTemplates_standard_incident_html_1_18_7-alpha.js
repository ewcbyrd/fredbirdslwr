import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./incident.css";

import _implicitScopedStylesheets from "./incident.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M38 30h4a.94.94 0 001-1v-3h14v3a.94.94 0 001 1h4a.94.94 0 001-1v-3a6 6 0 00-6-6H43a6 6 0 00-6 6v3a.94.94 0 001 1zM50 63.32a2.24 2.24 0 102.24 2.24A2.21 2.21 0 0050 63.32z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M74 36H26a6 6 0 00-6 6v32a6 6 0 006 6h48a6 6 0 006-6V42a6 6 0 00-6-6zm-6.88 37.78H32.91C31 73.78 30 71.39 31 69.67L48.15 42a2.11 2.11 0 013.73 0L69 69.67c1.11 1.72 0 4.11-1.88 4.11z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "x": "47.77",
    "y": "50.62",
    "width": "4.48",
    "height": "11.21",
    "rx": ".75"
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
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2), api_element("rect", stc3)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_incident";
freezeTemplate(tmpl);
