import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./captions.css";

import _implicitScopedStylesheets from "./captions.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M23.39 12.17c-2.05-.57-4.16-.84-6.29-.8-4.06-.16-8 1.37-10.9 4.22A14.978 14.978 0 001.99 26.6c-.18 3.76 1.17 7.44 3.73 10.2 2.51 2.55 5.94 3.82 10.27 3.82 2.54.08 5.07-.33 7.46-1.21.39-.16.64-.55.64-1.34L24.04 35a.86.86 0 00-.09-.39c-.23-.52-.83-.76-1.35-.53-1.7.73-3.54 1.09-5.39 1.08-2.3.09-4.54-.79-6.16-2.42a9.169 9.169 0 01-2.31-6.55c-.13-2.5.75-4.95 2.46-6.78 1.7-1.7 4.03-2.61 6.43-2.51 1.73-.02 3.44.31 5.03.97.13.06.27.08.4.09.57 0 1.03-.45 1.03-1.02v-3.73c.02-.46-.26-.88-.7-1.03zM49.8 34.57c-.23-.52-.83-.76-1.35-.53-1.7.73-3.54 1.09-5.39 1.08-2.3.09-4.54-.79-6.16-2.42a9.169 9.169 0 01-2.31-6.55c-.13-2.5.75-4.94 2.44-6.78 1.7-1.7 4.04-2.61 6.44-2.51 1.73 0 3.45.33 5.04 1.01.13.06.27.08.4.09.57 0 1.03-.45 1.03-1.02v-3.73c.02-.46-.26-.88-.7-1.03-2.05-.57-4.16-.84-6.29-.8-4.06-.16-8 1.37-10.9 4.22a14.967 14.967 0 00-4.18 11.01c-.18 3.76 1.17 7.44 3.73 10.2 2.51 2.55 5.94 3.82 10.27 3.82 2.54.08 5.07-.33 7.45-1.21.4-.16.65-.55.65-1.31l-.09-3.13a.86.86 0 00-.09-.39z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_captions";
freezeTemplate(tmpl);
