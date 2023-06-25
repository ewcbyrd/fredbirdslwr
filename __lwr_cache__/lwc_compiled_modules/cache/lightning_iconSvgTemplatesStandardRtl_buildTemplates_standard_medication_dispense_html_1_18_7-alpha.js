import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./medication_dispense.css";

import _implicitScopedStylesheets from "./medication_dispense.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M58.21 20H31.39a1.33 1.33 0 00-1.34 1.31V25a1.35 1.35 0 001.34 1.25h26.79A1.36 1.36 0 0059.52 25v-3.69A1.34 1.34 0 0058.21 20z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M61.8 52.82V38.74a9.13 9.13 0 00-9-9.21H37a9.12 9.12 0 00-9.22 9v2.56h16.75a1.47 1.47 0 011.47 1.5v16.83a1.47 1.47 0 01-1.47 1.48H27.78v7.37a1.43 1.43 0 001.48 1.31h18.43A14.11 14.11 0 0161.8 55.47z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M61.8 59.16a10.42 10.42 0 1010.42 10.42A10.4 10.4 0 0061.8 59.16zm5 12.77l-4.61 4.48a.59.59 0 01-.85 0l-4.57-4.48a.54.54 0 010-.82l.82-.83a.59.59 0 01.85 0l1.44 1.41a.39.39 0 00.67-.28v-8.23a.66.66 0 01.61-.61h1.24a.64.64 0 01.61.61v8.23a.39.39 0 00.67.28l1.43-1.41a.59.59 0 01.85 0l.86.83a.56.56 0 010 .82z"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "x": "27.83",
    "y": "45.55",
    "width": "13.17",
    "height": "3.04",
    "rx": ".99"
  },
  key: 5,
  svg: true
};
const stc5 = {
  attrs: {
    "x": "27.83",
    "y": "53.11",
    "width": "9.23",
    "height": "3.04",
    "rx": ".99"
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
      "viewBox": "0 0 100 100",
      "part": "icon"
    },
    key: 0,
    svg: true
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2), api_element("path", stc3), api_element("rect", stc4), api_element("rect", stc5)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_medication_dispense";
freezeTemplate(tmpl);
