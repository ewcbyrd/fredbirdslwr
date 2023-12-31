import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom56.css";

import _implicitScopedStylesheets from "./custom56.scoped.css?scoped=true";

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
    "d": "M62.7 30.3c-6.3 6.3-13.9-1.4-20.9 5.6L21.7 56c-2.3 2.3-2.3 6 0 8.3l7 7 7 7c2.3 2.3 6 2.3 8.3 0l20.2-20.2c7-7-.7-14.6 5.6-20.899l1.601-1.6c.399-.4.399-1 0-1.4l-5.5-5.5c-.4-.4-1-.4-1.4 0L62.7 30.3zM57.9 56l-7 7c-.8.8-2 .8-2.8 0l-5.6-5.6-5.6-5.6c-.8-.8-.8-2 0-2.8l7-7c.8-.8 2-.8 2.8 0l5.6 5.6 5.601 5.6c.799.8.799 2-.001 2.8zM79.4 24.7l-2.1-2.1-2.1-2.1c-.8-.8-2-.8-2.8 0l-2.6 2.6c-.399.4-.399 1 0 1.4l5.5 5.5c.4.4 1 .4 1.4 0l2.6-2.6c.9-.6.9-1.9.1-2.7z"
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
      "viewBox": "0 0 100 100",
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustomRtl_custom56";
freezeTemplate(tmpl);
