import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./product_service_campaign_item.css";

import _implicitScopedStylesheets from "./product_service_campaign_item.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M74 42a2 2 0 012 1.85V72a6 6 0 01-5.78 6H30a6 6 0 01-6-5.78V44a2 2 0 011.85-2zm-15.5 8.34l-.12.1-11.45 12.41-5.2-5a1.51 1.51 0 00-2-.1l-.11.1-2.14 1.92a1.2 1.2 0 00-.1 1.81l.1.11 7.33 6.94a3.07 3.07 0 002.14.89 2.81 2.81 0 002.13-.89L55 62.34l.43-.44.42-.45.55-.58.21-.22.42-.44 5.62-5.93a1.54 1.54 0 00.08-1.82l-.08-.1-2.14-1.92a1.51 1.51 0 00-2.01-.1zM74 22a6 6 0 016 6v6a2 2 0 01-2 2H22a2 2 0 01-2-2v-6a6 6 0 016-6z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_product_service_campaign_item";
freezeTemplate(tmpl);
