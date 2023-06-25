import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./pages.css";

import _implicitScopedStylesheets from "./pages.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M5.111-.006A5.073 5.073 0 00.039 5.068v53.841a5.073 5.073 0 005.072 5.074h45.775a5.074 5.074 0 005.074-5.074V20.304L37.057-.006H5.111z",
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    "fill": "#5867E8"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M14.959 49.006h-3.331v4.142a.734.734 0 01-.756.738.73.73 0 01-.738-.738v-10.3c0-.594.486-1.08 1.081-1.08h3.745c2.413 0 3.763 1.656 3.763 3.619s-1.388 3.619-3.764 3.619zm-.18-5.905h-3.151v4.573h3.151c1.422 0 2.395-.937 2.395-2.287s-.973-2.286-2.395-2.286zm12.06 10.911c-3.421 0-6.176-2.503-6.176-6.23 0-3.727 2.754-6.212 6.176-6.212 1.8 0 3.169.685 4.123 1.639.144.126.198.324.198.504 0 .396-.288.703-.684.703a.669.669 0 01-.486-.217c-.756-.81-1.963-1.296-3.151-1.296-2.629 0-4.627 2.017-4.627 4.879 0 2.845 1.999 4.897 4.627 4.897 1.44 0 2.628-.702 3.223-1.296v-2.449h-3.583c-.36 0-.648-.288-.648-.684 0-.36.288-.648.648-.648h3.998c.594 0 1.08.486 1.08 1.08v2.377c-.001 1.854-2.594 2.953-4.718 2.953zm11.483-.019c-1.782 0-3.187-.594-4.213-1.494a.712.712 0 01-.234-.54c0-.36.27-.757.702-.757.144 0 .306.036.432.145.828.738 1.98 1.314 3.367 1.314 2.143 0 2.827-1.152 2.827-2.07 0-3.098-7.112-1.387-7.112-5.672 0-1.98 1.764-3.331 4.123-3.331 1.548 0 2.881.468 3.853 1.278a.73.73 0 01.252.54c0 .36-.306.72-.703.72a.684.684 0 01-.432-.161c-.882-.721-1.98-1.045-3.079-1.045-1.44 0-2.467.774-2.467 1.909 0 2.7 7.112 1.152 7.112 5.635.001 1.747-1.187 3.529-4.428 3.529z",
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
    "d": "M55.976 20.352v1H43.177s-6.312-1.26-6.129-6.707c0 0 .208 5.707 6.004 5.707h12.924z",
    "fill": "#2F2CB7"
  },
  key: 5,
  svg: true
};
const stc5 = {
  attrs: {
    "d": "M37.074 0v14.561c0 1.656 1.104 5.791 6.104 5.791h12.799L37.074 0z",
    "fill": "#BEC7F6"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesDoctypeRtl_pages";
freezeTemplate(tmpl);
