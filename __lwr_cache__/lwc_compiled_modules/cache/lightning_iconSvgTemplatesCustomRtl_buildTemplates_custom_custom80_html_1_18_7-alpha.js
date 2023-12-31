import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom80.css";

import _implicitScopedStylesheets from "./custom80.scoped.css?scoped=true";

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
    "d": "M29 60c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 14c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zM71 60c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 14c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M70.4 54c2.199-.1 4.3.3 6.3 1 1 .4 2.1-.1 2.6-1 5.101-9.7-3.1-14.2-8.3-16.8-1.4-.6-3 .3-3 1.8v5.8c0 1.2-.8 2.4-2 2.2-7.4-1.2-14-9-22-9s-9 8-9 8c-5.6 0-11.1-.4-13.6-1-1.2-.3-2.4.7-2.4 2 0 0 0 7 10 7 8.2 0 15 6 15.9 14.2.2 2.2 0 4.399-.6 6.3-.2.7.3 1.4 1.1 1.4h9.2c.801 0 1.301-.7 1.101-1.4-.601-1.9-.8-3.9-.601-6 .7-7.8 7.3-14.2 15.3-14.5zM19 47zM45.3 31.5c.1.8.7 1.5 1.4 1.7l10.6 3.6c1 .3 2-.1 2.5-1l.9-1.7c.399-.7-.101-1.5-.8-1.6-3.101-.3-9.601-1.5-7.7-5 1.7-3 5.2-2.2 7.5-1.2.899.4 1.8-.6 1.399-1.5-1.5-3.2-5-5.2-8.699-4.8-4.7.5-8 5.1-7.4 9.8l.3 1.7z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustomRtl_custom80";
freezeTemplate(tmpl);
