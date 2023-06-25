import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./dislike.css";

import _implicitScopedStylesheets from "./dislike.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M12 29.5V9c0-2.2-1.8-4-4-4H5.5C4.7 5 4 5.7 4 6.5v23c0 .8.7 1.5 1.5 1.5h5c.8 0 1.5-.7 1.5-1.5zM48 26V13.5C48 4.8 41.1 4 33.6 4c-7.1 0-9.4 2.7-16.2 3-.8 0-1.4.7-1.4 1.5v20c0 .8.7 1.5 1.5 1.5 4.8 0 8.5 5.2 8.5 10.5v6c0 .8.7 1.5 1.5 1.5H30c2.2 0 4-1.8 4-4V34c0-2.2 1.8-4 4-4h6c2.2 0 4-1.8 4-4z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_dislike";
freezeTemplate(tmpl);
