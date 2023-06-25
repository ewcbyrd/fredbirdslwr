import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./your_account.css";

import _implicitScopedStylesheets from "./your_account.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M36.48 39.52h10.87c.33 0 .65-.25.65-.57l1.96-7.03c.16-.49-.25-.9-.65-.9H32.56l-.25-1.06c-.16-.49-.57-.82-1.06-.82h-1.8c-.57 0-1.14.49-1.14 1.06-.08.65.49 1.14 1.06 1.14h1.06l.98 3.27 2.45 8.42c.16.49.57.82 1.06.82h12.75c.57 0 1.14-.49 1.14-1.06.08-.65-.49-1.14-1.06-1.14H36.47c-.49 0-.9-.33-1.06-.74v-.08c-.16-.65.33-1.31 1.06-1.31z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M35.91 2.26H4.04C2.24 2.26 2 4.14 2 4.3v40.45c.08 1.06.74 2.7 3.6 2.7h23.12c2.61 0 2.45-1.72 2.29-2.37l-.08-.25-.25-.9-.16-.49-2.53-8.42c-.16-.57-.82-.82-.82-.82-.41-.25-.82-.49-1.06-.82-.82-.9-1.23-2.12-1.14-3.27.16-2.29 2.12-4.09 4.41-4.09h1.8c1.23 0 2.29.49 3.1 1.31l.08.08c.16.16.49.41.98.41h1.14c1.06 0 1.14-1.14 1.23-1.47l.08-8.58V4.8c.08-1.96-1.31-2.53-1.88-2.53zM12.46 40.83c0 1.06-.82 1.88-1.88 1.88H8.7c-1.06 0-1.88-.82-1.88-1.88v-1.88c0-1.06.82-1.88 1.88-1.88h1.88c1.06 0 1.88.82 1.88 1.88v1.88zm0-9.72c0 1.06-.82 1.88-1.88 1.88H8.7c-1.06 0-1.88-.82-1.88-1.88v-1.88c0-1.06.82-1.88 1.88-1.88h1.88c1.06 0 1.88.82 1.88 1.88v1.88zm0-9.56c0 1.06-.82 1.88-1.88 1.88H8.7c-1.06 0-1.88-.82-1.88-1.88v-1.88c0-1.06.82-1.88 1.88-1.88h1.88c1.06 0 1.88.82 1.88 1.88v1.88zm0-9.64c0 1.06-.82 1.88-1.88 1.88H8.7c-1.06 0-1.88-.82-1.88-1.88v-1.88c0-1.06.82-1.88 1.88-1.88h1.88c1.06 0 1.88.82 1.88 1.88v1.88zm10.38 28.92c0 1.06-.82 1.88-1.88 1.88h-1.88c-1.06 0-1.88-.82-1.88-1.88v-1.88c0-1.06.82-1.88 1.88-1.88h1.88c1.06 0 1.88.82 1.88 1.88v1.88zm0-9.72c0 1.06-.82 1.88-1.88 1.88h-1.88c-1.06 0-1.88-.82-1.88-1.88v-1.88c0-1.06.82-1.88 1.88-1.88h1.88c1.06 0 1.88.82 1.88 1.88v1.88zm0-9.56c0 1.06-.82 1.88-1.88 1.88h-1.88c-1.06 0-1.88-.82-1.88-1.88v-1.88c0-1.06.82-1.88 1.88-1.88h1.88c1.06 0 1.88.82 1.88 1.88v1.88zm0-9.64c0 1.06-.82 1.88-1.88 1.88h-1.88c-1.06 0-1.88-.82-1.88-1.88v-1.88c0-1.06.82-1.88 1.88-1.88h1.88c1.06 0 1.88.82 1.88 1.88v1.88zm10.38 9.64c0 1.06-.82 1.88-1.88 1.88h-1.88c-1.06 0-1.88-.82-1.88-1.88v-1.88c0-1.06.82-1.88 1.88-1.88h1.88c1.06 0 1.88.82 1.88 1.88v1.88zm0-9.64c0 1.06-.82 1.88-1.88 1.88h-1.88c-1.06 0-1.88-.82-1.88-1.88v-1.88c0-1.06.82-1.88 1.88-1.88h1.88c1.06 0 1.88.82 1.88 1.88v1.88z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "cx": "36.73",
    "cy": "47.94",
    "r": "1.8"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "cx": "45.55",
    "cy": "47.94",
    "r": "1.8"
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
      "viewBox": "0 0 52 52",
      "part": "icon"
    },
    key: 0,
    svg: true
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2), api_element("circle", stc3), api_element("circle", stc4)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_your_account";
freezeTemplate(tmpl);
