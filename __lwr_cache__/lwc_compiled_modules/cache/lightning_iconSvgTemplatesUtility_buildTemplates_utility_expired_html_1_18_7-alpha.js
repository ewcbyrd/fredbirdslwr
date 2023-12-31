import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./expired.css";

import _implicitScopedStylesheets from "./expired.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M22.7 4.82C11.31 4.82 2 14.14 2 25.52s9.31 20.7 20.7 20.7c1.31 0 2.58-.12 3.82-.36-.78-1.53-1.28-3.21-1.45-5-.77.12-1.56.18-2.37.18-8.54 0-15.52-6.99-15.52-15.52S14.17 10 22.7 10s15.52 6.98 15.52 15.51c.27-.02.54-.02.81-.02 1.52 0 2.99.24 4.36.69 0-.22.01-.43.01-.65 0-11.38-9.31-20.7-20.7-20.7zm3.57 28.84c.73-1.6 1.76-3.04 3.01-4.25l-3.66-3.72c-.26-.26-.34-.6-.34-.95v-8.28c0-.69-.6-1.29-1.29-1.29H21.4c-.69 0-1.29.6-1.29 1.29V26.9c0 .35.17.69.35.95l5.82 5.82h-.01zm13.8-4.45l9.67 15.63c.63.97 0 2.32-1.06 2.32H29.34c-1.06 0-1.65-1.35-1.06-2.32l9.67-15.63c.51-.84 1.6-.84 2.11 0h.01zm-2.32 13.3c0 .72.55 1.27 1.27 1.27s1.27-.55 1.27-1.27-.55-1.27-1.27-1.27-1.27.55-1.27 1.27zm2.11-2.11c.25 0 .42-.17.42-.42v-5.49c0-.25-.17-.42-.42-.42h-1.69c-.25 0-.42.17-.42.42v5.49c0 .25.17.42.42.42h1.69z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_expired";
freezeTemplate(tmpl);
