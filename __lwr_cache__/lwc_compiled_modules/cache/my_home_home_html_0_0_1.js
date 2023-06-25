import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./home.css";

import _implicitScopedStylesheets from "./home.scoped.css?scoped=true";

import _cCarouselComponent from "c/carouselComponent";
import _myEvents from "my/events";
import _myNearbySightings from "my/nearbySightings";
import _myAnnouncements from "my/announcements";
import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<div class="slds-large-size_2-of-3 slds-small-size_1-of-1 slds-col${0}"${2}><div class="${0}"${2}><div class="slds-text-heading_large slds-p-top_small${0}"${2}><strong${3}>Welcome!</strong></div><div class="opening${0}"${2}>Welcome to the new and improved webpage for the Fredericksburg Birding Club (FBC). Our members are bird enthusiasts of all skill levels – from beginning to advanced birders – who reside in the greater Fredericksburg, Virginia area. We have been brought together because of our interest in birds and our love of birding. We welcome anyone to join us on one of our upcoming trips – even if you have never birded before – and hope you will consider becoming a member.</div></div></div>`;
const $fragment2 = parseFragment`<div class="slds-large-size_1-of-3 slds-small-size_1-of-1 slds-col${0}"${2}><div class="slds-text-align_center slds-p-bottom_large slds-p-top_large${0}"${2}><a href="https://ebird.org/" target="_blank"${3}><img class="ebird${0}" src="/images/ebird.png"${2}></a></div></div>`;
const stc0 = {
  classMap: {
    "slds-grid": true,
    "slds-wrap": true,
    "slds-p-left_large": true,
    "slds-p-right_large": true,
    "main": true,
    "slds-p-bottom_xx-large": true,
    "slds-p-top_medium": true,
    "slds-gutters": true
  },
  key: 0
};
const stc1 = {
  classMap: {
    "slds-large-size_2-of-3": true,
    "slds-small-size_1-of-1": true,
    "slds-col": true
  },
  key: 5
};
const stc2 = {
  classMap: {
    "slds-p-top_medium": true
  },
  key: 6
};
const stc3 = {
  classMap: {
    "carousel-container": true
  },
  key: 7
};
const stc4 = {
  classMap: {
    "slds-large-size_1-of-3": true,
    "slds-small-size_1-of-1": true,
    "slds-col": true,
    "slds-p-top_medium": true
  },
  key: 9
};
const stc5 = {
  props: {
    "home": "true"
  },
  key: 10
};
const stc6 = {
  classMap: {
    "slds-p-top_small": true
  },
  key: 11
};
const stc7 = {
  key: 12
};
const stc8 = {
  classMap: {
    "slds-p-top_small": true
  },
  key: 13
};
const stc9 = {
  props: {
    "home": "true"
  },
  key: 14
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, c: api_custom_element, h: api_element} = $api;
  return [api_element("div", stc0, [api_static_fragment($fragment1(), 2), api_static_fragment($fragment2(), 4), api_element("div", stc1, [api_element("div", stc2, [api_element("div", stc3, [api_custom_element("c-carousel-component", _cCarouselComponent, {
    props: {
      "items": $cmp.items,
      "options": $cmp.options
    },
    key: 8
  })])])]), api_element("div", stc4, [api_custom_element("my-events", _myEvents, stc5), api_element("div", stc6, [api_custom_element("my-nearby-sightings", _myNearbySightings, stc7)]), api_element("div", stc8, [api_custom_element("my-announcements", _myAnnouncements, stc9)])])])];
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
tmpl.stylesheetToken = "my-home_home";
freezeTemplate(tmpl);
