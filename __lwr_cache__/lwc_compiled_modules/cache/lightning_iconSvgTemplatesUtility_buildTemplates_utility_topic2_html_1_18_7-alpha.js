import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./topic2.css";

import _implicitScopedStylesheets from "./topic2.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M49.2 13.3h-6.5l2.8-10.7v-.2c0-.4-.3-.8-.8-.8h-5.2c-.4 0-.7.3-.8.7l-2.8 11.1h-13l2.8-10.7v-.3c0-.4-.3-.8-.8-.8h-5.2c-.4 0-.7.3-.8.7l-2.9 11H8.8c-.4 0-.7.2-.8.6l-1.3 4.9v.2c0 .4.3.8.8.8h6.8l-3.2 12.5h-7c-.4 0-.7.2-.8.6L2 37.6v.2c0 .4.3.8.8.8h6.6L6.6 49.5v.2c0 .4.3.8.8.8h5.2c.4 0 .7-.2.8-.7l2.9-11.2h12.9l-2.8 10.8v.2c0 .4.3.8.8.8h5.2c.4 0 .7-.2.8-.7L36 38.5h7.1c.4 0 .7-.2.8-.7l1.3-4.9v-.2c0-.4-.3-.8-.8-.8h-6.7L41 19.4h6.9c.4 0 .7-.2.8-.7l1.3-4.9v-.2s-.4-.3-.8-.3zm-18.3 19H18l3.2-12.5h12.9l-3.2 12.5z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_topic2";
freezeTemplate(tmpl);
