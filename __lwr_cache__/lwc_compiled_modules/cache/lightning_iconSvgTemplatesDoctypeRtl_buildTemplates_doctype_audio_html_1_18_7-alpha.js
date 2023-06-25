import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./audio.css";

import _implicitScopedStylesheets from "./audio.scoped.css?scoped=true";

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
    "d": "M5.151.012A5.073 5.073 0 00.078 5.085v53.842A5.073 5.073 0 005.151 64h45.774A5.074 5.074 0 0056 58.927V20.321L37.097.012H5.151z",
    "fill": "#0D9DDA"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M56 20.357v1H43.2s-6.312-1.26-6.128-6.707c0 0 .208 5.707 6.003 5.707H56z",
    "fill": "#05628A"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "d": "M37.097.006v14.561c0 1.656 1.104 5.791 6.104 5.791h12.8L37.097.006z",
    "fill": "#90D0FE"
  },
  key: 5,
  svg: true
};
const stc5 = {
  attrs: {
    "d": "M29.798 34.036L15.633 35.85v13.438c-.738-.205-1.628-.243-2.531-.064-2.009.394-3.325 1.702-2.938 2.918.386 1.215 2.325 1.88 4.333 1.48 1.764-.348 2.994-1.397 3.005-2.473h.002v-10.74l10.422-1.288v8.306c-.75-.212-1.655-.251-2.572-.068-2.03.399-3.357 1.718-2.969 2.947.389 1.229 2.35 1.897 4.379 1.499 1.849-.366 3.116-1.494 3.031-2.621V34.036z",
    "fill": "#fff"
  },
  key: 6,
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
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("path", stc2), api_element("path", stc3), api_element("path", stc4), api_element("path", stc5)])])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesDoctypeRtl_audio";
freezeTemplate(tmpl);
