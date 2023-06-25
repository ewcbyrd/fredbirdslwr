import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./custom29.css";

import _implicitScopedStylesheets from "./custom29.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M73.9 28h-1.8c-1.2 0-2.1 1-2.1 2.2V70c0 .1 0 .3.1.4l2.5 3.5c.2.199.5.199.801 0l2.5-3.5c.099-.1.099-.2.099-.4V30.2c0-1.2-.9-2.2-2.1-2.2zM58 20H30c-3.3 0-6 2.7-6 6v48c0 3.3 2.7 6 6 6h28c3.3 0 6-2.7 6-6V26c0-3.3-2.7-6-6-6zM44 78c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3zm14-10c0 1.1-.9 2-2 2H32c-1.1 0-2-.9-2-2V30c0-1.1.9-2 2-2h24c1.1 0 2 .9 2 2v38z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesCustomRtl_custom29";
freezeTemplate(tmpl);
