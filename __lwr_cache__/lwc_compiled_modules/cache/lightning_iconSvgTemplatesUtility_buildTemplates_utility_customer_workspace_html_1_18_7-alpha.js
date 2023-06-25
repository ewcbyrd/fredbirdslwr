import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./customer_workspace.css";

import _implicitScopedStylesheets from "./customer_workspace.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M15.47 4.15c.89-.02 1.62.67 1.65 1.56V6.9c0 .88-.69 1.6-1.57 1.61h-5.03c-1.76 0-3.2 1.39-3.27 3.14v31.1c0 1.76 1.39 3.21 3.15 3.27h31.08c1.76 0 3.2-1.39 3.27-3.14V37.8c-.02-.89.67-1.62 1.56-1.65h1.19c.89-.02 1.62.67 1.65 1.56v6.14a6.625 6.625 0 01-6.55 6.55H9.42c-3.61 0-6.55-2.93-6.55-6.55V10.69a6.551 6.551 0 016.49-6.6h6.12v.05z",
    "fill-rule": "evenodd"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M33.07 29.05h8.57c.27.01.5-.19.51-.46l1.55-5.54a.54.54 0 00-.36-.68c-.05-.02-.1-.02-.16-.03H29.96l-.2-.84a.888.888 0 00-.83-.64h-1.42c-.47 0-.87.37-.91.84-.04.46.29.86.75.9H28.28l.76 2.57 1.94 6.64c.11.37.45.64.84.64h10.06c.47 0 .86-.37.89-.84a.823.823 0 00-.75-.9h-8.98c-.37 0-.71-.23-.84-.58v-.07c-.11-.44.16-.89.61-1 .08-.02.15-.03.23-.02z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M26.62 25.96l-.26-.97a3.13 3.13 0 01-1.42-.96 3.43 3.43 0 01.27-4.84c.65-.58 1.5-.89 2.37-.87h1.36c1.13 0 2.19.56 2.84 1.48h3.68c-1.1-.72-2.27-1.33-3.49-1.81-2.06-.84-2.31-1.68-2.31-2.51.1-.9.54-1.73 1.22-2.32a5.88 5.88 0 001.87-4.52c0-3.35-2.06-6.25-5.67-6.25s-5.67 2.9-5.67 6.25c-.01 1.7.66 3.33 1.88 4.52a3.26 3.26 0 011.22 2.32c0 .83-.33 1.67-2.32 2.51-3.1 1.22-5.93 2.71-6 5.45a3.274 3.274 0 003.03 3.43h7.64l-.22-.92z"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "cx": "33.26",
    "cy": "35.68",
    "r": "1.42"
  },
  key: 5,
  svg: true
};
const stc5 = {
  attrs: {
    "cx": "40.22",
    "cy": "35.68",
    "r": "1.42"
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
      "viewBox": "0 0 52 52",
      "part": "icon"
    },
    key: 0,
    svg: true
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2), api_element("path", stc3), api_element("circle", stc4), api_element("circle", stc5)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_customer_workspace";
freezeTemplate(tmpl);
