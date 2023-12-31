import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./identifier.css";

import _implicitScopedStylesheets from "./identifier.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M79.67 76.69l-6.57-6.52a10.22 10.22 0 10-18.69-6.63 9.55 9.55 0 000 2 10.22 10.22 0 0015.8 7.55l6.54 6.55a1.28 1.28 0 001.78 0l1.09-1.09a1.39 1.39 0 00.05-1.86zm-15.08-6.06a6.06 6.06 0 01-6.13-6v-.13a6.13 6.13 0 116.13 6.13zM22.87 44.32h6.27v3.78A1.9 1.9 0 0031 50h1.9a1.9 1.9 0 001.9-1.9v-3.78h6.3a2.87 2.87 0 002.9-2.84V22.9a2.88 2.88 0 00-2.86-2.9H22.88A2.89 2.89 0 0020 22.9v18.53a2.88 2.88 0 002.87 2.89zm3.47-13.11a1.9 1.9 0 011.9-1.9h7.5a1.9 1.9 0 011.9 1.9v1.9a1.9 1.9 0 01-1.9 1.9h-7.5a1.9 1.9 0 01-1.9-1.9zM56 41.43a2.86 2.86 0 002.85 2.89H77.1a2.88 2.88 0 002.9-2.86V22.9a2.89 2.89 0 00-2.88-2.9H58.89A2.88 2.88 0 0056 22.87v6.44h-4.1a1.9 1.9 0 00-1.9 1.9v1.9A1.9 1.9 0 0051.9 35H56zm6.35-13a1.9 1.9 0 011.9-1.9h7.5a1.9 1.9 0 011.9 1.9v7.5a1.9 1.9 0 01-1.9 1.9h-1.9a1.9 1.9 0 01-1.9-1.9v-3.7h-3.7a1.9 1.9 0 01-1.9-1.9zM48.1 65H44v-6.43a2.89 2.89 0 00-2.89-2.89H22.89A2.88 2.88 0 0020 58.55v18.56A2.86 2.86 0 0022.85 80H41.1a2.88 2.88 0 002.9-2.86v-6.45h4.1a1.9 1.9 0 001.9-1.9v-1.9A1.9 1.9 0 0048.1 65zm-10.45 6.6a1.9 1.9 0 01-1.9 1.9h-7.5a1.9 1.9 0 01-1.9-1.9v-7.5a1.9 1.9 0 011.9-1.9h1.9a1.9 1.9 0 011.9 1.9v3.7h3.7a1.9 1.9 0 011.9 1.9z"
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
      "viewBox": "0 0 100 100",
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_identifier";
freezeTemplate(tmpl);
