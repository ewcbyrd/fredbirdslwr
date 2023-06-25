import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom113.css";

import _implicitScopedStylesheets from "./custom113.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "fill-rule": "evenodd"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M27.16 59.042h45.735a.64.64 0 00.592-.631V26.816c0-.671-.513-.987-1.184-.987h-44.55c-.632 0-1.303.316-1.303.987v31.579c0 .316.395.631.71.631v.016zm3.893-27.947a.608.608 0 01.592-.592H68.3a.608.608 0 01.592.592v22.697a.608.608 0 01-.592.592H31.621a.608.608 0 01-.592-.592V31.095h.024zM79.463 73.34l-5.842-11.843a.663.663 0 00-.513-.355H26.884a.663.663 0 00-.513.355L20.53 73.34a1.255 1.255 0 001.05 1.856H78.42a1.263 1.263 0 001.026-1.856h.016zm-23.479-.735h-11.92a.387.387 0 01-.277-.552l1.697-3.237a.663.663 0 01.513-.355h8.014c.204.009.393.11.513.276l1.697 3.316c.118.197 0 .552-.237.552z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustom_custom113";
freezeTemplate(tmpl);
