import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./collection.css";

import _implicitScopedStylesheets from "./collection.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M12 2.17h14v23.5l.31.46.57-.1 5.66-5.14.39-.12.42.11L38.6 26l.6.1.28-.46V2h3.28a6 6 0 013 1.12 5.22 5.22 0 011.57 2.74v39.43a4.2 4.2 0 01-.88 3.15A4.58 4.58 0 0142.81 50H12.32c-.24 0-1.52.27-3.38-1.54a5.28 5.28 0 01-1.48-3.56v-1.29H5.87a3.15 3.15 0 01-3.19-3.34c.06-3 3.14-3 3.14-3h1.64v-8H5.87a3.09 3.09 0 01-3.19-3.19 3.24 3.24 0 013.19-3.34h1.59v-7.83H5.87a3.11 3.11 0 01-3.19-3.1 3.15 3.15 0 013.19-3.28h1.59v-1.9a4.78 4.78 0 011.19-2.92A5.14 5.14 0 0112 2.17z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_collection";
freezeTemplate(tmpl);
