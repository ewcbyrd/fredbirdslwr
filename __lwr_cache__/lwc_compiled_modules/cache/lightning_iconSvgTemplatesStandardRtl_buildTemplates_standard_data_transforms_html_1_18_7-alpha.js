import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./data_transforms.css";

import _implicitScopedStylesheets from "./data_transforms.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M80 21.82c0-.97-.82-1.82-1.75-1.82h-17.5c-.93 0-1.75.85-1.75 1.82v13.36c0 .97.82 1.82 1.75 1.82h17.5c.93 0 1.75-.85 1.75-1.82V21.82zm-39 43c0-.97-.82-1.82-1.75-1.82h-17.5c-.93 0-1.75.85-1.75 1.82v13.36c0 .97.82 1.82 1.75 1.82h17.5c.93 0 1.75-.85 1.75-1.82V64.82zm28.31-15.61c.4-.28.99-.28 1.39 0l8.04 7.68c.6.46.1 1.3-.89 1.3h-4.86c0 8.33-7.05 14.81-15.98 14.81v-5.55c5.96 0 10.03-3.7 10.03-9.26h-4.77c-.99 0-1.49-.74-.89-1.3l7.94-7.68zM29.3 50.79c.4.28.99.28 1.39 0l7.94-7.68c.6-.56.1-1.3-.89-1.3h-4.77c0-5.55 4.07-9.26 10.03-9.26V27c-8.94 0-15.98 6.48-15.98 14.81h-4.86c-.99 0-1.49.83-.89 1.3l8.04 7.68zm17.75-.76c0-1.59 1.26-2.85 2.85-2.85s2.85 1.26 2.85 2.85-1.26 2.85-2.85 2.85-2.85-1.26-2.85-2.85zm9.12 1.14l1.32 1.1c.43.36.57 1 .25 1.39l-.53.92c-.21.36-.6.57-1.03.57-.14 0-.28-.04-.43-.07l-1.53-.6c-.64.6-1.39 1.03-2.2 1.32l-.28 1.71c-.11.57-.6 1-1.17 1h-1.14c-.6 0-1.07-.39-1.17-.96l-.28-1.71c-.75-.25-1.46-.64-2.1-1.21l-1.64.6c-.11.04-.25.07-.39.07-.43 0-.82-.21-1.03-.57l-.57-1c-.28-.5-.14-1.14.28-1.49l1.32-1.1a6.72 6.72 0 010-2.42l-1.32-1.1c-.46-.36-.57-1-.28-1.49l.57-1a1.175 1.175 0 011.35-.52c.02 0 .05.01.07.02l1.64.6c.64-.53 1.35-.96 2.13-1.21l.28-1.64c.11-.57.6-.89 1.17-.89h1.14c.57 0 1.07.32 1.17.89l.28 1.67c.75.25 1.46.64 2.1 1.21l1.64-.6c.11-.04.25-.07.39-.07.43 0 .82.21 1.03.57l.57 1c.28.5.14 1.14-.28 1.49l-1.32 1.1c.07.39.11.82.11 1.21s-.04.82-.11 1.21z",
    "fill-rule": "evenodd"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_data_transforms";
freezeTemplate(tmpl);
