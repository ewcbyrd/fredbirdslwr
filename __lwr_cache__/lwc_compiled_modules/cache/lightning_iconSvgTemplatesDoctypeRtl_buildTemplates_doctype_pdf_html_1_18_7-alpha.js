import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./pdf.css";

import _implicitScopedStylesheets from "./pdf.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "fill": "#8E030F",
    "d": "M5.1 0C2.3 0 0 2.3 0 5.1v53.8C0 61.7 2.3 64 5.1 64h45.8c2.8 0 5.1-2.3 5.1-5.1V20.3L37.1 0h-32z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "fill": "#640103",
    "d": "M56 20.4v1H43.2s-6.3-1.3-6.1-6.7c0 0 .2 5.7 6 5.7H56z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "fill": "#FEB8AB",
    "d": "M37.1 0v14.6c0 1.7 1.1 5.8 6.1 5.8H56L37.1 0z"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "fill": "#FFF",
    "d": "M14.9 49h-3.3v4.1c0 .4-.3.7-.8.7-.4 0-.7-.3-.7-.7V42.9c0-.6.5-1.1 1.1-1.1h3.7c2.4 0 3.8 1.7 3.8 3.6 0 2-1.4 3.6-3.8 3.6zm-.1-5.9h-3.2v4.6h3.2c1.4 0 2.4-.9 2.4-2.3s-1-2.3-2.4-2.3zm10.4 10.7h-3c-.6 0-1.1-.5-1.1-1.1v-9.8c0-.6.5-1.1 1.1-1.1h3c3.7 0 6.2 2.6 6.2 6s-2.4 6-6.2 6zm0-10.7h-2.6v9.3h2.6c2.9 0 4.6-2.1 4.6-4.7.1-2.5-1.6-4.6-4.6-4.6zm16.3 0h-5.8V47h5.7c.4 0 .6.3.6.7s-.3.6-.6.6h-5.7v4.8c0 .4-.3.7-.8.7-.4 0-.7-.3-.7-.7V42.9c0-.6.5-1.1 1.1-1.1h6.2c.4 0 .6.3.6.7.1.3-.2.6-.6.6z"
  },
  key: 5,
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
      "viewBox": "0 0 56 64",
      "part": "icon"
    },
    key: 0,
    svg: true
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2), api_element("path", stc3), api_element("path", stc4)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesDoctypeRtl_pdf";
freezeTemplate(tmpl);
