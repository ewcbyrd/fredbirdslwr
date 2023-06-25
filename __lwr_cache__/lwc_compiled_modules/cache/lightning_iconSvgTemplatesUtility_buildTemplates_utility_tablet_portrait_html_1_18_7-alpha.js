import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./tablet_portrait.css";

import _implicitScopedStylesheets from "./tablet_portrait.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M46 6c0-2.2-1.8-4-4-4H10C7.8 2 6 3.8 6 6v40c0 2.2 1.8 4 4 4h32c2.2 0 4-1.8 4-4V6zM25.9 48c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.4 3-3 3zM40 38.5c0 .8-.7 1.5-1.5 1.5h-25c-.8 0-1.5-.7-1.5-1.5v-29c0-.8.7-1.5 1.5-1.5h25c.8 0 1.5.7 1.5 1.5v29z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_tablet_portrait";
freezeTemplate(tmpl);
