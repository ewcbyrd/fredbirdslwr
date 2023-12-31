import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./quip_slide.css";

import _implicitScopedStylesheets from "./quip_slide.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    "fill": "#9050E9",
    "d": "M0 5.1v53.7C0 61.7 2.3 64 5.1 64h45.7c2.8 0 5.1-2.3 5.1-5.1V21L37 0H5.1C2.3 0 0 2.3 0 5.1z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "fill": "#ECE1F9",
    "d": "M37 0l19 21H42.1c-2.8 0-5.2-2.3-5.2-5.2L37 0z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "fill": "#5A1BA9",
    "d": "M37 15.9v1c0 2.8 2.3 5.2 5.2 5.2H56v-1H42.1c-2.8-.1-5.1-2.4-5.1-5.2z"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "fill": "#FFF",
    "d": "M23.5 46.7h-6.9c-.4 0-.8.3-.8.8s.3.8.8.8h6.9c.4 0 .8-.3.8-.8s-.4-.8-.8-.8zM16.5 41.3h6.9c.4 0 .8-.3.8-.8 0-.4-.3-.8-.8-.8h-6.9c-.4 0-.8.3-.8.8.1.5.4.8.8.8zM14.2 43.2c-.4 0-.8.3-.8.8 0 .4.3.8.8.8h11.5c.4 0 .8-.3.8-.8 0-.4-.3-.8-.8-.8H14.2z"
  },
  key: 5,
  svg: true
};
const stc5 = {
  attrs: {
    "fill": "#FFF",
    "d": "M26.8 36.7c-3.9-3.7-10.1-3.6-13.9.2-3.8 3.8-3.9 10-.2 13.9 1.9 2 4.5 3.2 7.3 3.2h9.2c.4 0 .8-.3.8-.8V44c0-2.8-1.1-5.4-3.2-7.3zM20 52.5c-2.3 0-4.6-1-6.2-2.7-1.6-1.7-2.4-4-2.3-6.3.3-4.3 3.7-7.7 7.9-7.9h.5c4.7 0 8.5 3.8 8.5 8.5v8.4H20z"
  },
  key: 6,
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
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2), api_element("path", stc3), api_element("path", stc4), api_element("path", stc5)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesDoctypeRtl_quip_slide";
freezeTemplate(tmpl);
