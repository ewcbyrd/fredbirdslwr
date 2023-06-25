import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./snippets.css";

import _implicitScopedStylesheets from "./snippets.scoped.css?scoped=true";

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
    "d": "M71.8 25.2h-2c-.6 0-1 .4-1 1v4c0 4.4-3.6 7.9-7.9 7.9H39.1c-4.4 0-7.9-3.6-7.9-7.9v-4c0-.6-.4-1-1-1h-2c-3.3 0-5.9 2.7-5.9 5.9v42.6c0 3.3 2.7 5.9 5.9 5.9h43.6c3.3 0 5.9-2.7 5.9-5.9V31.2c.1-3.3-2.6-6-5.9-6zM44.3 48s0 .8-.6.9c-.8.2-1.1.4-1.2.4-.3.3-.4.8-.4 1.7v3.1c0 1.1-.2 2-.5 2.7-.2.5-.6 1-1 1.4 0 0-.7.5 0 1.3.3.2.5.5.7.8.5.8.8 1.8.8 3.1V67c0 .8.2 1.3.5 1.6.1.1.3.2.6.3.1 0 .2.1.3.1.3.2.7.5.7 1.2v2c0 .2-.2.5-.8.5h-.9c-1.4 0-2.7-.5-3.8-1.3-1.2-.9-1.8-2.2-1.8-3.8v-4.3c0-.9-.3-1.6-.8-2.1-.3-.3-.8-.5-1.5-.7-.1 0-.5-.2-.5-.8v-1.6c0-.2.1-.5.5-.7 1-.3 1.4-.6 1.6-.8.5-.5.7-1.3.7-2.3v-3.6c0-.5.1-1.1.3-1.7.3-1 .9-1.9 1.6-2.5.7-.5 1.5-.9 2.4-1.1.5-.1 1.2-.2 2.1-.2.3 0 .9.2.9.9V48h.1zm21.5 11.9c0 .2-.1.5-.5.7-1 .3-1.4.6-1.6.8-.5.5-.7 1.3-.7 2.3v3.6c0 .5-.1 1.1-.3 1.7-.3 1-.9 1.9-1.6 2.5-.7.5-1.5.9-2.4 1.1-.5.1-1.2.2-2.1.2-.3 0-.9-.2-.9-.9V70s0-.8.6-.9c.8-.2 1.1-.4 1.2-.4.3-.3.4-.8.4-1.7v-3.1c0-1.1.2-2 .5-2.7.2-.5.6-1 1-1.4 0 0 .7-.5 0-1.3-.3-.2-.5-.5-.7-.8-.5-.8-.8-1.8-.8-3.1v-3.4c0-.8-.2-1.3-.5-1.6-.1-.1-.3-.2-.6-.3-.1 0-.2-.1-.3-.1-.3-.2-.7-.5-.7-1.2v-2.2c0-.2.2-.5.8-.5h.9c1.4 0 2.7.5 3.8 1.3 1.2.9 1.8 2.2 1.8 3.8v4.3c0 .9.3 1.6.8 2.1.3.3.8.5 1.5.7.1 0 .5.2.5.8v1.6h-.1z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M39.1 32.2h21.8c1.1 0 2-.9 2-2v-4c0-3.3-2.7-5.9-5.9-5.9H43.1c-3.3 0-5.9 2.7-5.9 5.9v4c-.1 1.1.8 2 1.9 2z"
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
      "viewBox": "0 0 100 100",
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_snippets";
freezeTemplate(tmpl);
