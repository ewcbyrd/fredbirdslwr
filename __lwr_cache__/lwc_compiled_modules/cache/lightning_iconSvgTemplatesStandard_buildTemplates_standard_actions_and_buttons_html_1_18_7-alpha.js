import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./actions_and_buttons.css";

import _implicitScopedStylesheets from "./actions_and_buttons.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M48.3 74.5c1 0 1.8-.8 1.8-1.8l.1-20.8c.1-1-.8-1.8-1.6-1.9H27.4c-1-.1-1.8.8-1.9 1.6v4.1c-.1 1 .8 1.8 1.6 1.9H34c.7 0 1.3.6 1.3 1.3 0 .3-.1.7-.3.9l-14 14c-.8.8-.8 2.1-.1 2.8l2.7 2.7c.8.7 2 .6 2.8-.1l14.1-14.1c.5-.5 1.3-.5 1.8 0 .2.2.4.5.3.9v6.6c-.1 1 .8 1.8 1.6 1.9h4.1z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M55.7 77.7c5.7-1 11.2-3.7 15.6-8 11.3-11.3 11.3-29.7 0-41s-29.7-11.3-41 0c-4.4 4.4-7 9.8-8 15.5h5.9c.9-4.2 3-8.1 6.2-11.4 9-9 23.8-9 32.8 0s9 23.8 0 32.8c-3.2 3.2-7.2 5.3-11.3 6.2l-.2 5.9zm.3-11.9c2.6-.8 5.1-2.2 7.1-4.3 6.8-6.8 6.8-17.8 0-24.6s-17.8-6.8-24.6 0c-2.1 2.1-3.5 4.6-4.3 7.2h6.2c.5-1.2 1.3-2.2 2.2-3.2 4.5-4.5 11.9-4.5 16.4 0s4.5 11.9 0 16.4c-.9.9-1.9 1.6-3 2.2v6.3z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_actions_and_buttons";
freezeTemplate(tmpl);
