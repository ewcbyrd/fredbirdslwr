import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./sobject.css";

import _implicitScopedStylesheets from "./sobject.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M25.1 22.6h5.1c-6 13.4-6 23.4 0 36.8h-5.1c-6.9-15.4-6.9-21.4 0-36.8zM47.1 45.5c.5 2.3.8 4.1 1.1 4.9.4 1.1 1 2 1.8 2.7 1.9-1.5 4.3-2.3 6.8-2.3 1.6 0 3.1.4 4.6 1 .2-.3.3-.7.3-1.1 0-1.2-1-2.2-2.2-2.2-.4 0-.7.1-1 .2 0 0-2.4 1.4-3.2.3-.6-1.1-1.1-2.6-1.5-4.5-.3-1.6-.8-3.6-1.1-5.4l2.4-3.5s2.7 1 4.1 1 4.2-1.1 4.2-4.8c0-3.7-2.7-3.9-3.5-3.9-1.6 0-3.2 1.2-4.6 3.6-1.4 2.5-3 5.2-3 5.2h-.1c-.4-1.8-.6-3.2-.8-3.8-.3-1.5-2.1-4.8-5.7-4.8-3.7 0-7 2.1-7 2.1-.6.4-1 1.1-1 1.9 0 1.2 1 2.2 2.2 2.2.4 0 .7-.1 1-.2 0 0 2.8-1.6 3.4 0 .2.5.3 1 .5 1.5.7 2.4 1.4 5.2 1.9 7.8l-2.4 3.5s-2.7-1-4.1-1c-1.4 0-4.2 1.1-4.2 4.8 0 3.7 2.7 3.9 3.5 3.9 1.6 0 3.2-1.2 4.6-3.6 1.4-2.8 3-5.5 3-5.5zM72 53.5c.1.1.1.1.2.1.4 0 .7-.1 1.1-.1 1.3 0 2.5.2 3.6.6 4.6-11.8 3.9-18.1-2.2-31.6h-5.1c5.2 11.5 5.9 20.4 2.4 31zM61.7 58.1c1-1 2.4-1.7 4-1.7 2.1 0 3.9 1.1 4.9 2.8.8-.3 1.8-.6 2.8-.6 3.7 0 6.8 3.1 6.8 6.7 0 3.7-3.1 6.7-6.8 6.7-.4 0-.9 0-1.3-.1-.8 1.5-2.5 2.5-4.3 2.5-.8 0-1.5-.2-2.2-.5-.9 2-2.9 3.4-5.2 3.4-2.5 0-4.5-1.5-5.3-3.6-.3 0-.7.1-1.1.1-2.9 0-5.3-2.3-5.3-5.2 0-1.9 1-3.6 2.6-4.5-.3-.7-.5-1.5-.5-2.4 0-3.3 2.8-6 6.1-6 1.9 0 3.7.9 4.8 2.4z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_sobject";
freezeTemplate(tmpl);
