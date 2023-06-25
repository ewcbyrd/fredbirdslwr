import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./crypto_transaction.css";

import _implicitScopedStylesheets from "./crypto_transaction.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M44.61 20.89a6.621 6.621 0 016.64 0l20.19 11.65a6.656 6.656 0 013.32 5.75v17.32l-8.24-7.88c-.42-.26-.64-.4-.87-.51-.26-.13-.54-.23-1.12-.46-.22-.08-.91-.14-1.14-.14s-1.04.05-1.26.14c-.39.13-.61.2-.82.3-.29.14-.56.33-1.2.78l-2.32 2.1c-.18.15-1.22 1.11-1.71 2.21-.1.21-.28.87-.28 1.11v.16c-.02.36-.06 1.12.17 2.05l.05.11c.17.38.62 1.41.78 1.55l.99.88H39.1c-.76.17-2.1.77-3.21 1.88-.94 1.11-1.22 2.21-1.22 2.77v4.42c0 .55.64 2.13 1.22 2.77 1 1.11 2.45 1.66 3.21 1.83h18.69l-1 1.04c-.18.15-.68 1.16-.77 1.37-.1.21-.28 1.05-.28 1.28 0 .39.02.72.04 1l-4.52 2.61a6.621 6.621 0 01-6.64 0L24.43 67.33a6.656 6.656 0 01-3.32-5.75V38.27c0-2.37 1.26-4.56 3.32-5.75l20.19-11.65z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M57.77 58.02c.09-.21.05.23 0 0z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "d": "M62.7 50.08c-.22.09-.41.22-.58.39l-2.51 2.29c-.18.15-.32.35-.41.56-.1.21-.15.44-.15.68s.05.47.15.68c.1.21.24.4.41.56l4.29 4.15a1.123 1.123 0 01.26 1.26c-.09.21-.25.39-.44.51-.2.12-.42.18-.65.16H39.85c-.47.02-.92.21-1.26.54-.34.33-.56.76-.6 1.24v3.52c.03.47.24.92.59 1.24.35.32.8.51 1.27.51h23.22a1.128 1.128 0 011.07.69c.09.21.12.44.07.66-.04.22-.15.43-.3.59l-4.29 4.23c-.18.15-.32.35-.41.56-.1.21-.15.44-.15.68s.05.47.15.68c.1.21.24.4.41.56l2.51 2.46c.16.17.36.3.57.39.22.09.45.14.68.14a1.76 1.76 0 001.25-.53l13.7-13.29c.18-.15.32-.35.41-.56.1-.21.15-.44.15-.68s-.05-.47-.15-.68c-.1-.21-.24-.4-.41-.56l-13.7-13.24c-.16-.17-.36-.3-.58-.39-.22-.09-.45-.14-.68-.14s-.47.05-.68.14z"
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
      "viewBox": "0 0 100 100",
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_crypto_transaction";
freezeTemplate(tmpl);
