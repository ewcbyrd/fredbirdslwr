import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./settings.css";

import _implicitScopedStylesheets from "./settings.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M26.1 19.1c-3.9 0-7 3.1-7 7s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M47.1 32.4l-3.7-3.1c.2-1.1.3-2.3.3-3.4s-.1-2.3-.3-3.4l3.7-3.1c1.2-1 1.6-2.8.8-4.2l-1.6-2.8c-.6-1-1.7-1.6-2.9-1.6-.4 0-.8.1-1.1.2l-4.6 1.7c-1.8-1.6-3.8-2.7-5.9-3.4L31 4.6c-.3-1.6-1.7-2.5-3.3-2.5h-3.2c-1.6 0-3 .9-3.3 2.5l-.8 4.6c-2.2.7-4.2 1.9-6 3.4l-4.6-1.7c-.4-.1-.7-.2-1.1-.2-1.2 0-2.3.6-2.9 1.6l-1.6 2.8c-.8 1.4-.5 3.2.8 4.2l3.7 3.1c-.2 1.1-.3 2.3-.3 3.4 0 1.2.1 2.3.3 3.4L5 32.3c-1.2 1-1.6 2.8-.8 4.2l1.6 2.8c.6 1 1.7 1.6 2.9 1.6.4 0 .8-.1 1.1-.2l4.6-1.7c1.8 1.6 3.8 2.7 5.9 3.4l.8 4.8c.3 1.6 1.6 2.7 3.3 2.7h3.2c1.6 0 3-1.2 3.3-2.8l.8-4.8c2.3-.8 4.4-2 6.2-3.7l4.3 1.7c.4.1.8.2 1.2.2 1.2 0 2.3-.6 2.9-1.6l1.5-2.6c.9-1.1.5-2.9-.7-3.9zm-21 4.7c-6.1 0-11-4.9-11-11s4.9-11 11-11 11 4.9 11 11-4.9 11-11 11z"
  },
  key: 4,
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
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("path", stc2), api_element("path", stc3)])])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_settings";
freezeTemplate(tmpl);
