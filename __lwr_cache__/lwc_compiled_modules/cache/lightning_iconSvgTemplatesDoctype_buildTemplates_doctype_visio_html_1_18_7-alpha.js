import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./visio.css";

import _implicitScopedStylesheets from "./visio.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M5.111.006A5.073 5.073 0 00.039 5.08v53.841a5.073 5.073 0 005.072 5.074h45.775a5.074 5.074 0 005.074-5.074V20.315L37.057.006H5.111z",
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    "fill": "#0B5CAB"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M20.915 42.686l-4.16 10.334c-.198.486-.684.81-1.188.81h-.036a1.316 1.316 0 01-1.207-.81l-4.141-10.334a.755.755 0 01-.054-.289c0-.36.324-.792.811-.792.306 0 .594.181.72.486l3.889 9.993 3.889-9.993a.767.767 0 01.72-.486c.468 0 .81.378.81.792 0 .09-.018.198-.053.289zm3.147 11.144a.73.73 0 01-.738-.738V42.325c0-.396.324-.721.774-.721.396 0 .72.324.72.721v10.767a.734.734 0 01-.756.738zm7.902.108c-1.782 0-3.187-.594-4.213-1.495a.71.71 0 01-.234-.54c0-.36.27-.756.702-.756.144 0 .306.036.432.145.829.738 1.981 1.314 3.367 1.314 2.143 0 2.827-1.152 2.827-2.071 0-3.097-7.112-1.386-7.112-5.672 0-1.98 1.764-3.33 4.123-3.33 1.548 0 2.881.467 3.853 1.277a.731.731 0 01.252.541c0 .359-.306.72-.702.72a.68.68 0 01-.432-.162c-.882-.72-1.98-1.044-3.079-1.044-1.44 0-2.467.774-2.467 1.909 0 2.701 7.112 1.152 7.112 5.636.001 1.746-1.188 3.528-4.429 3.528z",
    "fill": "#fff"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "d": "M55.977 20.352v1H43.178s-6.312-1.26-6.129-6.707c0 0 .208 5.707 6.004 5.707h12.924z",
    "fill": "#032D60"
  },
  key: 5,
  svg: true
};
const stc5 = {
  attrs: {
    "d": "M37.074 0v14.561c0 1.656 1.104 5.791 6.104 5.791h12.799L37.074 0z",
    "fill": "#AACBFF"
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
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2), api_element("g", stc3, [api_element("path", stc4), api_element("path", stc5)])])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesDoctype_visio";
freezeTemplate(tmpl);
