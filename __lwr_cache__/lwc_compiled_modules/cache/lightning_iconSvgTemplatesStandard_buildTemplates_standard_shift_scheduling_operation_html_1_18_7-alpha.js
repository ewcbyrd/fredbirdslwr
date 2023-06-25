import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./shift_scheduling_operation.css";

import _implicitScopedStylesheets from "./shift_scheduling_operation.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M76 42a2 2 0 012 2v30a6 6 0 01-6 6H28a6 6 0 01-6-6V44a2 2 0 012-2zm-26 4a15 15 0 1015 15 15 15 0 00-15-15zm2.87 7.17l5.38 5.25a.75.75 0 010 .9l-5.38 5.19c-.38.39-.9.06-.9-.59v-3.11a6.17 6.17 0 00-6.48 5.86 5.3 5.3 0 000 .69H41.6a10.28 10.28 0 0110.13-10.43H52v-3.18c0-.65.55-.97.87-.58zM63 20a4 4 0 014 4v2h5a6 6 0 016 6v2a2 2 0 01-2 2H24a2 2 0 01-2-2v-2a6 6 0 016-6h5v-2a4 4 0 018 0v2h18v-2a4 4 0 014-4z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_shift_scheduling_operation";
freezeTemplate(tmpl);
