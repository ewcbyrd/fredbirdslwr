import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./newsletterDetails.css";

import _implicitScopedStylesheets from "./newsletterDetails.scoped.css?scoped=true";

import {registerTemplate, sanitizeAttribute} from "lwc";
const stc0 = {
  classMap: {
    "slds-card": true
  },
  key: 0
};
const stc1 = {
  classMap: {
    "slds-card__header": true,
    "slds-grid": true
  },
  key: 1
};
const stc2 = {
  classMap: {
    "slds-media": true,
    "slds-media_center": true,
    "slds-has-flexi-truncate": true
  },
  key: 2
};
const stc3 = {
  classMap: {
    "slds-media__figure": true
  },
  key: 3
};
const stc4 = {
  classMap: {
    "slds-icon_container": true,
    "slds-icon-standard-document": true
  },
  attrs: {
    "title": "newsletters"
  },
  key: 4
};
const stc5 = {
  classMap: {
    "slds-icon": true,
    "slds-icon_medium": true
  },
  attrs: {
    "aria-hidden": "true"
  },
  key: 5,
  svg: true
};
const stc6 = {
  classMap: {
    "slds-media__body": true
  },
  key: 7
};
const stc7 = {
  classMap: {
    "slds-card__header-title": true
  },
  key: 8
};
const stc8 = {
  classMap: {
    "slds-card__body": true,
    "slds-card__body_inner": true
  },
  key: 9
};
const stc9 = {
  styleDecls: [["overflow", "auto", true], ["-webkit-overflow-scrolling", "touch", true]],
  key: 10
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {h: api_element, d: api_dynamic_text, t: api_text} = $api;
  return [$cmp.newsletter ? api_element("article", stc0, [api_element("div", stc1, [api_element("header", stc2, [api_element("div", stc3, [api_element("span", stc4, [api_element("svg", stc5, [api_element("use", {
    attrs: {
      "xlink:href": sanitizeAttribute("use", "http://www.w3.org/2000/svg", "xlink:href", "/icons/standard-sprite/svg/symbols.svg#knowledge")
    },
    key: 6,
    svg: true
  })])])]), api_element("div", stc6, [api_element("h2", stc7, [api_text(api_dynamic_text($cmp.newsletter.title))])])])]), api_element("div", stc8, [api_element("div", stc9, [api_element("iframe", {
    attrs: {
      "src": $cmp.pdfFileLocation,
      "width": "100%",
      "height": "600px"
    },
    key: 11
  })])])]) : null];
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
tmpl.stylesheetToken = "my-newsletterDetails_newsletterDetails";
freezeTemplate(tmpl);
