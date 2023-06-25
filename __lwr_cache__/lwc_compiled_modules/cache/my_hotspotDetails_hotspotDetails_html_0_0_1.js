import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./hotspotDetails.css";

import _implicitScopedStylesheets from "./hotspotDetails.scoped.css?scoped=true";

import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<header class="slds-media slds-media_center slds-has-flexi-truncate${0}"${2}><div class="slds-media__body${0}"${2}><h3 class="slds-card__header-title${0}"${2}>Species List</h3></div></header>`;
const $fragment2 = parseFragment`<thead${3}><tr class="slds-text-heading--label${0}"${2}><th scope="col"${3}><span class="slds-truncate${0}"${2}>Common</span></th><th scope="col"${3}><span class="slds-truncate${0}"${2}>Scientific</span></th><th scope="col"${3}><span class="slds-truncate${0}"${2}>Family</span></th></tr></thead>`;
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
  "slds-card__header-link": true,
  "slds-truncate": true
};
const stc6 = {
  key: 6
};
const stc7 = {
  classMap: {
    "slds-card__body": true,
    "slds-card__body_inner": true
  },
  key: 7
};
const stc8 = {
  classMap: {
    "slds-grid": true,
    "slds-wrap": true
  },
  key: 8
};
const stc9 = {
  classMap: {
    "slds-small-size_1-of-1": true,
    "slds-large-size_1-of-2": true,
    "slds-col": true
  },
  key: 9
};
const stc10 = {
  classMap: {
    "slds-card": true
  },
  key: 10
};
const stc11 = {
  classMap: {
    "slds-card__body": true
  },
  key: 13
};
const stc12 = {
  classMap: {
    "slds-scrollable--y": true,
    "slds-is-relative": true,
    "body": true
  },
  key: 14
};
const stc13 = {
  classMap: {
    "fixed_header": true,
    "slds-table": true,
    "slds-table_cell-buffer": true,
    "slds-table_bordered": true,
    "slds-table_col-bordered": true
  },
  key: 15
};
const stc14 = {
  key: 18
};
const stc15 = {
  "slds-hint-parent": true
};
const stc16 = {
  classMap: {
    "slds-cell-wrap": true
  },
  key: 20
};
const stc17 = {
  classMap: {
    "slds-cell-wrap": true
  },
  key: 21
};
const stc18 = {
  key: 22
};
const stc19 = {
  classMap: {
    "slds-cell-wrap": true
  },
  key: 23
};
const stc20 = {
  classMap: {
    "slds-small-size_1-of-1": true,
    "slds-large-size_1-of-2": true,
    "slds-col": true
  },
  key: 24
};
const stc21 = [["border", "0", false]];
function tmpl($api, $cmp, $slotset, $ctx) {
  const {d: api_dynamic_text, t: api_text, h: api_element, st: api_static_fragment, k: api_key, i: api_iterator} = $api;
  return [$cmp.showHotspot ? api_element("article", stc0, [api_element("div", stc1, [api_element("header", stc2, [api_element("div", stc3, [api_element("h2", stc4, [api_element("a", {
    classMap: stc5,
    attrs: {
      "href": $cmp.ebirdLink,
      "title": $cmp.hotspot.name,
      "target": "_blank"
    },
    key: 5
  }, [api_element("span", stc6, [api_text(api_dynamic_text($cmp.hotspot.hierarchicalName))])])])])])]), api_element("div", stc7, [api_element("div", stc8, [api_element("div", stc9, [$cmp.showSpeciesList ? api_element("div", stc10, [api_static_fragment($fragment1(), 12), api_element("div", stc11, [api_element("div", stc12, [api_element("table", stc13, [api_static_fragment($fragment2(), 17), api_element("tbody", stc14, api_iterator($cmp.sightings, function (sighting) {
    return api_element("tr", {
      classMap: stc15,
      key: api_key(19, sighting.comName)
    }, [api_element("td", stc16, [api_text(api_dynamic_text(sighting.comName))]), api_element("td", stc17, [api_element("i", stc18, [api_text(api_dynamic_text(sighting.sciName))])]), api_element("td", stc19, [api_text(api_dynamic_text(sighting.familyComName))])]);
  }))])])])]) : null]), api_element("div", stc20, [api_element("iframe", {
    styleDecls: stc21,
    attrs: {
      "width": "100%",
      "height": "400px",
      "frameborder": "0",
      "src": $cmp.mapUrl,
      "allowfullscreen": ""
    },
    key: 25
  })])])])]) : null];
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
tmpl.stylesheetToken = "my-hotspotDetails_hotspotDetails";
freezeTemplate(tmpl);
