import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./contract_line_outcome_data.css";

import _implicitScopedStylesheets from "./contract_line_outcome_data.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M74.31 41.54h-14.8c-3.49 0-6.34-2.85-6.34-6.34V20.4c0-1.16-.95-2.11-2.11-2.11H29.92c-3.49 0-6.34 2.85-6.34 6.34v50.74c0 3.49 2.85 6.34 6.34 6.34h22.91a20.44 20.44 0 01-4.69-12.68H44.4c-1.16 0-2.11-.95-2.11-2.11v-2.11c0-1.16.95-2.11 2.11-2.11h4.62c.7-2.31 1.8-4.45 3.22-6.34H44.4c-1.16 0-2.11-.95-2.11-2.11v-2.11c0-1.16.95-2.11 2.11-2.11h15.7c2.61-1.2 5.5-1.87 8.56-1.87 2.75 0 5.37.54 7.77 1.52v-6c0-1.16-.95-2.11-2.11-2.11zM33.72 69.13c-1.8 0-3.28-1.48-3.28-3.28s1.48-3.28 3.28-3.28S37 64.05 37 65.85s-1.48 3.28-3.28 3.28zM74.94 35.2h-11.2c-2.33 0-4.23-1.9-4.23-4.23v-11.2c0-.85.63-1.48 1.48-1.48.42 0 .74.11 1.06.42L76 32.66c.32.32.42.63.42 1.06 0 .85-.63 1.48-1.48 1.48zM33.72 56.45c-1.8 0-3.28-1.48-3.28-3.28s1.48-3.28 3.28-3.28S37 51.37 37 53.17c0 1.9-1.48 3.28-3.28 3.28zm.53-14.38l4.65-2.43c.11-.11.32-.11.42 0l4.65 2.43c.32.21.74-.11.63-.42l-.85-5.18c0-.21 0-.32.11-.42l3.81-3.7c.32-.21.11-.63-.21-.74l-5.18-.74c-.11 0-.21-.11-.32-.21l-2.33-4.76c-.21-.32-.63-.32-.85 0l-2.33 4.76c0 .11-.21.21-.32.21l-5.18.74c-.32.11-.53.53-.42.74l3.81 3.7c.11.11.11.32.11.42l-.85 5.18c-.11.32.32.63.63.42zm49.32 26.58c0 8.24-6.68 14.92-14.92 14.92s-14.92-6.68-14.92-14.92 6.68-14.92 14.92-14.92 14.92 6.68 14.92 14.92zm-6.19-5.09c.75.7.79 1.88.09 2.64l-5.6 5.97a1.879 1.879 0 01-2.75-.02l-2.41-2.66-4.21 4.21c-.73.73-1.91.73-2.64 0s-.73-1.91 0-2.64l5.6-5.6c.36-.36.85-.56 1.36-.55.51.01.99.23 1.34.61l2.37 2.61 4.21-4.49c.7-.75 1.89-.79 2.64-.09z",
    "fill-rule": "evenodd"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_contract_line_outcome_data";
freezeTemplate(tmpl);
