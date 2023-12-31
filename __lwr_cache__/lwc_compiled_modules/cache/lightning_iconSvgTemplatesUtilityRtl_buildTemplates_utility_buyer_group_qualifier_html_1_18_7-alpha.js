import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./buyer_group_qualifier.css";

import _implicitScopedStylesheets from "./buyer_group_qualifier.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M46.99 28.04c-.17 0-.34.03-.5.11-.16.06-.3.17-.42.3L33.39 42.43s-.09.08-.14.09c-.05.02-.11.03-.17.03a.37.37 0 01-.28-.11l-4.38-4.31c-.11-.11-.25-.2-.41-.27-.16-.06-.31-.09-.47-.09s-.33.03-.47.09c-.16.06-.28.16-.41.27l-1.7 1.76c-.11.11-.2.25-.27.41s-.09.31-.09.47.03.33.09.47c.06.16.16.28.27.41l6.8 6.69a2.087 2.087 0 002.27.41c.27-.11.48-.28.67-.5l14.98-16.46c.11-.12.19-.27.25-.41.06-.16.08-.31.08-.47s-.05-.31-.11-.47c-.06-.14-.17-.28-.28-.39l-1.83-1.65c-.22-.22-.5-.34-.8-.36zM14.82 20.18c-1.06-1.68-1.67-3.68-1.67-5.87 0-3.68 1.54-6.8 4.02-8.67-.94-1.56-2.48-2.56-4.65-2.56-3.59 0-5.57 2.87-5.57 6.24 0 1.81.62 3.31 1.79 4.43.69.62 1.23 1.44 1.23 2.31s-.31 1.62-2.36 2.5c-2.92 1.31-5.57 3-5.63 5.74 0 1.81 1.17 3.12 2.85 3.12H7.5c.44 0 .87-.25 1.06-.62 1.29-2.37 3.71-3.87 5.76-4.87.69-.31.94-1.12.5-1.75h-.02zM38.49 18.56c-2.04-.87-2.36-1.68-2.36-2.5 0-.87.56-1.68 1.23-2.31 1.17-1.12 1.79-2.62 1.79-4.43 0-3.37-1.98-6.24-5.57-6.24-2.17 0-3.71 1-4.65 2.56 2.48 1.87 4.02 4.93 4.02 8.67 0 2.18-.56 4.18-1.67 5.87-.44.62-.19 1.44.5 1.81 2.04 1 4.46 2.5 5.76 4.87.19.37.62.62 1.06.62h2.67c1.67 0 2.85-1.31 2.85-3.12-.06-2.75-2.73-4.49-5.63-5.8h-.02z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M28.44 24.55c-2.23-.94-2.54-1.81-2.54-2.75s.62-1.87 1.36-2.56c1.29-1.19 2.04-2.93 2.04-4.93 0-3.68-2.23-6.86-6.19-6.86s-6.19 3.18-6.19 6.86c0 2 .75 3.68 2.04 4.93.75.69 1.36 1.62 1.36 2.56s-.37 1.81-2.54 2.75c-3.34 1.37-6.44 3-6.51 5.99 0 2 1.42 3.74 3.28 3.74h16.96c1.86 0 3.28-1.75 3.28-3.74-.06-3-3.15-4.62-6.38-5.99h.03z"
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
      "viewBox": "0 0 52 52",
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_buyer_group_qualifier";
freezeTemplate(tmpl);
