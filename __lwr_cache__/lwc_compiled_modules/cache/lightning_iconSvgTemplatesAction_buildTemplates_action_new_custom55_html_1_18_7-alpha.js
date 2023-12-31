import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./new_custom55.css";

import _implicitScopedStylesheets from "./new_custom55.scoped.css?scoped=true";

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
    "d": "M12.5 33.3h9.8c.8 0 1.5-.7 1.5-1.5V9.9c0-1.6-1.5-2.9-3-2.9h-8c-1 0-1.7.7-1.7 1.7v23.2c-.1.7.6 1.4 1.4 1.4z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M45.5 11.4v23.4c0 1.6-1.4 2.9-3 2.9h-33c-1.7 0-3-1.3-3-2.9V11.4c-2.5 0-4.5 2-4.5 4.4v21.9c0 2.4 2 4.4 4.5 4.4h14.2c.8 0 1.5.7 1.5 1.5s.7 1.5 1.5 1.5h4.5c.8 0 1.5-.7 1.5-1.5s.7-1.5 1.5-1.5h14.2c2.5 0 4.5-2 4.5-4.4V15.8c.1-2.4-1.9-4.4-4.4-4.4z"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "d": "M29.8 33.3h9.5c1 0 1.7-.7 1.7-1.7V8.5c0-.8-.7-1.5-1.5-1.5h-8.2c-1.5 0-3 1.3-3 2.9v21.9c-.1.8.6 1.5 1.5 1.5z"
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
      "viewBox": "0 0 52 52",
      "part": "icon"
    },
    key: 0,
    svg: true
  }, [api_element("g", stc0, [api_element("g", stc1, [api_element("path", stc2), api_element("path", stc3), api_element("path", stc4)])])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesAction_new_custom55";
freezeTemplate(tmpl);
