import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./datashare_target.css";

import _implicitScopedStylesheets from "./datashare_target.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M65.97 52.66a20.56 20.56 0 003.75-11.6C69.72 29.95 60.65 20 49.51 20S29.3 29.95 29.3 41.06c0 4.33 1.38 8.26 3.7 11.55l3.82-3.81c-1.63-2.51-2.51-5.46-2.56-8.65 0-8.85 6.39-15.22 15.26-15.22s15.26 6.37 15.26 15.22c0 3.15-.94 6.14-2.51 8.6l3.72 3.9z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M60.25 46.66c.89-1.67 1.43-3.59 1.38-5.6 0-6.68-5.42-12.09-12.13-12.09s-12.13 5.41-12.13 12.09c0 2.06.54 3.98 1.43 5.65l3.97-3.95c-.35-.84-.44-1.72-.49-2.65 0-4.42 2.74-7.15 7.18-7.15s7.18 2.73 7.18 7.15c0 .88-.15 1.72-.39 2.56l4.01 4zM68.32 59.75H57.88c-.56 0-1.02.38-1.02.84v1.43c0 .47.46.84 1.02.84h10.03v4.67H31.09v-4.67h9.93c.56 0 1.02-.38 1.02-.84v-1.43c0-.47-.46-.84-1.02-.84H30.68c-2.05 0-3.68 1.25-3.68 2.8v15.11c0 1.32 1.33 2.34 3.07 2.34h38.86c1.74 0 3.07-1.01 3.07-2.34V62.55c0-1.56-1.64-2.8-3.68-2.8z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M46.57 54.17v10.01c0 .74.71 1.39 1.51 1.39h3.03c.81 0 1.51-.65 1.51-1.39V54.17h6.76c1.01 0 1.51-.74.91-1.3L50.2 41.47c-.4-.28-1.01-.28-1.41 0L38.7 52.87c-.61.46-.1 1.3.91 1.3h6.96z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_datashare_target";
freezeTemplate(tmpl);
