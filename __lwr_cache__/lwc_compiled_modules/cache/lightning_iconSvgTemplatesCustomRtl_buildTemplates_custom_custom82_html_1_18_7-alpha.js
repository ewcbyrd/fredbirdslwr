import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom82.css";

import _implicitScopedStylesheets from "./custom82.scoped.css?scoped=true";

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
    "d": "M80 44H59c-1.1 0-2 .9-2 2v1c0 1.6-1.3 3-3 3-1.6 0-3-1.3-3-3v-1c0-1.1-.9-2-2-2h-5 .1c-5.9.3-11 3.7-13.8 8.6-1-.399-2.1-.6-3.2-.6-5 0-9 4-9 9s4 9 9 9c1.1 0 2.2-.2 3.2-.6 2.8 4.899 8 8.3 13.8 8.6 9.8.5 17.9-7.3 17.9-17 0-.6 0-1.2-.1-1.8-.101-1 .6-2 1.6-2.2l16.9-3.7c.899-.2 1.6-1 1.6-2V46c0-1.1-.9-2-2-2zM27 64c-1.7 0-3-1.3-3-3s1.3-3 3-3c.4 0 .9.1 1.2.3-.2 1.2-.2 2.5-.2 3.8 0 .601.1 1.101.2 1.601-.4.199-.8.299-1.2.299zM54 37c1.7 0 3-1.3 3-3v-9c0-1.7-1.3-3-3-3s-3 1.3-3 3v9c0 1.7 1.3 3 3 3zM39.7 38c.6.7 1.4 1 2.3 1 .7 0 1.4-.2 2-.7 1.3-1.1 1.4-3 .3-4.2l-6-7c-1.1-1.3-3-1.4-4.2-.3-1.3 1.1-1.4 3-.3 4.2l5.9 7zM66 39c.8 0 1.7-.4 2.3-1l6-7c1.101-1.3.9-3.2-.3-4.2-1.3-1.1-3.2-.9-4.2.3l-6 7c-1.1 1.3-.899 3.2.3 4.2.5.5 1.2.7 1.9.7z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustomRtl_custom82";
freezeTemplate(tmpl);
