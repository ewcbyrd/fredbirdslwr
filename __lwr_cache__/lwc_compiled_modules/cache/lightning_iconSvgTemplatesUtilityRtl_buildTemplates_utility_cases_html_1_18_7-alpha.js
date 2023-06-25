import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./cases.css";

import _implicitScopedStylesheets from "./cases.scoped.css?scoped=true";

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
    "d": "M9 3.5C9 2.7 8.3 2 7.5 2h-4C2.7 2 2 2.7 2 3.5v31c0 .8.7 1.5 1.5 1.5h4c.8 0 1.5-.7 1.5-1.5v-31zM50 3.5c0-.8-.7-1.5-1.5-1.5h-4c-.8 0-1.5.7-1.5 1.5v31c0 .8.7 1.5 1.5 1.5h4c.8 0 1.5-.7 1.5-1.5v-31zM37.5 2h-3c-.8 0-1.5.8-1.5 1.6V16c0 .4.2.7.6.9 1.7.9 3.2 2 4.5 3.3.3.3.9.1.9-.3V3.6c0-.8-.7-1.6-1.5-1.6zM24.1 15.2c.6-.1 1.3-.1 1.9-.1s1.3 0 1.9.1 1.1-.4 1.1-1V3.6c0-.8-.7-1.6-1.5-1.6h-3c-.8 0-1.5.8-1.5 1.6v10.6c0 .6.5 1.1 1.1 1zM13.9 20.2c1.3-1.4 2.9-2.5 4.6-3.3.3-.2.5-.5.5-.9V3.6c0-.8-.7-1.6-1.5-1.6h-3c-.8 0-1.5.8-1.5 1.6v16.3c0 .4.5.6.9.3zM26 19.1c-7.2 0-13 5.8-13 13 0 2.2.6 4.4 1.6 6.2l-7.1 7.1c-.6.6-.6 1.5 0 2.1l2.1 2.1c.6.6 1.5.6 2.1 0l6.9-6.9c2.1 1.5 4.7 2.4 7.4 2.4 7.2 0 13-5.8 13-13s-5.8-13-13-13zm0 20c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_cases";
freezeTemplate(tmpl);
