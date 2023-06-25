import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./hotspots.css";

import _implicitScopedStylesheets from "./hotspots.scoped.css?scoped=true";

import _lightningHelptext from "lightning/helptext";
import {parseFragment, registerTemplate, sanitizeAttribute} from "lwc";
const $fragment1 = parseFragment`<span class="slds-assistive-text${0}"${2}>Description of icon when needed</span>`;
const $fragment2 = parseFragment`<thead${3}><tr class="slds-text-heading--label${0}"${2}><th scope="col"${3}><span class="slds-truncate${0}"${2}>Location</span></th><th scope="col"${3}><span class="slds-truncate${0}"${2}>Last Visited</span></th><th scope="col"${3}><span class="slds-truncate slds-text-align_center${0}"${2}>Species</span></th></tr></thead>`;
const stc0 = {
  key: 0
};
const stc1 = {
  classMap: {
    "slds-card": true
  },
  key: 1
};
const stc2 = {
  classMap: {
    "slds-card__header": true
  },
  key: 2
};
const stc3 = {
  classMap: {
    "slds-media": true,
    "slds-media--center": true,
    "slds-has-flexi-truncate": true
  },
  key: 3
};
const stc4 = {
  classMap: {
    "slds-icon_container": true,
    "slds-icon_container": true,
    "slds-icon-standard-event": true
  },
  attrs: {
    "title": "Description of icon when needed"
  },
  key: 4
};
const stc5 = {
  classMap: {
    "slds-icon": true
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
  key: 9
};
const stc7 = {
  classMap: {
    "slds-p-left_small": true,
    "slds-text-heading--small": true,
    "slds-truncate": true
  },
  key: 10
};
const stc8 = {
  classMap: {
    "slds-var-p-left_small": true
  },
  props: {
    "content": "Select a county from the dropdown to view a list of hotspots. Click on a hotspot to see a list of birds recorded for that selected sight and a location map."
  },
  key: 13
};
const stc9 = {
  classMap: {
    "slds-card__body": true
  },
  key: 14
};
const stc10 = {
  classMap: {
    "slds-scrollable--y": true,
    "slds-is-relative": true,
    "body": true
  },
  key: 15
};
const stc11 = {
  classMap: {
    "fixed_header": true,
    "slds-table": true,
    "slds-table_cell-buffer": true,
    "slds-table_bordered": true,
    "slds-table_col-bordered": true
  },
  key: 16
};
const stc12 = {
  key: 19
};
const stc13 = {
  "slds-hint-parent": true
};
const stc14 = {
  classMap: {
    "slds-cell-wrap": true
  },
  key: 21
};
const stc15 = {
  classMap: {
    "slds-cell-wrap": true
  },
  key: 22
};
const stc16 = {
  classMap: {
    "slds-cell-wrap": true,
    "slds-text-align_center": true
  },
  key: 23
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {h: api_element, st: api_static_fragment, t: api_text, b: api_bind, k: api_key, d: api_dynamic_text, i: api_iterator, c: api_custom_element} = $api;
  const {_m0, _m1} = $ctx;
  return [$cmp.showHotspots ? api_element("div", stc0, [api_element("div", stc1, [api_element("div", stc2, [api_element("div", stc3, [api_element("span", stc4, [api_element("svg", stc5, [api_element("use", {
    attrs: {
      "xlink:href": sanitizeAttribute("use", "http://www.w3.org/2000/svg", "xlink:href", "/icons/custom-sprite/svg/symbols.svg#custom3")
    },
    key: 6,
    svg: true
  })]), api_static_fragment($fragment1(), 8)]), api_element("div", stc6, [api_element("h2", stc7, [api_text("Hotspots for  "), api_element("select", {
    key: 11,
    on: {
      "change": _m0 || ($ctx._m0 = api_bind($cmp.handleLocationChange))
    }
  }, api_iterator($cmp.locations, function (location) {
    return api_element("option", {
      attrs: {
        "value": location.value
      },
      key: api_key(12, location.value)
    }, [api_text(api_dynamic_text(location.label))]);
  })), api_custom_element("lightning-helptext", _lightningHelptext, stc8)])])])]), api_element("div", stc9, [api_element("div", stc10, [api_element("table", stc11, [api_static_fragment($fragment2(), 18), api_element("tbody", stc12, api_iterator($cmp.filteredHotspots, function (hotspot) {
    return api_element("tr", {
      classMap: stc13,
      attrs: {
        "data-item": hotspot.locId
      },
      key: api_key(20, hotspot.locId),
      on: {
        "click": _m1 || ($ctx._m1 = api_bind($cmp.handleHotspotClick))
      }
    }, [api_element("td", stc14, [api_text(api_dynamic_text(hotspot.locName))]), api_element("td", stc15, [api_text(api_dynamic_text(hotspot.latestObsDt))]), api_element("td", stc16, [api_text(api_dynamic_text(hotspot.numSpeciesAllTime))])]);
  }))])])])])]) : null];
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
tmpl.stylesheetToken = "my-hotspots_hotspots";
freezeTemplate(tmpl);
