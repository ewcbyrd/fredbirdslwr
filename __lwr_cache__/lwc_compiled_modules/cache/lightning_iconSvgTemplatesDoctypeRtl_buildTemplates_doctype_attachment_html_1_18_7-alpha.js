import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./attachment.css";

import _implicitScopedStylesheets from "./attachment.scoped.css?scoped=true";

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
    "d": "M5.113-.026A5.074 5.074 0 00.039 5.048v53.841a5.073 5.073 0 005.074 5.074h45.773a5.074 5.074 0 005.074-5.074V20.284L37.059-.026H5.113z",
    "fill": "#747474"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M55.977 20.352v1H43.178s-6.312-1.26-6.129-6.707c0 0 .208 5.707 6.004 5.707h12.924z",
    "fill": "#5C5C5C"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "d": "M37.074 0v14.561c0 1.656 1.104 5.791 6.104 5.791h12.799L37.074 0z",
    "fill": "#C9C9C9"
  },
  key: 5,
  svg: true
};
const stc5 = {
  attrs: {
    "d": "M26.6 41.467c1.134-1.134 1.134-2.986 0-4.12s-2.986-1.134-4.12 0l-9.167 9.167c-1.134 1.134-1.134 2.986 0 4.12s2.986 1.134 4.12 0l5.625-5.602c.324-.324.324-.856 0-1.181s-.856-.324-1.181 0l-3.542 3.519a1.204 1.204 0 01-1.759 0 1.204 1.204 0 010-1.759l3.519-3.542c1.319-1.296 3.426-1.296 4.722 0 1.296 1.319 1.296 3.426 0 4.722l-5.625 5.625c-2.106 2.106-5.532 2.106-7.662 0-2.106-2.129-2.106-5.555 0-7.662l9.166-9.167c2.13-2.129 5.556-2.129 7.662 0 2.129 2.106 2.129 5.532 0 7.662l-.903.902a4.968 4.968 0 00-.926-2.616l.071-.068z",
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
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("path", stc2), api_element("path", stc3), api_element("path", stc4)]), api_element("path", stc5)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesDoctypeRtl_attachment";
freezeTemplate(tmpl);
