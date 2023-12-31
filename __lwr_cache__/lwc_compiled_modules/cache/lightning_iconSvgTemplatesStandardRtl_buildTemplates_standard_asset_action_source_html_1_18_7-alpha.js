import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./asset_action_source.css";

import _implicitScopedStylesheets from "./asset_action_source.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M52.1 67.9A15.27 15.27 0 0155 59H37.1a.84.84 0 01-.9-.9v-.9a.84.84 0 01.9-.9h20.2a15.35 15.35 0 012.9-2.1c-.1-.1-.1-.2-.1-.4V41.1a.84.84 0 01.9-.9h1.7a.84.84 0 01.9.9V53a14.3 14.3 0 019.6.5V26.8a2.43 2.43 0 00-2.4-2.4H29.3a2.43 2.43 0 00-2.4 2.4v41.5a2.43 2.43 0 002.4 2.4h5.3v2.5a2.43 2.43 0 002.4 2.4h2.8a2.43 2.43 0 002.4-2.4v-2.5h10.3a8.63 8.63 0 01-.4-2.8zM46.6 54a.84.84 0 01-.9.9H44a.84.84 0 01-.9-.9V41.1a.84.84 0 01.9-.9h1.7a.84.84 0 01.9.9zm7.7 0a.84.84 0 01-.9.9H50a.84.84 0 01-.9-.9V41.1a.84.84 0 01.9-.9h3.4a.84.84 0 01.9.9zm3.3 0a.9.9 0 01-1.8 0V41.1a.9.9 0 111.8 0zM36.3 36.8a.84.84 0 01.9-.9h25.7a.84.84 0 01.9.9v.9a.84.84 0 01-.9.9H37.1a.84.84 0 01-.9-.9v-.9zm0 4.3a.84.84 0 01.9-.9h3.4a.84.84 0 01.9.9V54a.84.84 0 01-.9.9h-3.4a.84.84 0 01-.9-.9z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M55.5 68a12.1 12.1 0 0012.1 11.9 12 12 0 0011.9-12 12 12 0 10-24 .1zm3.9-.5l5.3-5.5a.67.67 0 011 0l1 1a.67.67 0 010 1l-1.6 1.5a.46.46 0 00.3.8h9.7a.68.68 0 01.7.7v1.5a.75.75 0 01-.7.7h-9.7a.45.45 0 00-.3.8l1.6 1.7a.67.67 0 010 1 11 11 0 01-1 1.1.67.67 0 01-1 0l-5.3-5.4a.56.56 0 010-.9z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandardRtl_asset_action_source";
freezeTemplate(tmpl);
