import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./gform.css";

import _implicitScopedStylesheets from "./gform.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "fill": "#5A1BA9",
    "d": "M5.1 0C2.3 0 0 2.2 0 5v53.9C0 61.7 2.3 64 5.1 64h45.8c2.8 0 5.1-2.3 5.1-5.1V20.3L37.1 0h-32z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "fill": "#300B60",
    "d": "M56 20.4v1H43.2s-6.3-1.3-6.2-6.8c0 0 .3 5.8 6.1 5.8H56z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "fill": "#AD7BEE",
    "d": "M37.1 0v14.6c0 1.6 1.1 5.8 6.1 5.8H56L37.1 0z"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "fill": "#FFF",
    "d": "M28.8 40.7c0 .4.3.7.7.7h1.3c.4 0 .7-.3.7-.7v-1.3c0-.4-.3-.7-.7-.7h-1.3c-.4 0-.7.3-.7.7v1.3zm-18.8 0c0 .4.3.7.7.7h15.7c.4 0 .7-.3.7-.7v-1.3c0-.4-.3-.7-.7-.7H10.7c-.4 0-.7.3-.7.7v1.3zM28.8 47c0 .4.3.7.7.7h1.3c.4 0 .7-.3.7-.7v-1.3c0-.4-.3-.7-.7-.7h-1.3c-.4 0-.7.3-.7.7V47zM10 47c0 .4.4.7.8.7h15.5c.4 0 .8-.3.8-.7v-1.3c0-.4-.4-.7-.8-.7H10.8c-.4 0-.8.3-.8.7V47zm18.8 6.2c0 .4.3.7.7.7h1.3c.4 0 .7-.3.7-.7v-1.3c0-.4-.3-.7-.7-.7h-1.3c-.4 0-.7.3-.7.7v1.3zm-18.8 0c0 .4.3.7.7.7h15.7c.4 0 .7-.3.7-.7v-1.3c0-.4-.3-.7-.7-.7H10.7c-.4 0-.7.3-.7.7v1.3z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesDoctypeRtl_gform";
freezeTemplate(tmpl);
