import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./asset_hierarchy.css";

import _implicitScopedStylesheets from "./asset_hierarchy.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M51.26 56.05c-1.97 2.7-3.03 5.95-3.04 9.28-.02.99.12 1.98.42 2.92H37.82v2.61a2.538 2.538 0 01-2.52 2.5h-2.94a2.538 2.538 0 01-2.52-2.5v-2.61h-5.57a2.538 2.538 0 01-2.52-2.5V22.46a2.538 2.538 0 012.52-2.5h43.58c1.38.01 2.5 1.12 2.52 2.5v27.85c-3.2-1.32-6.76-1.51-10.08-.52V37.38a.84.84 0 00-.26-.68.874.874 0 00-.69-.25h-1.79a.874.874 0 00-.69.25.91.91 0 00-.26.68v13.25c0 .21 0 .31.1.42-1.1.61-2.12 1.34-3.05 2.19H32.44a.874.874 0 00-.69.25.91.91 0 00-.26.68v.94c-.02.25.07.5.26.68.12.12.27.2.44.24.08.02.17.02.25.02h18.8zm-9.08-4.53c.18-.18.27-.43.25-.68V37.38a.866.866 0 00-.94-.93H39.7a.874.874 0 00-.69.25c-.18.18-.28.43-.26.68v13.46c-.02.25.07.5.26.68.18.18.43.27.69.25h1.78c.26.02.51-.07.69-.25zm8.09 0a.91.91 0 00.26-.68V37.38a.84.84 0 00-.26-.68.874.874 0 00-.69-.25h-3.57a.874.874 0 00-.69.25.91.91 0 00-.26.68v13.46c-.02.25.07.5.26.68.18.18.43.27.69.25h3.57c.26.02.51-.07.69-.25zm2.78.25c.52 0 .95-.42.95-.94V37.37c0-.52-.42-.94-.94-.94a.93.93 0 00-.94.93v13.46c0 .52.42.94.94.94zM31.88 32.21a.91.91 0 00-.26.68h-.11v.94c-.02.25.07.5.26.68.18.18.43.27.69.25h27.09c.26.02.51-.07.69-.25a.91.91 0 00.26-.68v-.94a.84.84 0 00-.26-.68.874.874 0 00-.69-.25H32.56a.874.874 0 00-.69.25zm-.2 4.8c-.04.12-.06.24-.05.37v13.46c-.02.25.07.5.26.68.18.18.43.27.69.25h3.57c.26.02.51-.07.69-.25.18-.18.28-.43.26-.68V37.38c.02-.25-.08-.5-.26-.68a.874.874 0 00-.69-.25h-3.57a.87.87 0 00-.89.57z",
    "fill-rule": "evenodd"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M79.25 65.8c0-7.81-6.38-14.15-14.25-14.15S50.75 57.99 50.75 65.8 57.13 79.95 65 79.95s14.25-6.34 14.25-14.15zm-14.99-1.18H60.2c-.25 0-.45.2-.45.45v3.44h-1.36c-.25 0-.45.2-.45.45v3.29c0 .24.21.45.45.45h4.52c.09 0 .18-.03.26-.09.12-.08.19-.22.19-.36v-3.29c0-.25-.21-.44-.45-.45h-1.36v-2.09h7.24v2.09h-1.35c-.25 0-.45.2-.45.45v3.29c0 .24.21.45.45.45h4.52c.24 0 .45-.21.45-.45v-3.29c0-.25-.21-.44-.45-.45h-1.37v-3.44c0-.25-.21-.44-.45-.45h-4.07v-2.09h1.35a.458.458 0 00.45-.45v-3.29c0-.25-.21-.44-.45-.45H62.9c-.12 0-.24.05-.32.14-.08.08-.13.19-.13.31v3.29c0 .24.21.45.45.45h1.36v2.09z",
    "fill-rule": "evenodd"
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
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_asset_hierarchy";
freezeTemplate(tmpl);
