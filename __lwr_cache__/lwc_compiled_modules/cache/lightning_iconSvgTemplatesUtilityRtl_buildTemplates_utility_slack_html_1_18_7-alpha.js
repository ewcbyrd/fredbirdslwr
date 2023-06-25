import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./slack.css";

import _implicitScopedStylesheets from "./slack.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M12.1 32.3a5 5 0 01-5 5 5 5 0 010-10h5zM14.6 32.3a5 5 0 015-5 5.08 5.08 0 015 5V45a5 5 0 01-5 5 5.08 5.08 0 01-5-5zM19.7 12.1a5 5 0 01-5-5 5 5 0 0110 0v5zM19.7 14.6a5 5 0 015 5 5.08 5.08 0 01-5 5H7a5 5 0 01-5-5 5.08 5.08 0 015-5zM39.9 19.7a5 5 0 115 5h-5zM37.4 19.7a5 5 0 01-10 0V7a5 5 0 015-5 5.08 5.08 0 015 5zM32.3 39.9a5 5 0 11-5 5v-5zM32.3 37.4a5 5 0 01-5-5 5.08 5.08 0 015-5H45a5 5 0 015 5 5.08 5.08 0 01-5 5z"
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
      "viewBox": "0 0 52 52",
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_slack";
freezeTemplate(tmpl);
