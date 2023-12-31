import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./keynote.css";

import _implicitScopedStylesheets from "./keynote.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M5.143.005A5.073 5.073 0 00.071 5.079V58.92a5.073 5.073 0 005.072 5.074h45.775a5.075 5.075 0 005.075-5.074V20.314L37.088.005H5.143z",
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    "fill": "#F38303"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M17.819 54.013a.73.73 0 01-.54-.252l-4.429-5.275-1.207 1.368v3.403a.734.734 0 01-.756.738.73.73 0 01-.738-.738V42.489c0-.396.324-.72.774-.72.396 0 .72.323.72.72v5.6l5.186-6.067a.674.674 0 01.522-.234c.396 0 .738.306.738.702a.597.597 0 01-.162.414l-4.105 4.682 4.555 5.275a.648.648 0 01.162.433c.001.341-.288.719-.72.719zm10.926-.126h-6.248a1.084 1.084 0 01-1.081-1.08v-9.85c0-.594.486-1.08 1.081-1.08h6.248c.36 0 .648.288.648.685 0 .36-.288.648-.648.648h-5.833v3.871h5.708c.36 0 .648.288.648.684 0 .36-.288.648-.648.648h-5.708v4.142h5.833c.36 0 .648.288.648.647.001.397-.288.685-.648.685zm12.384-11.02l-4.033 5.942v4.447a.734.734 0 01-.756.738.73.73 0 01-.739-.738V48.81l-4.051-5.942a.674.674 0 01-.126-.378c0-.342.27-.72.72-.72.216 0 .468.107.612.306l3.583 5.384 3.583-5.384a.725.725 0 01.576-.288c.396 0 .738.324.738.702a.695.695 0 01-.107.377z",
    "fill": "#371E03"
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
    "fill": "#A96404"
  },
  key: 5,
  svg: true
};
const stc5 = {
  attrs: {
    "d": "M37.074 0v14.561c0 1.656 1.104 5.791 6.104 5.791h12.799L37.074 0z",
    "fill": "#FFBA90"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesDoctype_keynote";
freezeTemplate(tmpl);
