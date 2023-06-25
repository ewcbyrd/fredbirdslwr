import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./share_poll.css";

import _implicitScopedStylesheets from "./share_poll.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M46.8 2H5.2C3.4 2 2 3.4 2 5.2v6.4c0 1.8 1.4 3.2 3.2 3.2h41.6c1.8 0 3.2-1.4 3.2-3.2V5.2C50 3.4 48.6 2 46.8 2zm-20 9.6V5.2h20v6.4h-20zM46.8 19.6H5.2C3.4 19.6 2 21 2 22.8v6.4c0 1.8 1.4 3.2 3.2 3.2h41.6c1.8 0 3.2-1.4 3.2-3.2v-6.4c0-1.8-1.4-3.2-3.2-3.2zm-27.2 9.6v-6.4h27.2v6.4H19.6zM46.8 37.2H5.2c-1.8 0-3.2 1.4-3.2 3.2v6.4C2 48.6 3.4 50 5.2 50h41.6c1.8 0 3.2-1.4 3.2-3.2v-6.4c0-1.8-1.4-3.2-3.2-3.2zM34 46.8v-6.4h12.8v6.4H34z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesAction_share_poll";
freezeTemplate(tmpl);
