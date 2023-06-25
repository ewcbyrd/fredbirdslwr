import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./hourglass.css";

import _implicitScopedStylesheets from "./hourglass.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M8.89 2.01c-.86 0-1.56.7-1.56 1.56v2.47c0 .86.7 1.56 1.56 1.56h2.18v6.07c0 .76.28 1.49.78 2.06l7.5 8.46c.25.28.39.65.39 1.03v2.58c0 1.21-5.37 6.32-7.66 8.45-.64.6-1.02 1.43-1.02 2.31v5.87H8.88c-.86 0-1.56.7-1.56 1.56v2.47c0 .86.7 1.56 1.56 1.56h34.23c.86 0 1.56-.7 1.56-1.56v-2.47c0-.86-.7-1.56-1.56-1.56h-2.18v-5.86c0-.88-.38-1.73-1.03-2.32-2.31-2.12-7.69-7.21-7.69-8.45v-2.57c0-.38.14-.75.39-1.03l7.54-8.46c.51-.57.79-1.31.79-2.07V7.6h2.18c.86 0 1.56-.7 1.56-1.56V3.57c0-.86-.7-1.56-1.56-1.56H8.89zm7.46 9.43c-.77 0-1.39.62-1.39 1.39 0 .34.12.67.35.92l6.95 7.85c.88 1 1.37 2.28 1.37 3.61v2.58c0 1.27-.58 2.27-.76 2.57-.28.49-.63.96-.95 1.37-.65.83-1.5 1.75-2.34 2.63-1.44 1.5-3.07 3.06-4.24 4.16a1.204 1.204 0 00.82 2.08h19.71a1.186 1.186 0 00.81-2.06c-1.18-1.1-2.82-2.65-4.26-4.15-.85-.88-1.7-1.8-2.36-2.64-.32-.41-.67-.88-.96-1.37-.18-.31-.76-1.31-.76-2.58v-2.57c0-1.34.49-2.62 1.38-3.62l6.99-7.85c.23-.25.35-.58.35-.92 0-.77-.62-1.39-1.39-1.39H16.35z"
  },
  key: 2,
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
  }, [api_element("g", stc0, [api_element("path", stc1)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_hourglass";
freezeTemplate(tmpl);
