import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./social.css";

import _implicitScopedStylesheets from "./social.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M70 57c-4.8 0-8.9 3.4-9.8 8H47c-.6 0-1 .5-1 1.1v.9c0 1-.1 1.9-.3 2.8-.1.6.4 1.2 1 1.2h14.1c1.5 3.5 5.1 6 9.2 6 5.5 0 10-4.5 10-10s-4.5-10-10-10zM43.3 45.5c-1.2-.5-2.3-1.2-3.3-2-.5-.4-1.2-.2-1.5.3l-7.1 13.3c-.4-.1-.9-.1-1.4-.1-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10c0-2.9-1.2-5.4-3.1-7.3l6.9-12.8c.2-.5 0-1.1-.5-1.4zM50 41c1 0 1.9-.1 2.8-.4l6.9 12.7c.3.5.9.7 1.4.4 1.1-.7 2.2-1.3 3.4-1.7.6-.2.8-.9.5-1.4l-7.2-13.4c1.3-1.7 2.2-3.9 2.2-6.2 0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_social";
freezeTemplate(tmpl);
