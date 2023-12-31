import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./service_appointment.css";

import _implicitScopedStylesheets from "./service_appointment.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "x": "60.31",
    "y": "60.99",
    "width": "5.48",
    "height": "5.48",
    "rx": ".91",
    "ry": ".91"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "x": "60.31",
    "y": "70.12",
    "width": "5.48",
    "height": "5.48",
    "rx": ".91",
    "ry": ".91"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "x": "51.17",
    "y": "60.99",
    "width": "5.48",
    "height": "5.48",
    "rx": ".91",
    "ry": ".91"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "x": "51.17",
    "y": "70.12",
    "width": "5.48",
    "height": "5.48",
    "rx": ".91",
    "ry": ".91"
  },
  key: 5,
  svg: true
};
const stc5 = {
  attrs: {
    "x": "42.03",
    "y": "60.99",
    "width": "5.48",
    "height": "5.48",
    "rx": ".91",
    "ry": ".91"
  },
  key: 6,
  svg: true
};
const stc6 = {
  attrs: {
    "x": "42.03",
    "y": "70.12",
    "width": "5.48",
    "height": "5.48",
    "rx": ".91",
    "ry": ".91"
  },
  key: 7,
  svg: true
};
const stc7 = {
  attrs: {
    "d": "M71.83 20H28.3a8.11 8.11 0 00-8.3 7.81v44.38A8.08 8.08 0 0028.16 80h5.9a3.62 3.62 0 01-.4-1.66V56A1.41 1.41 0 0135 54.6h37.51a1.41 1.41 0 011.37 1.4v22.34a3.62 3.62 0 01-.31 1.47A8 8 0 0080 72.19V27.81c.14-4.25-3.58-7.81-8.17-7.81zM30.78 36.1A2.85 2.85 0 0128 33.35V30.6a2.85 2.85 0 012.76-2.75h14.09a2.85 2.85 0 012.76 2.75v2.75a2.85 2.85 0 01-2.76 2.75zm43.1 14.14a1.41 1.41 0 01-1.37 1.37H35a1.41 1.41 0 01-1.37-1.37V48a3.67 3.67 0 013.66-3.65h4.57v-1.87a2.74 2.74 0 015.48 0v1.82h12.8v-1.82a2.74 2.74 0 015.48 0v1.82h4.57a3.67 3.67 0 013.69 3.7z",
    "fill-rule": "evenodd"
  },
  key: 8,
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
  }, [api_element("g", stc0, [api_element("rect", stc1), api_element("rect", stc2), api_element("rect", stc3), api_element("rect", stc4), api_element("rect", stc5), api_element("rect", stc6), api_element("path", stc7)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_service_appointment";
freezeTemplate(tmpl);
