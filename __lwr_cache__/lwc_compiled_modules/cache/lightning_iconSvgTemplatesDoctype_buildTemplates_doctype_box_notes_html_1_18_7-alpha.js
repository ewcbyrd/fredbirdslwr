import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./box_notes.css";

import _implicitScopedStylesheets from "./box_notes.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "fill": "#056764",
    "d": "M5.112.011A5.074 5.074 0 00.039 5.085v53.841A5.074 5.074 0 005.112 64h45.775a5.074 5.074 0 005.074-5.074V20.321L37.057.011H5.112z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "fill": "#024D4C",
    "d": "M55.96 20.377v1H43.161s-6.312-1.26-6.129-6.707c0 0 .208 5.707 6.004 5.707H55.96z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "fill": "#ACF3E4",
    "d": "M37.059.025v14.561c0 1.656 1.104 5.791 6.104 5.791h12.799L37.059.025z"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "fill": "#FFF",
    "d": "M27.094 39.334l2.105-2.104H10.495s-.361.016-.362.401 0 1.159 0 1.347c0 .187.182.355.375.355l16.586.001zM19.768 46.602l2.104-2.104H10.495s-.361.016-.362.401v1.347c0 .187.182.356.375.356h9.26zM14.708 53.904l.268-2.104h-4.48s-.361.017-.362.402 0 1.16 0 1.346c0 .187.182.356.375.356h4.199zM15.588 53.873s1.672-.03 2.015-.112c.342-.082.406-.146.531-.271l13.104-13.104s-.494.42-1.592-.682c-.869-.87-.487-1.402-.487-1.402s-12.75 12.729-12.99 12.988c-.24.26-.252.404-.274.509-.021.105-.307 2.074-.307 2.074z"
  },
  key: 5,
  svg: true
};
const stc5 = {
  attrs: {
    "fill": "#FFF",
    "d": "M30.742 36.714c-.201.201-.96.938-1.059 1.058-.097.121-.184.227-.104.58.079.353.682 1.354 1.656 1.629 0 0 .299.107.541-.133.24-.242 1.092-1.093 1.092-1.093s.204-.172.042-.621c-.163-.448-.81-1.247-1.582-1.539-.387-.148-.586.119-.586.119z"
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
      "viewBox": "0 0 56 64",
      "part": "icon"
    },
    key: 0,
    svg: true
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2), api_element("path", stc3), api_element("path", stc4), api_element("path", stc5)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesDoctype_box_notes";
freezeTemplate(tmpl);
