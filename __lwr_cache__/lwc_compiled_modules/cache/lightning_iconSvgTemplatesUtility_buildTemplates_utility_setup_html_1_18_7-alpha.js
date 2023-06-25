import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./setup.css";

import _implicitScopedStylesheets from "./setup.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M46.8 32.4l-3.7-3.1c.2-1.1.3-2.3.3-3.4s-.1-2.3-.3-3.4l3.7-3.1c1.2-1 1.6-2.8.8-4.2L46 12.3c-.6-1-1.7-1.6-2.9-1.6-.4 0-.8.1-1.1.2l-4.5 1.7c-1.8-1.6-3.8-2.7-5.8-3.4l-.8-4.7C30.6 2.9 29.2 2 27.6 2h-3.2c-1.6 0-3 .9-3.3 2.5l-.8 4.6c-2.2.7-4.1 1.9-5.9 3.4L10 10.8c-.4-.1-.7-.2-1.1-.2-1.2 0-2.3.6-2.9 1.6L4.4 15c-.8 1.4-.5 3.2.8 4.2l3.7 3.1c-.2 1.1-.3 2.3-.3 3.4 0 1.2.1 2.3.3 3.4l-3.7 3.1c-1.2 1-1.6 2.8-.8 4.2l1.6 3c.6 1 1.7 1.6 2.9 1.6.4 0 .8-.1 1.1-.2l4.5-1.7c1.8 1.6 3.8 2.7 5.8 3.4l.8 4.8c.3 1.6 1.6 2.7 3.3 2.7h3.2c1.6 0 3-1.2 3.3-2.8l.8-4.8c2.3-.8 4.3-2 6.1-3.7l4.2 1.7c.4.1.8.2 1.2.2 1.2 0 2.3-.6 2.9-1.6l1.5-2.6c.8-1.2.4-3-.8-4zm-20.7 4.7c-6 0-10.9-4.9-10.9-11s4.8-11 10.9-11S37 20 37 26.1s-4.9 11-10.9 11z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M29 18h-4.6c-.7 0-1.3.4-1.5 1l-2.8 7.2c-.2.5.2 1.1.8 1.1h4.7l-1.7 6c-.2.6.5.9.9.5l7.1-8.3c.5-.5.1-1.3-.6-1.3h-3.5l3.1-4.9c.3-.5-.1-1.2-.7-1.2H29z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_setup";
freezeTemplate(tmpl);
