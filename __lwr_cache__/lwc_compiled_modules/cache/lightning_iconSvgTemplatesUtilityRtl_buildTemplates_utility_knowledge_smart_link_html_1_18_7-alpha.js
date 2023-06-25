import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./knowledge_smart_link.css";

import _implicitScopedStylesheets from "./knowledge_smart_link.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M34.1 41.48l-1.24-.18c-.36-.08-.71-.17-1.06-.29-.17-.05-.34-.08-.51-.08-.41 0-.81.15-1.11.44l-.3.29c-.77.75-1.8 1.17-2.87 1.17-.87.01-1.72-.29-2.4-.84a3.587 3.587 0 01-1.3-2.63c-.04-1.04.36-2.04 1.1-2.76l4.58-4.49c.69-.71 1.65-1.1 2.64-1.09.48 0 .96.08 1.41.26.48.2.91.48 1.29.84.18.18.34.39.47.61.27.46 3.6-4.07 3.27-4.39-.48-.5-1.03-.92-1.63-1.25-.95-.58-1.99-.97-3.09-1.15a9.534 9.534 0 00-6.1.88c-.76.4-1.47.91-2.09 1.52l-4.39 4.29a8.962 8.962 0 00-.27 12.68 8.985 8.985 0 006.55 2.76c2.41 0 4.73-.93 6.45-2.62l1.51-1.47c.4-.32.56-.85.4-1.33-.15-.63-.67-1.1-1.31-1.17z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M47.09 19.42a9.093 9.093 0 00-6.14-2.35c-2.48 0-4.87.98-6.63 2.73l-1.36 1.28c-.42.41-.57 1.02-.38 1.57.19.56.68.96 1.27 1.04.81.06 1.62.21 2.4.45.14.03.27.05.41.05.41 0 .81-.15 1.11-.44l.3-.29c.77-.75 1.8-1.17 2.87-1.17.87-.01 1.72.29 2.4.84.79.65 1.26 1.61 1.3 2.63.04 1.04-.36 2.04-1.1 2.76l-4.58 4.5c-.69.71-1.65 1.1-2.64 1.09-.48 0-.96-.08-1.41-.26-.48-.2-.91-.48-1.29-.84-.18-.18-4.07 3.46-3.75 3.78.49.47 1.03.89 1.6 1.25.94.58 1.97.98 3.06 1.17.57.11 1.15.16 1.73.16 1.54 0 3.05-.36 4.41-1.07.75-.41 1.44-.92 2.05-1.52l4.58-4.46c3.5-3.35 3.63-8.91.28-12.41a7.12 7.12 0 00-.48-.47zM38.88 12.73V5.15c-.03-.67-.58-1.2-1.25-1.22h-9.47a2.745 2.745 0 00-2.69 2.53v16.37c10.2-12.1 13.41-10.1 13.41-10.1zM15.39 30.75H6.61c-.68-.03-1.22-.58-1.24-1.25V8.71c0-.46-.39-.83-.86-.82a.67.67 0 00-.31.07A3.891 3.891 0 002 11.51v19.27c0 1.86 1.51 3.37 3.37 3.37h9.81l.2-3.4z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M20.86 27.4c.69-.02 1.24-.57 1.25-1.25V6.45a2.792 2.792 0 00-2.69-2.53H9.96c-.67.03-1.2.58-1.22 1.25v20.96c.02.69.57 1.24 1.25 1.25h10.87zM47.27 11.5c0-1.76-.59-3.27-2.35-3.69-.46-.09-.9.2-.99.66-.01.06-.02.12-.02.19v4.63c1.18.15 2.32.5 3.37 1.04V11.5z"
  },
  key: 4,
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
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2), api_element("path", stc3)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_knowledge_smart_link";
freezeTemplate(tmpl);
