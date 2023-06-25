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
    "x": "34.25",
    "y": "34.79",
    "width": "4.38",
    "height": "4.38",
    "rx": ".73",
    "ry": ".73"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "x": "34.25",
    "y": "42.09",
    "width": "4.38",
    "height": "4.38",
    "rx": ".73",
    "ry": ".73"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "x": "26.94",
    "y": "34.79",
    "width": "4.38",
    "height": "4.38",
    "rx": ".73",
    "ry": ".73"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "x": "26.94",
    "y": "42.09",
    "width": "4.38",
    "height": "4.38",
    "rx": ".73",
    "ry": ".73"
  },
  key: 5,
  svg: true
};
const stc5 = {
  attrs: {
    "x": "19.62",
    "y": "34.79",
    "width": "4.38",
    "height": "4.38",
    "rx": ".73",
    "ry": ".73"
  },
  key: 6,
  svg: true
};
const stc6 = {
  attrs: {
    "x": "19.62",
    "y": "42.09",
    "width": "4.38",
    "height": "4.38",
    "rx": ".73",
    "ry": ".73"
  },
  key: 7,
  svg: true
};
const stc7 = {
  attrs: {
    "d": "M43.46 2H8.64C5.09 1.91 2.13 4.7 2 8.25v35.5A6.475 6.475 0 008.53 50h4.72a2.93 2.93 0 01-.32-1.33V30.8c0-.6.47-1.09 1.07-1.12h30.01c.61.02 1.09.51 1.1 1.12v17.87c0 .41-.08.81-.25 1.18a6.383 6.383 0 005.14-6.1V8.25C50.11 4.85 47.14 2 43.46 2zM10.63 14.88a2.271 2.271 0 01-2.22-2.2v-2.2c.04-1.2 1.01-2.16 2.21-2.2h11.27c1.2.04 2.17 1 2.21 2.2v2.2a2.283 2.283 0 01-2.21 2.2H10.63zm34.48 11.31c-.02.6-.5 1.08-1.1 1.1H14c-.6-.02-1.08-.5-1.1-1.1V24.4c0-1.61 1.32-2.92 2.93-2.92h3.66v-1.5a2.19 2.19 0 114.38 0v1.46h10.24v-1.46a2.19 2.19 0 114.38 0v1.46h3.66c1.62 0 2.94 1.3 2.95 2.92v1.83z",
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
      "viewBox": "0 0 52 52",
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_service_appointment";
freezeTemplate(tmpl);
