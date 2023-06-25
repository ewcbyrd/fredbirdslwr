import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./resource_skill.css";

import _implicitScopedStylesheets from "./resource_skill.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M43.85 45.44a6 6 0 1012.07 0 6 6 0 10-12.07 0z",
    "fill-rule": "evenodd"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M49.91 20a25.4 25.4 0 1025.18 25.5c0-13.79-11.24-25.5-25.18-25.5zm16.58 33.69l-1.16 1.93a2.66 2.66 0 01-2.13 1.16 2.82 2.82 0 01-.87-.19l-3.19-1.26A14 14 0 0154.49 58l-.58 3.58a2.48 2.48 0 01-2.42 2h-2.41a2.48 2.48 0 01-2.42-2L46.08 58a12 12 0 01-4.45-2.51l-3.38 1.26a2.82 2.82 0 01-.87.19 2.52 2.52 0 01-2.13-1.26l-1.16-2a2.41 2.41 0 01.58-3.09l2.8-2.32a12.69 12.69 0 01-.29-2.61 11.81 11.81 0 01.29-2.51l-2.8-2.32a2.39 2.39 0 01-.58-3.09l1.16-2a2.4 2.4 0 012.13-1.26 2.82 2.82 0 01.87.19l3.38 1.26a13.82 13.82 0 014.45-2.61l.58-3.38A2.31 2.31 0 0149.08 28h2.42a2.32 2.32 0 012.42 1.84l.58 3.48a13.55 13.55 0 014.45 2.51l3.38-1.26a2.82 2.82 0 01.87-.19 2.52 2.52 0 012.13 1.26l1.16 2a2.53 2.53 0 01-.58 3.09l-2.8 2.32a12 12 0 01.29 2.61 11.81 11.81 0 01-.29 2.51l2.8 2.32a2.52 2.52 0 01.58 3.2z",
    "fill-rule": "evenodd"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M26 64.21h-1.27A4.75 4.75 0 0020 68.95v6.31A4.74 4.74 0 0024.73 80h50.54A4.75 4.75 0 0080 75.26v-6.31a4.74 4.74 0 00-4.73-4.74h-1.54a30.15 30.15 0 01-47.72 0z",
    "fill-rule": "evenodd"
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
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2), api_element("path", stc3)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_resource_skill";
freezeTemplate(tmpl);