import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./nearbySightings.css";

import _implicitScopedStylesheets from "./nearbySightings.scoped.css?scoped=true";

import _lightningFormattedDateTime from "lightning/formattedDateTime";
import {parseFragment, registerTemplate, sanitizeAttribute} from "lwc";
const $fragment1 = parseFragment`<div class="slds-media__body${0}"${2}><h2 class="slds-p-left_small slds-card__header-title${0}"${2}>Notable Regional Sightings</h2></div>`;
const $fragment2 = parseFragment`<thead${3}><tr class="slds-text-heading--label${0}"${2}><th scope="col"${3}><span class="slds-truncate${0}"${2}>Date</span></th><th scope="col"${3}><span class="slds-truncate${0}"${2}>Species</span></th><th scope="col"${3}><span class="slds-truncate${0}"${2}>County/City</span></th><th scope="col"${3}><span class="slds-truncate${0}"${2}>Location</span></th></tr></thead>`;
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
    "slds-icon-standard-forecasts": true
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
    "slds-card__body": true
  },
  key: 9
};
const stc7 = {
  classMap: {
    "fixed_header": true,
    "slds-table": true,
    "slds-table_cell-buffer": true,
    "slds-table_bordered": true,
    "slds-table_col-bordered": true
  },
  key: 10
};
const stc8 = {
  key: 13
};
const stc9 = {
  "slds-hint-parent": true
};
const stc10 = {
  classMap: {
    "slds-cell-wrap": true
  },
  key: 15
};
const stc11 = {
  classMap: {
    "slds-cell-wrap": true
  },
  key: 17
};
const stc12 = {
  classMap: {
    "slds-cell-wrap": true
  },
  key: 18
};
const stc13 = {
  classMap: {
    "slds-cell-wrap": true
  },
  key: 19
};
const stc14 = {
  classMap: {
    "slds-card__footer": true
  },
  key: 20
};
const stc15 = {
  "slds-card__footer-action": true
};
const stc16 = {
  "href": "#"
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {h: api_element, st: api_static_fragment, k: api_key, c: api_custom_element, d: api_dynamic_text, t: api_text, i: api_iterator, b: api_bind} = $api;
  const {_m0} = $ctx;
  return [api_element("div", stc0, [api_element("div", stc1, [api_element("div", stc2, [api_element("div", stc3, [api_element("span", stc4, [api_element("svg", stc5, [api_element("use", {
    attrs: {
      "xlink:href": sanitizeAttribute("use", "http://www.w3.org/2000/svg", "xlink:href", "/icons/standard-sprite/svg/symbols.svg#forecasts")
    },
    key: 6,
    svg: true
  })])]), api_static_fragment($fragment1(), 8)])]), api_element("div", stc6, [api_element("table", stc7, [api_static_fragment($fragment2(), 12), api_element("tbody", stc8, api_iterator($cmp.localSightings, function (sighting) {
    return api_element("tr", {
      classMap: stc9,
      key: api_key(14, sighting.obsId)
    }, [api_element("td", stc10, [api_custom_element("lightning-formatted-date-time", _lightningFormattedDateTime, {
      props: {
        "value": sighting.obsDt,
        "day": "2-digit",
        "month": "long"
      },
      key: 16
    })]), api_element("td", stc11, [api_text(api_dynamic_text(sighting.comName))]), api_element("td", stc12, [api_text(api_dynamic_text(sighting.subnational2Name))]), api_element("td", stc13, [api_text(api_dynamic_text(sighting.locName))])]);
  }))])]), api_element("footer", stc14, [api_element("a", {
    classMap: stc15,
    attrs: stc16,
    key: 21,
    on: {
      "click": _m0 || ($ctx._m0 = api_bind($cmp.handleViewAllSightingsClick))
    }
  }, [api_text("View All Sightings")])])])])];
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
tmpl.stylesheetToken = "my-nearbySightings_nearbySightings";
freezeTemplate(tmpl);
