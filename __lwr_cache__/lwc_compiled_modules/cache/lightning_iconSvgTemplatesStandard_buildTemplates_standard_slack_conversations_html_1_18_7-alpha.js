import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./slack_conversations.css";

import _implicitScopedStylesheets from "./slack_conversations.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M39.23 36.47h-8.74c-1.93 0-3.51 1.59-3.51 3.49s1.59 3.51 3.51 3.51h8.74c1.94 0 3.51-1.57 3.51-3.51s-1.58-3.49-3.51-3.49zM60.24 39.95c0-1.9-1.57-3.49-3.51-3.49s-3.51 1.59-3.51 3.49v3.51h3.51c1.92 0 3.51-1.61 3.51-3.51zM39.23 45.22c-1.9 0-3.49 1.58-3.49 3.51v8.74c0 1.93 1.59 3.51 3.49 3.51s3.51-1.59 3.51-3.51v-8.74c0-1.94-1.58-3.51-3.51-3.51zM26.99 48.73c0 1.94 1.59 3.47 3.51 3.47s3.51-1.57 3.51-3.47v-3.51H30.5c-1.93 0-3.51 1.58-3.51 3.51zM39.21 34.74h3.51v-3.51c0-1.92-1.61-3.51-3.51-3.51s-3.49 1.57-3.49 3.51 1.59 3.51 3.49 3.51zM56.74 45.22H48c-1.94 0-3.51 1.58-3.51 3.51S46.06 52.2 48 52.2h8.74c1.92 0 3.51-1.57 3.51-3.47s-1.59-3.51-3.51-3.51zM47.99 43.48c1.9 0 3.47-1.58 3.47-3.51v-8.74c0-1.92-1.57-3.51-3.47-3.51s-3.51 1.59-3.51 3.51v8.74c0 1.94 1.58 3.51 3.51 3.51zM48 53.95h-3.51v3.51c0 1.93 1.61 3.51 3.51 3.51s3.47-1.57 3.47-3.51-1.57-3.51-3.47-3.51z",
    "fill": "none"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M67.32 45.24h-.01c0-12.21-10.47-22.12-23.55-22.21C30.7 22.94 20.07 32.72 20 44.92c-.03 3.94 1.05 7.56 2.92 10.81.24.4.31.86.15 1.26l-2.25 7c-.4 1.26.77 2.36 2.04 1.99l6.95-2.4c.48-.15.95-.07 1.34.16 3.61 2.15 7.85 3.36 12.41 3.39 13.06.09 23.69-9.69 23.76-21.89zM39.21 27.72c1.9 0 3.51 1.59 3.51 3.51v3.51h-3.51c-1.9 0-3.49-1.58-3.49-3.51s1.59-3.51 3.49-3.51zm-5.2 21.01c0 1.9-1.58 3.47-3.51 3.47s-3.51-1.54-3.51-3.47 1.59-3.51 3.51-3.51h3.51v3.51zm8.72 8.74c0 1.93-1.61 3.51-3.51 3.51s-3.49-1.59-3.49-3.51v-8.74c0-1.94 1.59-3.51 3.49-3.51s3.51 1.58 3.51 3.51v8.74zm-3.51-14h-8.74c-1.93 0-3.51-1.61-3.51-3.51s1.59-3.49 3.51-3.49h8.74c1.94 0 3.51 1.59 3.51 3.49s-1.58 3.51-3.51 3.51zm13.99-3.51c0-1.9 1.58-3.49 3.51-3.49s3.51 1.59 3.51 3.49-1.59 3.51-3.51 3.51h-3.51v-3.51zm-8.74-8.72c0-1.92 1.61-3.51 3.51-3.51s3.47 1.59 3.47 3.51v8.74c0 1.94-1.57 3.51-3.47 3.51s-3.51-1.58-3.51-3.51v-8.74zM48 60.99c-1.9 0-3.51-1.59-3.51-3.51v-3.51H48c1.9 0 3.47 1.58 3.47 3.51S49.9 60.99 48 60.99zm8.74-8.77H48c-1.94 0-3.51-1.57-3.51-3.47s1.57-3.51 3.51-3.51h8.74c1.92 0 3.51 1.61 3.51 3.51s-1.59 3.47-3.51 3.47zM79.92 74.91l-1.65-5.26c.96-1.81 1.51-3.81 1.51-5.96 0-5.05-3.01-9.42-7.46-11.66C70.48 61.1 64.37 67.55 54 71.39c2.57 3.36 6.79 5.54 11.55 5.54 2.64 0 5.1-.65 7.21-1.84l5.11 1.8c1.26.4 2.44-.71 2.05-1.97z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_slack_conversations";
freezeTemplate(tmpl);
