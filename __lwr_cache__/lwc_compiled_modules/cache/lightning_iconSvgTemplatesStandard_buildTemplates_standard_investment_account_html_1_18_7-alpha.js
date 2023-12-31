import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./investment_account.css";

import _implicitScopedStylesheets from "./investment_account.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M74 27H26c-3.3 0-6 2.7-6 6v34c0 3.3 2.7 6 6 6h48c3.3 0 6-2.7 6-6V33c0-3.3-2.7-6-6-6zm-5 27c0 .9-1 1.3-1.7.7l-4.6-4.6-10.6 9.1c-1.2 1.2-3.1 1.2-4.2 0l-6.4-7.3-11.4 10c-.4.4-1 .4-1.4 0l-.5-.5c-.4-.4-.4-1 0-1.4l11.2-15.3c1.2-1.2 3.1-1.2 4.2 0l6.4 6.4 6.5-7.5-4.2-3.8c-.6-.6-.2-1.8.7-1.8h14c1.1 0 1.9 1 1.9 2.1V54z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_investment_account";
freezeTemplate(tmpl);
