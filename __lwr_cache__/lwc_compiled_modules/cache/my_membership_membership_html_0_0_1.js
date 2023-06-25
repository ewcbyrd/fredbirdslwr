import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./membership.css";

import _implicitScopedStylesheets from "./membership.scoped.css?scoped=true";

import {parseFragment, registerTemplate, sanitizeAttribute} from "lwc";
const $fragment1 = parseFragment`<span class="slds-assistive-text${0}"${2}>Close</span>`;
const $fragment2 = parseFragment`<div class="slds-backdrop slds-backdrop_open${0}"${2}></div>`;
const $fragment3 = parseFragment`<div class="slds-grid slds-wrap${0}"${2}><div class="slds-small-size_1-of-1 slds-large-size_7-of-12 slds-p-left_large slds-p-right_large${0}"${2}><div class="slds-text-heading_large slds-p-top_x-small${0}"${2}>FBC Membership</div><div${3}>Are you a new birder looking to gain exerpience? Are you a veteran birder looking for a group to share your love of birding with? Or, are you just looking to get outdoors with nice people? We have some great news! The Fredericksburg Birding Club delivers all of this and more.</div><div class="slds-p-top_x-small${0}"${2}>There are two levels of membership in the club, Basic and Full. Both allow full participation in field trips and access to the club web site.</div><div class="slds-text-heading_medium slds-p-top_x-small${0}"${2}>Basic Membership</div><div${3}>Basic Membership is our free level. It is designed for individuals who will occasionally participate in club events. It provides for:</div><ul class="slds-list_dotted${0}"${2}><li${3}>Participation in regular club field trips</li><li${3}>Access to basic web site features</li></ul><div class="slds-text-heading_medium slds-p-top_x-small${0}"${2}>Full Membership</div><div${3}>Full Membership is our paid level. It is designed for individuals who will be regular participants in club events. Annual membership dues are $20 for an individual or $25 for a family. It provides for:</div><ul class="slds-list_dotted${0}"${2}><li${3}>Participation in regular and Full Member-only club field trips</li><li${3}>Access to all web site features</li><li${3}>Voting rights at club meetings</li><li${3}>Eligibility for club officer positions</li></ul><div class="slds-p-top_x-small${0}"${2}>Our club is open to anyone who would like to join. Just fill in the form to the right and click submit. This will add you as a non-paying member. If you desire to become a paid member, please send a check made out to Fredericksburg Birding Club to:<div class="slds-p-top_small${0}"${2}>Linda Chaney<br${3}>Fredericksburg Birding Club<br${3}>PO Box 115<br${3}>Partlow, VA 22534</div></div></div><div class="slds-small-size_1-of-1 slds-large-size_5-of-12 slds-p-top_x-small${0}"${2}><iframe style="height: 670px; width: 100%" src="https://cdn.forms-content.sg-form.com/7af3b17c-c85b-11eb-8dc8-7eae1ceb606b"${3}></iframe></div></div>`;
const stc0 = {
  classMap: {
    "slds-p-around_medium": true,
    "main": true
  },
  key: 0
};
const stc1 = {
  "slds-modal": true,
  "slds-fade-in-open": true
};
const stc2 = {
  classMap: {
    "slds-modal__container": true
  },
  key: 2
};
const stc3 = {
  classMap: {
    "slds-modal__header": true
  },
  key: 3
};
const stc4 = {
  classMap: {
    "slds-button": true,
    "slds-button_icon": true,
    "slds-modal__close": true,
    "slds-button_icon-inverse": true
  },
  attrs: {
    "title": "Close"
  },
  key: 4
};
const stc5 = {
  classMap: {
    "slds-button__icon": true,
    "slds-button__icon_large": true
  },
  attrs: {
    "aria-hidden": "true"
  },
  key: 5,
  svg: true
};
const stc6 = {
  "slds-modal__title": true,
  "slds-hyphenate": true
};
const stc7 = {
  "slds-modal__content": true,
  "slds-p-around_medium": true
};
const stc8 = {
  key: 11
};
const stc9 = {
  classMap: {
    "slds-modal__footer": true
  },
  key: 12
};
const stc10 = {
  "slds-button": true,
  "slds-button_brand": true
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {gid: api_scoped_id, h: api_element, st: api_static_fragment, d: api_dynamic_text, t: api_text, b: api_bind} = $api;
  const {_m0} = $ctx;
  return [api_element("div", stc0, [$cmp.showModal ? api_element("section", {
    classMap: stc1,
    attrs: {
      "role": "dialog",
      "tabindex": "-1",
      "aria-labelledby": api_scoped_id("modal-heading-01"),
      "aria-modal": "true",
      "aria-describedby": api_scoped_id("modal-content-id-1")
    },
    key: 1
  }, [api_element("div", stc2, [api_element("header", stc3, [api_element("button", stc4, [api_element("svg", stc5, [api_element("use", {
    attrs: {
      "xlink:href": sanitizeAttribute("use", "http://www.w3.org/2000/svg", "xlink:href", "/icons/utility-sprite/svg/symbols.svg#close")
    },
    key: 6,
    svg: true
  })]), api_static_fragment($fragment1(), 8)]), api_element("h2", {
    classMap: stc6,
    attrs: {
      "id": api_scoped_id("modal-heading-01")
    },
    key: 9
  }, [api_text(api_dynamic_text($cmp.modalDetail.header))])]), api_element("div", {
    classMap: stc7,
    attrs: {
      "id": api_scoped_id("modal-content-id-1")
    },
    key: 10
  }, [api_element("p", stc8, [api_text(api_dynamic_text($cmp.modalDetail.message))])]), api_element("footer", stc9, [api_element("button", {
    classMap: stc10,
    key: 13,
    on: {
      "click": _m0 || ($ctx._m0 = api_bind($cmp.handleOkClick))
    }
  }, [api_text("OK")])])])]) : null, $cmp.showModal ? api_static_fragment($fragment2(), 15) : null, api_static_fragment($fragment3(), 17)])];
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
tmpl.stylesheetToken = "my-membership_membership";
freezeTemplate(tmpl);
