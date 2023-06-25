import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./announcements.css";

import _implicitScopedStylesheets from "./announcements.scoped.css?scoped=true";

import _lightningFormattedRichText from "lightning/formattedRichText";
import {parseFragment, registerTemplate, sanitizeAttribute} from "lwc";
const $fragment1 = parseFragment`<div class="slds-media__body${0}"${2}><h2 class="slds-card__header-title${0}"${2}>Club News</h2></div>`;
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
    "slds-icon-standard-announcement": true
  },
  attrs: {
    "title": "account"
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
    "slds-card__body": true,
    "slds-card__body_inner": true
  },
  key: 9
};
const stc7 = {
  "slds-p-bottom_small": true
};
const stc8 = {
  classMap: {
    "slds-text-heading_medium": true
  },
  key: 11
};
const stc9 = {
  classMap: {
    "slds-p-top_xx-small": true
  },
  key: 12
};
const stc10 = {
  classMap: {
    "slds-card__footer": true
  },
  key: 14
};
const stc11 = {
  "slds-card__footer-action": true
};
const stc12 = {
  "href": "javascript:void(0);"
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {h: api_element, st: api_static_fragment, k: api_key, d: api_dynamic_text, t: api_text, c: api_custom_element, i: api_iterator, b: api_bind} = $api;
  const {_m0} = $ctx;
  return [api_element("article", stc0, [api_element("div", stc1, [api_element("header", stc2, [api_element("div", stc3, [api_element("span", stc4, [api_element("svg", stc5, [api_element("use", {
    attrs: {
      "xlink:href": sanitizeAttribute("use", "http://www.w3.org/2000/svg", "xlink:href", "/icons/standard-sprite/svg/symbols.svg#announcement")
    },
    key: 6,
    svg: true
  })])])]), api_static_fragment($fragment1(), 8)])]), api_element("div", stc6, api_iterator($cmp.announcements, function (item) {
    return api_element("div", {
      classMap: stc7,
      key: api_key(10, item._id)
    }, [api_element("div", stc8, [api_text(api_dynamic_text(item.headline))]), api_element("div", stc9, [api_custom_element("lightning-formatted-rich-text", _lightningFormattedRichText, {
      props: {
        "value": item.details
      },
      key: 13
    })])]);
  })), $cmp.showFooter ? api_element("footer", stc10, [api_element("a", {
    classMap: stc11,
    attrs: stc12,
    key: 15,
    on: {
      "click": _m0 || ($ctx._m0 = api_bind($cmp.handleViewAllClick))
    }
  }, [api_text("View All Announcements")])]) : null])];
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
tmpl.stylesheetToken = "my-announcements_announcements";
freezeTemplate(tmpl);
