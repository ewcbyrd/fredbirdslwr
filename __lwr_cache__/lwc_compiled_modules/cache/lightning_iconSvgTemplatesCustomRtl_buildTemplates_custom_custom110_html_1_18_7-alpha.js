import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom110.css";

import _implicitScopedStylesheets from "./custom110.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M61.714 20.229H38.286a5.986 5.986 0 00-6.143 5.928v47.536a6.129 6.129 0 006.143 6.071h23.428a6.129 6.129 0 006.143-6.071V26.157a5.986 5.986 0 00-6.143-5.928zm-16.071 3.428h8.714a.55.55 0 01.536.536.607.607 0 01-.536.536h-8.714a.536.536 0 110-1.072zm7.75 51.857a.643.643 0 01-.714.536h-5.536a.55.55 0 01-.536-.536v-2.5c0-.25.286-.643.536-.643h5.571a.714.714 0 01.715.643v2.5h-.036zm10.928-7.357a.629.629 0 01-.678.643H36.357a.629.629 0 01-.714-.643v-39.5a.75.75 0 01.714-.786h27.25c.4.038.7.385.679.786v39.5h.035z",
    "fill-rule": "evenodd"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustomRtl_custom110";
freezeTemplate(tmpl);
