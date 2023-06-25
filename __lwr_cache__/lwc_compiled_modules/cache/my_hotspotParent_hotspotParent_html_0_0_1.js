import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./hotspotParent.css";

import _implicitScopedStylesheets from "./hotspotParent.scoped.css?scoped=true";

import _myHotspots from "my/hotspots";
import _myHotspotDetails from "my/hotspotDetails";
import {registerTemplate} from "lwc";
const stc0 = {
  classMap: {
    "slds-grid": true,
    "slds-wrap": true,
    "slds-gutters": true,
    "slds-p-left_medium": true,
    "slds-p-right_medium": true,
    "main": true,
    "slds-p-bottom_xx-large": true,
    "slds-p-top_medium": true
  },
  key: 0
};
const stc1 = {
  classMap: {
    "slds-col": true,
    "slds-large-size_1-of-3": true,
    "slds-small-size_1-of-1": true,
    "slds-p-left_x-small": true
  },
  key: 1
};
const stc2 = {
  key: 2
};
const stc3 = {
  classMap: {
    "slds-col": true,
    "slds-large-size_2-of-3": true,
    "slds-small-size_1-of-1": true
  },
  key: 4
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, c: api_custom_element, h: api_element} = $api;
  const {_m0, _m1} = $ctx;
  return [api_element("div", stc0, [api_element("div", stc1, [api_element("div", stc2, [api_custom_element("my-hotspots", _myHotspots, {
    key: 3,
    on: {
      "hotspotclick": _m0 || ($ctx._m0 = api_bind($cmp.handleHotspotClick)),
      "locationchange": _m1 || ($ctx._m1 = api_bind($cmp.handleLocationChange))
    }
  })])]), api_element("div", stc3, [api_custom_element("my-hotspot-details", _myHotspotDetails, {
    props: {
      "hotspot": $cmp.hotspot,
      "sightings": $cmp.sightings
    },
    key: 5
  })])])];
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
tmpl.stylesheetToken = "my-hotspotParent_hotspotParent";
freezeTemplate(tmpl);
