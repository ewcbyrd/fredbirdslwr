import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./tax_rate.css";

import _implicitScopedStylesheets from "./tax_rate.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M18.38 1.91l12.97 7.15c.31.21.53.58.53.94v.94c0 .58-.47 1.05-1.05 1.05H3.52c-.58 0-1.05-.47-1.05-1.05v-1c0-.37.21-.69.53-.89L15.97 1.9c.37-.26.78-.42 1.21-.42s.84.16 1.21.42zm-3.83 5.36c0 1.47 1.16 2.63 2.63 2.63s2.63-1.16 2.63-2.63-1.16-2.63-2.63-2.63-2.63 1.16-2.63 2.63zM21.9 25.91v-9.72c0-.58-.47-1.05-1.05-1.05H19.8c-.58 0-1.05.47-1.05 1.05v11.56H15.6V16.19c0-.58-.47-1.05-1.05-1.05H13.5c-.58 0-1.05.47-1.05 1.05v11.56H9.3V16.19c0-.58-.47-1.05-1.05-1.05H7.2c-.58 0-1.05.47-1.05 1.05v11.56h-.53c-1.73 0-3.15 1.42-3.15 3.15v1.05c0 .58.47 1.05 1.05 1.05H20.4c-.19-.67-.28-1.37-.28-2.1 0-1.89.67-3.63 1.78-4.98zm6.3-2.85V16.2c0-.58-.47-1.05-1.05-1.05H26.1c-.58 0-1.05.47-1.05 1.05v7.42c.9-.36 1.88-.56 2.9-.56h.25z",
    "fill-rule": "evenodd"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M30.62 49.24c-.04.07-.1.12-.16.17a.44.44 0 01-.22.07h-1.78c-.08 0-.17-.02-.24-.06a.516.516 0 01-.18-.18c-.05-.07-.07-.15-.07-.23s.02-.16.07-.23l12.83-23.53c.04-.07.1-.12.16-.16.07-.04.14-.07.22-.08h1.91c.11.06.2.16.24.27s.04.25-.02.36L30.61 49.23zM43.52 40.69c.51 0 1.01.15 1.44.43.42.28.75.69.95 1.16s.25.99.15 1.49-.34.96-.71 1.32-.82.61-1.32.71c-.5.1-1.02.05-1.49-.15s-.87-.53-1.16-.95-.43-.92-.43-1.44a2.558 2.558 0 012.56-2.56zm0-3.43c-1.19 0-2.35.35-3.34 1.01s-1.75 1.6-2.22 2.7c-.45 1.1-.57 2.3-.34 3.47.24 1.17.8 2.23 1.65 3.08s1.91 1.41 3.08 1.64c1.17.24 2.37.11 3.47-.34 1.1-.46 2.04-1.23 2.7-2.22.66-.99 1.01-2.16 1.01-3.34 0-.78-.16-1.57-.46-2.29s-.74-1.39-1.3-1.95-1.22-1-1.95-1.3c-.73-.3-1.51-.45-2.29-.45zM28.1 28.69c.51 0 1.01.15 1.43.43.42.28.75.69.95 1.16s.25.99.15 1.49-.34.96-.71 1.32c-.36.36-.82.61-1.32.71-.5.1-1.02.05-1.49-.15s-.87-.53-1.16-.95-.43-.92-.43-1.43c0-.69.27-1.34.75-1.82s1.14-.75 1.82-.75zm0-3.43c-1.19 0-2.35.34-3.34 1.01-.99.66-1.76 1.6-2.22 2.7-.46 1.1-.58 2.3-.34 3.47.24 1.17.8 2.23 1.64 3.08.84.84 1.91 1.41 3.08 1.65 1.17.24 2.37.12 3.47-.34 1.1-.45 2.04-1.23 2.7-2.22a6.014 6.014 0 00-.74-7.58 5.988 5.988 0 00-4.23-1.76z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_tax_rate";
freezeTemplate(tmpl);
