import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./webex.css";

import _implicitScopedStylesheets from "./webex.scoped.css?scoped=true";

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
    "d": "M5.152.011A5.074 5.074 0 00.078 5.085v53.841A5.074 5.074 0 005.152 64h45.773A5.075 5.075 0 0056 58.926V20.32L37.098.011H5.152z",
    "fill": "#3BA755"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M55.977 20.352v1H43.178s-6.312-1.26-6.129-6.707c0 0 .208 5.707 6.004 5.707h12.924z",
    "fill": "#22683E"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "d": "M37.074 0v14.561c0 1.656 1.104 5.791 6.104 5.791h12.799L37.074 0z",
    "fill": "#CDEFC4"
  },
  key: 5,
  svg: true
};
const stc5 = {
  attrs: {
    "d": "M20.463 53.854c5.161-.271 9.261-4.538 9.261-9.767a9.78 9.78 0 00-9.26-9.767l-.001 19.534z",
    "fill": "#CDEFC4"
  },
  key: 6,
  svg: true
};
const stc6 = {
  attrs: {
    "d": "M19.338 53.852c-5.119-.316-9.174-4.565-9.174-9.764s4.056-9.447 9.174-9.763v19.527z",
    "fill": "#fff"
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
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("path", stc2), api_element("path", stc3), api_element("path", stc4)]), api_element("path", stc5), api_element("path", stc6)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesDoctype_webex";
freezeTemplate(tmpl);
