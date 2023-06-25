import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./tax_rate.css";

import _implicitScopedStylesheets from "./tax_rate.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M40.48 20.01l16.21 8.93c.39.26.66.72.66 1.18v1.18c0 .72-.59 1.31-1.31 1.31H21.91c-.72 0-1.31-.59-1.31-1.31v-1.25c0-.47.26-.86.66-1.11l16.21-8.93c.47-.33.98-.53 1.51-.53s1.05.2 1.51.53zm-4.79 6.7c0 1.84 1.45 3.28 3.28 3.28s3.28-1.45 3.28-3.28-1.45-3.28-3.28-3.28-3.28 1.45-3.28 3.28zM44.88 50.02V37.87c0-.72-.59-1.31-1.31-1.31h-1.31c-.72 0-1.31.59-1.31 1.31v14.45h-3.93V37.87c0-.72-.59-1.31-1.31-1.31H34.4c-.72 0-1.31.59-1.31 1.31v14.45h-3.93V37.87c0-.72-.59-1.31-1.31-1.31h-1.31c-.72 0-1.31.59-1.31 1.31v14.45h-.66c-2.17 0-3.93 1.78-3.93 3.93v1.31c0 .72.59 1.31 1.31 1.31h21.07c-.23-.83-.36-1.72-.36-2.62 0-2.36.83-4.53 2.23-6.22zm7.88-3.57v-8.58c0-.72-.59-1.31-1.31-1.31h-1.31c-.72 0-1.31.59-1.31 1.31v9.28c1.13-.45 2.35-.7 3.63-.7h.31z",
    "fill-rule": "evenodd"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M55.77 79.18c-.05.09-.12.15-.2.21-.09.05-.17.09-.27.09h-2.23a.566.566 0 01-.51-.29c-.06-.09-.09-.18-.09-.28s.02-.2.09-.28L68.6 49.21c.05-.09.12-.15.2-.2.09-.05.17-.09.27-.1h2.39c.13.07.25.2.29.34s.05.31-.02.45L55.77 79.19h.01zM71.9 68.5c.64 0 1.26.18 1.8.54.53.36.94.86 1.19 1.45s.31 1.24.18 1.86a3.21 3.21 0 01-2.53 2.53c-.62.12-1.27.06-1.86-.18s-1.09-.66-1.45-1.19-.54-1.15-.54-1.8c0-.85.34-1.67.94-2.27.6-.6 1.42-.94 2.27-.94zm0-4.29c-1.48 0-2.94.44-4.18 1.26s-2.19 2-2.77 3.37a7.663 7.663 0 00-.43 4.34c.29 1.46 1 2.79 2.06 3.85s2.39 1.76 3.85 2.05c1.46.29 2.97.13 4.34-.43a7.545 7.545 0 003.37-2.77c.82-1.24 1.26-2.7 1.26-4.18a7.57 7.57 0 00-2.21-5.31 7.45 7.45 0 00-5.31-2.19h.01zM52.62 53.5c.64 0 1.26.18 1.79.54.53.36.94.86 1.19 1.45s.31 1.24.18 1.86a3.21 3.21 0 01-2.53 2.53c-.62.12-1.27.06-1.86-.18s-1.09-.66-1.45-1.19-.54-1.15-.54-1.79c0-.86.34-1.68.94-2.28s1.42-.94 2.28-.94zm0-4.29c-1.48 0-2.94.43-4.18 1.26-1.24.82-2.21 2-2.77 3.37a7.413 7.413 0 00-.43 4.34c.29 1.46 1 2.79 2.05 3.85a7.596 7.596 0 003.85 2.06c1.46.29 2.97.15 4.34-.43a7.417 7.417 0 003.37-2.77 7.548 7.548 0 001.26-4.18c0-1.98-.8-3.9-2.19-5.31s-3.31-2.21-5.29-2.21z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_tax_rate";
freezeTemplate(tmpl);
