import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./sightingsDetails.css";

import _implicitScopedStylesheets from "./sightingsDetails.scoped.css?scoped=true";

import _lightningHelptext from "lightning/helptext";
import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<th scope="col"${3}><span class="slds-truncate${0}"${2}>Date/Time</span></th>`;
const $fragment2 = parseFragment`<th scope="col" style="width: 20rem"${3}><span class="slds-truncate${0}"${2}>Site Name</span></th>`;
const $fragment3 = parseFragment`<th scope="col"${3}><span class="slds-truncate${0}"${2}>Location</span></th>`;
const $fragment4 = parseFragment`<th scope="col"${3}><span class="slds-truncate${0}"${2}>Sighted By</span></th>`;
const $fragment5 = parseFragment`<th scope="col"${3}><span class="slds-truncate${0}"${2}>Quanitity</span></th>`;
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
    "slds-media__body": true
  },
  key: 3
};
const stc4 = {
  classMap: {
    "slds-card__header-title": true
  },
  key: 4
};
const stc5 = {
  classMap: {
    "slds-card__header-link": true,
    "slds-truncate": true
  },
  attrs: {
    "href": "#",
    "title": "Accounts"
  },
  key: 5
};
const stc6 = {
  key: 6
};
const stc7 = {
  classMap: {
    "slds-var-p-left_small": true
  },
  props: {
    "content": "Click on a sighting to see a map for the siting."
  },
  key: 7
};
const stc8 = {
  classMap: {
    "slds-card__body": true,
    "slds-card__body_inner": true
  },
  key: 8
};
const stc9 = {
  classMap: {
    "slds-scrollable--y": true
  },
  styleDecls: [["max-height", "450px", false]],
  key: 9
};
const stc10 = {
  classMap: {
    "slds-table": true,
    "slds-table_cell-buffer": true,
    "slds-table_bordered": true,
    "slds-table_col-bordered": true
  },
  key: 10
};
const stc11 = {
  key: 11
};
const stc12 = {
  classMap: {
    "slds-text-heading--label": true
  },
  key: 12
};
const stc13 = {
  key: 23
};
const stc14 = {
  "slds-hint-parent": true
};
const stc15 = {
  classMap: {
    "slds-cell-wrap": true
  },
  key: 25
};
const stc16 = {
  classMap: {
    "slds-cell-wrap": true
  },
  key: 26
};
const stc17 = {
  classMap: {
    "slds-cell-wrap": true
  },
  key: 27
};
const stc18 = {
  classMap: {
    "slds-cell-wrap": true
  },
  key: 28
};
const stc19 = {
  classMap: {
    "slds-cell-wrap": true
  },
  key: 29
};
const stc20 = {
  classMap: {
    "slds-card__footer": true
  },
  key: 30
};
const stc21 = [["border", "0", false]];
function tmpl($api, $cmp, $slotset, $ctx) {
  const {d: api_dynamic_text, t: api_text, h: api_element, c: api_custom_element, st: api_static_fragment, k: api_key, b: api_bind, i: api_iterator} = $api;
  const {_m0} = $ctx;
  return [$cmp.showSightings ? api_element("article", stc0, [api_element("div", stc1, [api_element("header", stc2, [api_element("div", stc3, [api_element("h2", stc4, [api_element("a", stc5, [api_element("span", stc6, [api_text(api_dynamic_text($cmp.header))])]), api_custom_element("lightning-helptext", _lightningHelptext, stc7)])])])]), api_element("div", stc8, [api_element("div", stc9, [api_element("table", stc10, [api_element("thead", stc11, [api_element("tr", stc12, [api_static_fragment($fragment1(), 14), api_static_fragment($fragment2(), 16), $cmp.showLocations ? api_static_fragment($fragment3(), 18) : null, $cmp.showLocations ? api_static_fragment($fragment4(), 20) : null, api_static_fragment($fragment5(), 22)])]), api_element("tbody", stc13, api_iterator($cmp.sightingList, function (sighting) {
    return api_element("tr", {
      classMap: stc14,
      attrs: {
        "data-id": sighting.id
      },
      key: api_key(24, sighting.id),
      on: {
        "click": _m0 || ($ctx._m0 = api_bind($cmp.handleSightingClick))
      }
    }, [api_element("td", stc15, [api_text(api_dynamic_text(sighting.date))]), api_element("td", stc16, [api_text(api_dynamic_text(sighting.location))]), $cmp.showLocations ? api_element("td", stc17, [api_text(api_dynamic_text(sighting.locality))]) : null, $cmp.showLocations ? api_element("td", stc18, [api_text(api_dynamic_text(sighting.by))]) : null, api_element("td", stc19, [api_text(api_dynamic_text(sighting.quantity))])]);
  }))])])]), api_element("footer", stc20, [$cmp.showMap ? api_element("iframe", {
    styleDecls: stc21,
    attrs: {
      "width": "100%",
      "height": "100%",
      "frameborder": "0",
      "src": $cmp.mapUrl,
      "allowfullscreen": ""
    },
    key: 31
  }) : null])]) : null];
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
tmpl.stylesheetToken = "my-sightingsDetails_sightingsDetails";
freezeTemplate(tmpl);
