import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom40.css";

import _implicitScopedStylesheets from "./custom40.scoped.css?scoped=true";

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
    "d": "M74 28H26c-3.3 0-6 2.7-6 6v34c0 3.3 2.7 6 6 6h48c3.3 0 6-2.7 6-6V34c0-3.3-2.7-6-6-6zm0 6v6H26v-6h48zM26 68V50h48v18H26z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M43.1 55c-1.4 0-2.6.7-3.3 1.8-.1.2-.4.2-.5 0-.7-1.1-1.9-1.8-3.3-1.8-2.2 0-4 1.8-4 4s1.8 4 4 4c1.4 0 2.6-.7 3.3-1.8.1-.2.4-.2.5 0 .7 1.1 1.9 1.8 3.3 1.8h.1c2.1 0 3.9-1.7 3.9-3.9v-.2c-.1-2.2-1.8-3.9-4-3.9zM66 56H54c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2z"
  },
  key: 4,
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
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("path", stc2), api_element("path", stc3)])])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustomRtl_custom40";
freezeTemplate(tmpl);
