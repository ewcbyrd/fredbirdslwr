import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./warranty_term.css";

import _implicitScopedStylesheets from "./warranty_term.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M50 20c3.79 0 6.79 4.11 10.11 5.53s8.52.63 11 3.31 1.89 7.58 3.31 11.05S80 46.21 80 50s-4.11 6.79-5.53 10.11-.63 8.52-3.31 11c-2.53 2.52-7.58 1.89-11 3.31S53.79 80 50 80s-6.79-4.11-10.11-5.53-8.52-.63-11-3.31c-2.52-2.53-1.89-7.58-3.31-11S20 53.79 20 50s4.11-6.79 5.53-10.11.63-8.52 3.31-11 7.58-1.89 11.05-3.36S46.21 20 50 20zm0 9.47A20.53 20.53 0 1070.53 50 20.59 20.59 0 0050 29.47zm9.52 11.44l2 1.9a1.55 1.55 0 010 1.89L48.78 58.84a2.55 2.55 0 01-2 .88 2.76 2.76 0 01-2-.88L37.9 52a1.26 1.26 0 010-1.89l2-1.9a1.37 1.37 0 012 0l4.87 5 10.75-12.3a1.37 1.37 0 012 0z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_warranty_term";
freezeTemplate(tmpl);
