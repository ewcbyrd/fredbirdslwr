import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./tax_policy.css";

import _implicitScopedStylesheets from "./tax_policy.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M71.57 55.62c0 .87-.56 1.6-1.1 2.29-.36.47-.73.94-.88 1.43-.21.52-.29 1.14-.38 1.74-.13.92-.25 1.82-.81 2.37s-1.46.69-2.37.81c-.61.08-1.21.17-1.74.38-.45.19-.9.52-1.34.86-.76.56-1.54 1.13-2.37 1.13-.77 0-1.51-.54-2.23-1.08-.51-.38-.99-.75-1.49-.91-.52-.21-1.14-.29-1.74-.38-.92-.13-1.82-.25-2.37-.81s-.69-1.46-.81-2.37c-.08-.61-.17-1.21-.38-1.74-.19-.45-.52-.9-.86-1.34-.56-.76-1.13-1.54-1.13-2.37 0-.77.54-1.51 1.08-2.23.38-.51.75-.99.91-1.49.21-.52.29-1.14.38-1.74.13-.92.25-1.82.81-2.37s1.46-.69 2.37-.81c.61-.08 1.21-.17 1.74-.38.45-.19.9-.52 1.34-.86.76-.56 1.54-1.13 2.37-1.13.77 0 1.51.54 2.23 1.08.51.38.99.75 1.49.91.52.21 1.14.29 1.74.38.92.13 1.82.25 2.37.81s.69 1.46.81 2.37c.08.61.17 1.21.38 1.74.17.58.58 1.11.98 1.63.51.68 1.02 1.33 1.02 2.08h-.01zm-15.4 0c0-2.25 1.86-4.12 4.12-4.12s4.12 1.86 4.12 4.12-1.86 4.12-4.12 4.12-4.12-1.86-4.12-4.12zm13.4 11.28c-.87.48-1.76.69-2.52.86-.28.06-.54.12-.8.19-.27.13-.67.13-.93.13-.13.13-.4.27-.67.4-.22.13-.46.31-.71.5-.51.39-1.1.82-1.8 1.09l6.9 9.69 1.73-4.65h4.65l-5.84-8.23v.02zm-11.16 3.05l-6.9 9.82-1.73-4.65h-4.65l5.97-8.1c.87.48 1.76.69 2.52.86.28.06.54.12.8.19.27.13.67.13.8.13.13.13.4.27.67.4.53.4 1.33.93 2.52 1.33h.01zm1.86-22.02c4.38 0 7.7 3.45 7.7 7.7s-3.32 7.7-7.7 7.7-7.7-3.32-7.7-7.7 3.45-7.7 7.7-7.7zM44.23 20.3l16.02 8.83c.39.25.65.71.65 1.16v1.16c0 .71-.58 1.3-1.3 1.3H25.87c-.71 0-1.3-.58-1.3-1.3v-1.23c0-.46.25-.85.65-1.1l16.02-8.83c.46-.33.97-.52 1.49-.52s1.04.19 1.49.52zm-4.73 6.62c0 1.82 1.43 3.24 3.24 3.24s3.24-1.43 3.24-3.24-1.43-3.24-3.24-3.24-3.24 1.43-3.24 3.24z",
    "fill-rule": "evenodd"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M56.36 37.94v7.37c-.53.16-1.11.24-1.68.31-.8.11-1.57.22-2.2.52v-8.21c0-.71.58-1.3 1.3-1.3h1.3c.71 0 1.3.58 1.3 1.3zm-7.78 14.27h1.5c-.22.38-.5.75-.79 1.13-.64.86-1.3 1.73-1.3 2.66s.62 1.83 1.25 2.69H25.87c-.71 0-1.3-.58-1.3-1.3v-1.3c0-2.14 1.76-3.89 3.89-3.89h.65V37.93c0-.71.58-1.3 1.3-1.3h1.3c.71 0 1.3.58 1.3 1.3V52.2h3.89V37.93c0-.71.58-1.3 1.3-1.3h1.3c.71 0 1.3.58 1.3 1.3V52.2h3.89V37.93c0-.71.58-1.3 1.3-1.3h1.3c.71 0 1.3.58 1.3 1.3V52.2h.02z",
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_tax_policy";
freezeTemplate(tmpl);
