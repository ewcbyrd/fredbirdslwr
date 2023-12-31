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
    "d": "M17.38 15.17h-6.99c-1.54 0-2.81 1.27-2.81 2.79s1.27 2.81 2.81 2.81h6.99c1.55 0 2.81-1.26 2.81-2.81s-1.26-2.79-2.81-2.79zM34.19 17.96c0-1.52-1.26-2.79-2.81-2.79s-2.81 1.27-2.81 2.79v2.81h2.81c1.54 0 2.81-1.29 2.81-2.81zM17.38 22.17c-1.52 0-2.79 1.26-2.79 2.81v6.99c0 1.54 1.27 2.81 2.79 2.81s2.81-1.27 2.81-2.81v-6.99c0-1.55-1.26-2.81-2.81-2.81zM7.59 24.98c0 1.55 1.27 2.78 2.81 2.78s2.81-1.26 2.81-2.78v-2.81H10.4c-1.54 0-2.81 1.26-2.81 2.81zM17.37 13.79h2.81v-2.81c0-1.54-1.29-2.81-2.81-2.81s-2.79 1.26-2.79 2.81 1.27 2.81 2.79 2.81zM31.39 22.17H24.4c-1.55 0-2.81 1.26-2.81 2.81s1.26 2.78 2.81 2.78h6.99c1.54 0 2.81-1.26 2.81-2.78s-1.27-2.81-2.81-2.81zM24.39 20.78c1.52 0 2.78-1.26 2.78-2.81v-6.99c0-1.54-1.26-2.81-2.78-2.81s-2.81 1.27-2.81 2.81v6.99c0 1.55 1.26 2.81 2.81 2.81zM24.4 29.16h-2.81v2.81c0 1.54 1.29 2.81 2.81 2.81s2.78-1.26 2.78-2.81-1.26-2.81-2.78-2.81z",
    "fill": "none"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M39.86 22.19h-.01c0-9.77-8.38-17.7-18.84-17.77C10.56 4.35 2.06 12.17 2 21.93c-.02 3.15.84 6.05 2.34 8.65.19.32.25.69.12 1.01l-1.8 5.6c-.32 1.01.62 1.89 1.63 1.59l5.56-1.92c.38-.12.76-.06 1.07.13 2.89 1.72 6.28 2.69 9.93 2.71 10.45.07 18.95-7.75 19.01-17.51zM17.37 8.17c1.52 0 2.81 1.27 2.81 2.81v2.81h-2.81c-1.52 0-2.79-1.26-2.79-2.81s1.27-2.81 2.79-2.81zm-4.16 16.81c0 1.52-1.26 2.78-2.81 2.78s-2.81-1.23-2.81-2.78 1.27-2.81 2.81-2.81h2.81v2.81zm6.98 6.99c0 1.54-1.29 2.81-2.81 2.81s-2.79-1.27-2.79-2.81v-6.99c0-1.55 1.27-2.81 2.79-2.81s2.81 1.26 2.81 2.81v6.99zm-2.81-11.2h-6.99c-1.54 0-2.81-1.29-2.81-2.81s1.27-2.79 2.81-2.79h6.99c1.55 0 2.81 1.27 2.81 2.79s-1.26 2.81-2.81 2.81zm11.19-2.81c0-1.52 1.26-2.79 2.81-2.79s2.81 1.27 2.81 2.79-1.27 2.81-2.81 2.81h-2.81v-2.81zm-6.99-6.98c0-1.54 1.29-2.81 2.81-2.81s2.78 1.27 2.78 2.81v6.99c0 1.55-1.26 2.81-2.78 2.81s-2.81-1.26-2.81-2.81v-6.99zm2.82 23.8c-1.52 0-2.81-1.27-2.81-2.81v-2.81h2.81c1.52 0 2.78 1.26 2.78 2.81s-1.26 2.81-2.78 2.81zm6.99-7.02H24.4c-1.55 0-2.81-1.26-2.81-2.78s1.26-2.81 2.81-2.81h6.99c1.54 0 2.81 1.29 2.81 2.81s-1.27 2.78-2.81 2.78zM49.94 45.93l-1.32-4.21c.77-1.45 1.21-3.05 1.21-4.77 0-4.04-2.41-7.54-5.97-9.33-1.47 7.26-6.36 12.42-14.66 15.49 2.06 2.69 5.43 4.43 9.24 4.43 2.11 0 4.08-.52 5.77-1.47l4.09 1.44c1.01.32 1.95-.57 1.64-1.58z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_slack_conversations";
freezeTemplate(tmpl);
