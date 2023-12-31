import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./product_quantity_rules.css";

import _implicitScopedStylesheets from "./product_quantity_rules.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M21.45 32.64H5.36a1.29 1.29 0 00-1.28 1.29v1.28a1.28 1.28 0 001.28 1.28h16.09a1.28 1.28 0 001.28-1.28v-1.28a1.29 1.29 0 00-1.28-1.29zM21.45 41.66H5.36A1.29 1.29 0 004.08 43v1.32a1.28 1.28 0 001.28 1.28h16.09a1.28 1.28 0 001.28-1.28V43a1.29 1.29 0 00-1.24-1.34zM46.65 32.64H30.57a1.29 1.29 0 00-1.28 1.29v1.28a1.28 1.28 0 001.28 1.28h16.08a1.28 1.28 0 001.29-1.27v-1.29a1.29 1.29 0 00-1.29-1.29zM46.65 41.66H30.57A1.29 1.29 0 0029.29 43v1.32a1.28 1.28 0 001.28 1.28h16.08a1.28 1.28 0 001.29-1.27V43a1.29 1.29 0 00-1.24-1.34zM38.61 6.52a10.17 10.17 0 1010.17 10.17A10.19 10.19 0 0038.61 6.52zm5 10.88a.63.63 0 01-.61.6h-8.79a.6.6 0 01-.64-.55 8.66 8.66 0 010-1.44.66.66 0 01.64-.55H43a.64.64 0 01.63.55 9.22 9.22 0 010 1.39zM20.63 9.45a10.21 10.21 0 100 14.44 10.21 10.21 0 000-14.44zm-.43 8.07a.4.4 0 01-.38.42h-4.71a.45.45 0 00-.43.43V23a.44.44 0 01-.42.42h-1.7a.4.4 0 01-.43-.37v-4.68a.4.4 0 00-.37-.43H7a.4.4 0 01-.43-.37v-1.75a.45.45 0 01.43-.43h4.67a.4.4 0 00.42-.38V10.3a.47.47 0 01.43-.43h1.7a.42.42 0 01.42.42V15a.4.4 0 00.38.42h4.72a.45.45 0 01.42.43z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_product_quantity_rules";
freezeTemplate(tmpl);
