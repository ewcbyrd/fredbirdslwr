import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./stypi.css";

import _implicitScopedStylesheets from "./stypi.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M5.072.006A5.073 5.073 0 000 5.08v53.841a5.073 5.073 0 005.072 5.074h45.775a5.074 5.074 0 005.074-5.074V20.315L37.018.006H5.072z",
    "fill": "#FCC003"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M55.977 20.352v1H43.178s-6.312-1.26-6.129-6.707c0 0 .208 5.707 6.004 5.707h12.924z",
    "fill": "#E4A201"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "d": "M37.074 0v14.561c0 1.656 1.104 5.791 6.104 5.791h12.799L37.074 0z",
    "fill": "#F9E3B6"
  },
  key: 5,
  svg: true
};
const stc5 = {
  attrs: {
    "d": "M29.399 34.802H11.768c-.872 0-1.577.706-1.577 1.577v15.99c0 .871.706 1.577 1.577 1.577h13.167l6.04-6.017v-11.55c0-.871-.705-1.577-1.576-1.577z",
    "fill": "#2E2204"
  },
  key: 6,
  svg: true
};
const stc6 = {
  attrs: {
    "fill": "#FCC003",
    "d": "M13.741 43.553h13.675v1.643H13.741zm0-3.555h13.675v1.641H13.741zm0 7.109h8.867v1.643h-8.867z"
  },
  key: 7,
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
      "viewBox": "0 0 56 64",
      "part": "icon"
    },
    key: 0,
    svg: true
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("path", stc2), api_element("path", stc3), api_element("path", stc4), api_element("path", stc5), api_element("path", stc6)])])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesDoctype_stypi";
freezeTemplate(tmpl);
