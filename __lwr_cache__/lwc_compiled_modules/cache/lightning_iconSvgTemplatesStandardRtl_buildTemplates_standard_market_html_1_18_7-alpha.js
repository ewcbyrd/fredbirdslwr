import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./market.css";

import _implicitScopedStylesheets from "./market.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M25.59 41.4c0-11.76 9.62-21.4 21.4-21.4s21.4 9.64 21.4 21.4c0 6.25-2.72 11.89-7.01 15.81h-2.29c-.76 0-1.51.09-2.21.26-.26-.54-.65-1.02-1.13-1.38 4.45-2.68 7.53-7.26 8.22-12.56h-5.64c-.28 4.84-1.27 9.1-2.85 12.39-.58-.35-1.25-.58-1.99-.58h-1.86c-.26 0-.5.02-.74.07 1.64-2.68 2.88-6.88 3.16-11.89h-4.93V56.3c-.74.69-1.21 1.66-1.21 2.75 0 1.58.99 2.92 2.36 3.46-1.08.17-2.18.26-3.29.26-11.78 0-21.4-9.62-21.4-21.4h.02zm32.73-2.14h5.64c-.71-5.49-4-10.2-8.71-12.84 1.71 3.35 2.85 7.78 3.07 12.84zm-13.47 0V25.21c-2.42 2.07-4.56 7.35-4.93 14.05h4.93zm0 18.33V43.54h-4.93c.35 6.7 2.49 11.98 4.93 14.05zm4.28-32.37v14.05h4.93c-.35-6.7-2.49-11.98-4.93-14.05zM35.66 39.27c.28-5.06 1.36-9.49 3.07-12.84a17.315 17.315 0 00-8.71 12.84h5.64zm0 4.28h-5.64c.71 5.49 4 10.2 8.71 12.84-1.71-3.35-2.85-7.78-3.07-12.84z",
    "fill-rule": "evenodd"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M59.38 68.84h12.04c.37 0 .69-.24.78-.6l2.2-7.57c.17-.52-.24-1-.78-1h-18.6l-.33-1.12c-.17-.52-.65-.87-1.19-.87h-1.95c-.65 0-1.27.48-1.3 1.12-.04.67.52 1.28 1.23 1.28h1.13l3.83 12.67c.17.52.61.87 1.19.87h14.2c.65 0 1.27-.48 1.3-1.12.04-.67-.52-1.28-1.23-1.28H59.42c-.52 0-1.02-.35-1.13-.84v-.04c-.28-.76.33-1.51 1.1-1.51h.02zM59.62 80c1.13 0 2.05-.89 2.05-1.99s-.91-1.99-2.05-1.99-2.05.89-2.05 1.99.91 1.99 2.05 1.99zM69.42 80c1.13 0 2.05-.89 2.05-1.99s-.91-1.99-2.05-1.99-2.05.89-2.05 1.99.91 1.99 2.05 1.99z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_market";
freezeTemplate(tmpl);
