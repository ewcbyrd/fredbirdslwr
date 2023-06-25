import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./pageLink.css";

import _implicitScopedStylesheets from "./pageLink.scoped.css?scoped=true";

import _lightningMenuItem from "lightning/menuItem";
import _lightningMenuSubheader from "lightning/menuSubheader";
import _lightningButtonMenu from "lightning/buttonMenu";
import {registerTemplate} from "lwc";
const stc0 = {
  classMap: {
    "slds-context-bar": true
  },
  key: 0
};
const stc1 = {
  classMap: {
    "slds-context-bar__primary": true
  },
  key: 1
};
const stc2 = {
  classMap: {
    "slds-context-bar__item": true,
    "slds-context-bar__dropdown-trigger": true,
    "slds-dropdown-trigger": true,
    "slds-dropdown-trigger_click": true,
    "slds-no-hover": true
  },
  key: 2
};
const stc3 = {
  classMap: {
    "slds-context-bar__label-action": true,
    "slds-context-bar__app-name": true
  },
  key: 3
};
const stc4 = {
  attrs: {
    "title": "App Name"
  },
  key: 4
};
const stc5 = {
  props: {
    "label": "FBC",
    "iconName": "utility:connected_apps",
    "iconSize": "large"
  },
  key: 5
};
const stc6 = {
  "label": "Home",
  "title": "home"
};
const stc7 = {
  props: {
    "label": "Club"
  },
  key: 7
};
const stc8 = {
  "label": "About",
  "title": "about",
  "href": "/about"
};
const stc9 = {
  "label": "Club News",
  "title": "announcements"
};
const stc10 = {
  "label": "Events",
  "title": "events"
};
const stc11 = {
  "label": "Membership",
  "title": "membership"
};
const stc12 = {
  "label": "Newsletters",
  "title": "newsletters"
};
const stc13 = {
  "label": "FAQ's",
  "title": "faqs"
};
const stc14 = {
  "label": "Contact",
  "title": "contact"
};
const stc15 = {
  props: {
    "label": "Birding Resources"
  },
  key: 15
};
const stc16 = {
  "label": "Sightings",
  "title": "sightings"
};
const stc17 = {
  "label": "Hotspots",
  "title": "hotspots"
};
const stc18 = {
  "label": "Birding News",
  "title": "news"
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, c: api_custom_element, h: api_element} = $api;
  const {_m0, _m1, _m2, _m3, _m4, _m5, _m6, _m7, _m8, _m9, _m10} = $ctx;
  return [api_element("div", stc0, [api_element("div", stc1, [api_element("div", stc2, [api_element("span", stc3, [api_element("span", stc4, [api_custom_element("lightning-button-menu", _lightningButtonMenu, stc5, [api_custom_element("lightning-menu-item", _lightningMenuItem, {
    props: stc6,
    key: 6,
    on: {
      "click": _m0 || ($ctx._m0 = api_bind($cmp.handleClick))
    }
  }), api_custom_element("lightning-menu-subheader", _lightningMenuSubheader, stc7), api_custom_element("lightning-menu-item", _lightningMenuItem, {
    props: stc8,
    key: 8,
    on: {
      "click": _m1 || ($ctx._m1 = api_bind($cmp.handleClick))
    }
  }), api_custom_element("lightning-menu-item", _lightningMenuItem, {
    props: stc9,
    key: 9,
    on: {
      "click": _m2 || ($ctx._m2 = api_bind($cmp.handleClick))
    }
  }), api_custom_element("lightning-menu-item", _lightningMenuItem, {
    props: stc10,
    key: 10,
    on: {
      "click": _m3 || ($ctx._m3 = api_bind($cmp.handleClick))
    }
  }), api_custom_element("lightning-menu-item", _lightningMenuItem, {
    props: stc11,
    key: 11,
    on: {
      "click": _m4 || ($ctx._m4 = api_bind($cmp.handleClick))
    }
  }), api_custom_element("lightning-menu-item", _lightningMenuItem, {
    props: stc12,
    key: 12,
    on: {
      "click": _m5 || ($ctx._m5 = api_bind($cmp.handleClick))
    }
  }), api_custom_element("lightning-menu-item", _lightningMenuItem, {
    props: stc13,
    key: 13,
    on: {
      "click": _m6 || ($ctx._m6 = api_bind($cmp.handleClick))
    }
  }), api_custom_element("lightning-menu-item", _lightningMenuItem, {
    props: stc14,
    key: 14,
    on: {
      "click": _m7 || ($ctx._m7 = api_bind($cmp.handleClick))
    }
  }), api_custom_element("lightning-menu-subheader", _lightningMenuSubheader, stc15), api_custom_element("lightning-menu-item", _lightningMenuItem, {
    props: stc16,
    key: 16,
    on: {
      "click": _m8 || ($ctx._m8 = api_bind($cmp.handleClick))
    }
  }), api_custom_element("lightning-menu-item", _lightningMenuItem, {
    props: stc17,
    key: 17,
    on: {
      "click": _m9 || ($ctx._m9 = api_bind($cmp.handleClick))
    }
  }), api_custom_element("lightning-menu-item", _lightningMenuItem, {
    props: stc18,
    key: 18,
    on: {
      "click": _m10 || ($ctx._m10 = api_bind($cmp.handleClick))
    }
  })])])])])])])];
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
tmpl.stylesheetToken = "example-pageLink_pageLink";
freezeTemplate(tmpl);
