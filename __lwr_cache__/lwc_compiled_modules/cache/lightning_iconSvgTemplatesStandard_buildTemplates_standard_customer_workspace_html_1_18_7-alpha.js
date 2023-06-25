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
    "d": "M36.84 22.58c1.11-.03 2.03.84 2.06 1.95v1.49c0 1.1-.87 2-1.96 2.02h-6.29c-2.2 0-4 1.73-4.09 3.93v38.88c0 2.2 1.74 4.01 3.94 4.09h38.85c2.2 0 4-1.73 4.09-3.93v-6.35c-.03-1.11.84-2.03 1.95-2.06h1.49c1.11-.03 2.03.84 2.06 1.95v7.68a8.255 8.255 0 01-8.18 8.18H29.27c-4.52 0-8.18-3.66-8.18-8.18V30.76a8.177 8.177 0 018.11-8.25h7.65v.07z",
    "fill-rule": "evenodd"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M58.83 53.71h10.72c.33.02.62-.24.64-.57l1.94-6.93a.694.694 0 00-.45-.86.645.645 0 00-.2-.03H54.95l-.25-1.05c-.13-.47-.55-.79-1.04-.8h-1.77c-.59 0-1.08.46-1.13 1.05-.05.57.37 1.07.94 1.13H52.86l.95 3.22 2.43 8.3c.14.47.56.79 1.05.8h12.57c.59-.01 1.07-.47 1.12-1.05.05-.57-.37-1.07-.94-1.13H58.81c-.47 0-.88-.29-1.05-.72v-.08c-.14-.56.2-1.12.76-1.25.09-.02.19-.03.29-.03z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M50.77 49.85l-.33-1.21c-.69-.23-1.31-.64-1.77-1.2a4.295 4.295 0 01.34-6.05 4.34 4.34 0 012.96-1.09h1.7c1.41 0 2.73.7 3.55 1.85h4.6a23.71 23.71 0 00-4.36-2.26c-2.58-1.05-2.89-2.1-2.89-3.14.13-1.13.67-2.16 1.53-2.9a7.331 7.331 0 002.33-5.65c0-4.19-2.58-7.81-7.09-7.81s-7.09 3.63-7.09 7.81c-.02 2.12.83 4.16 2.35 5.65.89.71 1.45 1.77 1.53 2.9 0 1.04-.41 2.09-2.9 3.14-3.87 1.53-7.42 3.38-7.5 6.82a4.086 4.086 0 003.79 4.28h9.55l-.27-1.15z"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "cx": "59.08",
    "cy": "62",
    "r": "1.77"
  },
  key: 5,
  svg: true
};
const stc5 = {
  attrs: {
    "cx": "67.78",
    "cy": "62",
    "r": "1.77"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_customer_workspace";
freezeTemplate(tmpl);
