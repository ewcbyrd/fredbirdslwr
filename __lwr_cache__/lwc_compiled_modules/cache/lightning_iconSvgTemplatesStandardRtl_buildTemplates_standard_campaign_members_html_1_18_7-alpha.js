import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./campaign_members.css";

import _implicitScopedStylesheets from "./campaign_members.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "fill-opacity": ".65",
    "d": "M100 62v38H62l38-38zm-7.8 27.6c-1.3-.5-1.5-1-1.5-1.6 0-.5.4-1 .8-1.4.8-.7 1.2-1.6 1.2-2.7 0-2.1-1.3-3.8-3.7-3.8s-3.7 1.8-3.7 3.8c0 1.1.4 2.1 1.2 2.7.4.4.8.9.8 1.4s-.2 1-1.5 1.6c-1.9.8-3.8 1.7-3.8 3.4 0 1.1.9 2.1 2 2.1h10c1.1 0 2-1 2-2.1 0-1.8-1.9-2.7-3.8-3.4z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M50 20c-16.5 0-30 13.5-30 30s13.5 30 30 30 30-13.5 30-30-13.5-30-30-30zm0 54c-13.2 0-24-10.8-24-24s10.8-24 24-24 24 10.8 24 24-10.8 24-24 24z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M50 32c-9.9 0-18 8.1-18 18s8.1 18 18 18 18-8.1 18-18-8.1-18-18-18zm0 30c-6.6 0-12-5.4-12-12s5.4-12 12-12 12 5.4 12 12-5.4 12-12 12z"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "d": "M50 44c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6z"
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
      "viewBox": "0 0 100 100",
      "part": "icon"
    },
    key: 0,
    svg: true
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2), api_element("path", stc3), api_element("path", stc4)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_campaign_members";
freezeTemplate(tmpl);
