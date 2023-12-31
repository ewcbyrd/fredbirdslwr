import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./eps.css";

import _implicitScopedStylesheets from "./eps.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M5.106.009A5.074 5.074 0 00.033 5.083v53.841a5.073 5.073 0 005.073 5.074H50.88a5.074 5.074 0 005.074-5.074V20.319L37.052.009H5.106z",
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    "fill": "#FCC003"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M17.45 53.912h-6.248a1.085 1.085 0 01-1.081-1.081v-9.849c0-.595.486-1.081 1.081-1.081h6.248c.36 0 .648.288.648.685a.645.645 0 01-.648.647h-5.833v3.871h5.708c.36 0 .648.288.648.685 0 .36-.288.648-.648.648h-5.708v4.141h5.833c.36 0 .648.288.648.648 0 .397-.288.686-.648.686zm8.189-4.772h-3.331v4.141a.734.734 0 01-.756.738.73.73 0 01-.738-.738V42.982c0-.595.486-1.081 1.081-1.081h3.745c2.413 0 3.763 1.657 3.763 3.619-.001 1.963-1.387 3.62-3.764 3.62zm-.18-5.906h-3.151v4.573h3.151c1.422 0 2.395-.936 2.395-2.287 0-1.35-.973-2.286-2.395-2.286zm10.259 10.893c-1.782 0-3.187-.594-4.213-1.495a.71.71 0 01-.234-.54c0-.361.27-.757.702-.757.144 0 .306.036.432.144.829.739 1.981 1.314 3.367 1.314 2.143 0 2.827-1.152 2.827-2.071 0-3.097-7.112-1.386-7.112-5.672 0-1.98 1.764-3.331 4.123-3.331 1.548 0 2.881.468 3.853 1.279a.73.73 0 01.252.54c0 .36-.306.72-.702.72a.68.68 0 01-.432-.162c-.882-.72-1.98-1.044-3.079-1.044-1.44 0-2.467.774-2.467 1.909 0 2.701 7.112 1.152 7.112 5.636.001 1.748-1.188 3.53-4.429 3.53z",
    "fill": "#2E2204"
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
    "d": "M56 20.357v1H43.201c-2.438 0-6.312-1.26-6.128-6.707 0 0 .208 5.707 6.003 5.707H56z",
    "fill": "#E4A201"
  },
  key: 5,
  svg: true
};
const stc5 = {
  attrs: {
    "d": "M37.097.006v14.561c0 1.656 1.104 5.791 6.104 5.791H56L37.097.006z",
    "fill": "#F9E3B6"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesDoctypeRtl_eps";
freezeTemplate(tmpl);
