import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom78.css";

import _implicitScopedStylesheets from "./custom78.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M78.3 29.3l-18-9c-.8-.4-1.8-.4-2.7 0L41 28.6l-16.7-8.3c-.9-.5-2-.4-2.9.1C20.5 21 20 22 20 23v45c0 1.1.6 2.2 1.7 2.7l18 9c.8.399 1.8.399 2.7 0L59 71.4l16.7 8.3c.4.2.9.3 1.3.3.5 0 1.1-.2 1.6-.4C79.5 79 80 78 80 77V32c0-1.1-.6-2.2-1.7-2.7zM74 35.1v23.7c0 1.4-1.4 2.4-2.7 1.9-4.6-1.8-1-9.5-4.3-13.7-3.1-3.9-7.2.1-11-6-3.7-5.9 1.3-10.1 5.7-12.4.6-.3 1.2-.3 1.8 0l9.3 4.7c.8.3 1.2 1 1.2 1.8zM48.5 69.9c-.7.399-1.6.3-2.2-.301C45 68.5 44 66.7 44 65c0-3-5-2-5-8 0-4.8-5.9-6.2-10.8-5.7-1.2.1-2.2-.8-2.2-2V31.1c0-1.5 1.6-2.5 2.9-1.8l10.8 5.4c.1 0 .2.1.3.1l.4.2c4.5 2.6 3.6 4.8 1.7 8-2.1 3.6-3 0-6-1s-6 1-5 3 4 0 6 2 2 5 8 3 7-1 9 1 3 6 0 9c-1.8 1.8-2.5 5.4-3.3 8-.2.5-.5 1-1 1.3l-1.3.6z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustom_custom78";
freezeTemplate(tmpl);
