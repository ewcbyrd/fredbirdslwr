import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./location.css";

import _implicitScopedStylesheets from "./location.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M48.8 9.5L34.4 2.3c-.7-.3-1.5-.3-2.1 0L19 9 5.6 2.3c-.8-.4-1.8-.4-2.5.1-.7.4-1.1 1.2-1.1 2v36c0 .9.5 1.7 1.3 2.1l14.4 7.2c.7.3 1.5.3 2.1 0L33.2 43l13.3 6.7c.3.2.7.3 1.1.3.4 0 .9-.1 1.3-.4.7-.4 1.1-1.2 1.1-2v-36c0-.9-.4-1.7-1.2-2.1zM45 14.1v19c0 1.1-1 1.9-2 1.5-3.7-1.4-.7-7.6-3.4-11-2.5-3.1-5.7.1-8.8-4.8-2.9-4.7 1-8.1 4.6-9.9.5-.2 1-.2 1.4 0l7.4 3.7c.6.3.8.9.8 1.5zM24.9 41.9c-.6.3-1.3.2-1.8-.2-1-.9-1.8-2.3-1.8-3.7 0-2.4-4-1.6-4-6.4 0-3.9-4.6-4.9-8.5-4.5-1 .1-1.7-.6-1.7-1.6V10.9c0-1.2 1.2-2 2.2-1.4l8.6 4.3c.1 0 .2.1.2.1l.3.2c3.6 2.1 2.9 3.8 1.4 6.4-1.7 2.9-2.4 0-4.8-.8s-4.8.8-4 2.4 3.2 0 4.8 1.6 1.6 4 6.4 2.4 5.6-.8 7.2.8c1.6 1.6 2.4 4.8 0 7.2-1.4 1.4-2 4.4-2.6 6.4-.1.4-.4.8-.8 1l-1.1.4z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_location";
freezeTemplate(tmpl);
