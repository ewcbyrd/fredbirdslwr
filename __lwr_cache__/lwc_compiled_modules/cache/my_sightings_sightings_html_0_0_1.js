import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./sightings.css";

import _implicitScopedStylesheets from "./sightings.scoped.css?scoped=true";

import _lightningFormattedDateTime from "lightning/formattedDateTime";
import {parseFragment, registerTemplate, sanitizeAttribute} from "lwc";
const $fragment1 = parseFragment`<span class="slds-assistive-text${0}"${2}>Sorted by:</span>`;
const $fragment2 = parseFragment`<span class="slds-assistive-text${0}"${2}>- Descending</span>`;
const stc0 = {
  classMap: {
    "slds-size_1-of-1": true
  },
  key: 0
};
const stc1 = {
  "slds-split-view": true,
  "slds-grid": true,
  "slds-grid_vertical": true,
  "slds-grow": true
};
const stc2 = {
  classMap: {
    "slds-split-view__header": true
  },
  key: 2
};
const stc3 = {
  classMap: {
    "slds-grid": true,
    "slds-grid_vertical-align-center": true,
    "slds-m-bottom_xx-small": true
  },
  key: 3
};
const stc4 = {
  classMap: {
    "slds-has-flexi-truncate": true
  },
  key: 4
};
const stc5 = {
  classMap: {
    "slds-media": true,
    "slds-media_center": true
  },
  key: 5
};
const stc6 = {
  classMap: {
    "slds-media__figure": true
  },
  key: 6
};
const stc7 = {
  classMap: {
    "slds-icon_container": true,
    "slds-icon-standard-forecasts": true
  },
  key: 7
};
const stc8 = {
  classMap: {
    "slds-icon": true
  },
  attrs: {
    "aria-hidden": "true"
  },
  key: 8,
  svg: true
};
const stc9 = {
  classMap: {
    "slds-media__body": true
  },
  key: 10
};
const stc10 = {
  classMap: {
    "slds-text-heading_small": true,
    "slds-text-color_default": true,
    "slds-p-right_x-small": true
  },
  key: 11
};
const stc11 = {
  classMap: {
    "slds-button": true,
    "slds-button_reset": true,
    "slds-type-focus": true,
    "slds-truncate": true
  },
  attrs: {
    "aria-haspopup": "true",
    "title": ""
  },
  key: 12
};
const stc12 = {
  classMap: {
    "slds-grid": true,
    "slds-has-flexi-truncate": true,
    "slds-grid_vertical-align-center": true
  },
  key: 13
};
const stc13 = {
  "slds-truncate": true
};
const stc14 = {
  classMap: {
    "slds-grid": true,
    "slds-grid_vertical": true
  },
  key: 15
};
const stc15 = {
  classMap: {
    "slds-split-view__list-header": true,
    "slds-grid": true
  },
  key: 16
};
const stc16 = {
  key: 19
};
const stc17 = {
  classMap: {
    "slds-icon": true,
    "slds-icon_xx-small": true,
    "slds-icon-text-default": true,
    "slds-align-top": true
  },
  attrs: {
    "aria-hidden": "true"
  },
  key: 20,
  svg: true
};
const stc18 = {
  classMap: {
    "slds-scrollable_y": true
  },
  styleDecls: [["height", "450px", false]],
  attrs: {
    "aria-multiselectable": "true",
    "role": "listbox",
    "aria-label": "Select an item to open it in a new workspace tab."
  },
  key: 24
};
const stc19 = {
  "slds-split-view__list-item": true
};
const stc20 = {
  "item": true,
  "slds-split-view__list-item-action": true,
  "slds-grow": true,
  "slds-has-flexi-truncate": true
};
const stc21 = {
  classMap: {
    "slds-grid": true,
    "slds-wrap": true
  },
  key: 27
};
const stc22 = {
  "slds-truncate": true,
  "slds-text-body_regular": true,
  "slds-text-color_default": true
};
const stc23 = {
  classMap: {
    "slds-truncate": true,
    "slds-col_bump-left": true
  },
  attrs: {
    "title": "Most Recent Observation"
  },
  key: 29
};
const stc24 = {
  classMap: {
    "slds-grid": true,
    "slds-wrap": true
  },
  key: 31
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {gid: api_scoped_id, h: api_element, d: api_dynamic_text, t: api_text, st: api_static_fragment, k: api_key, b: api_bind, c: api_custom_element, i: api_iterator} = $api;
  const {_m0} = $ctx;
  return [$cmp.sightings ? api_element("div", stc0, [api_element("article", {
    classMap: stc1,
    attrs: {
      "aria-hidden": "false",
      "id": api_scoped_id("split-view-id")
    },
    key: 1
  }, [api_element("header", stc2, [api_element("div", stc3, [api_element("div", stc4, [api_element("div", stc5, [api_element("div", stc6, [api_element("div", stc7, [api_element("svg", stc8, [api_element("use", {
    attrs: {
      "xlink:href": sanitizeAttribute("use", "http://www.w3.org/2000/svg", "xlink:href", "/icons/standard-sprite/svg/symbols.svg#forecasts")
    },
    key: 9,
    svg: true
  })])])]), api_element("div", stc9, [api_element("h1", stc10, [api_element("button", stc11, [api_element("span", stc12, [api_element("span", {
    classMap: stc13,
    attrs: {
      "title": $cmp.header
    },
    key: 14
  }, [api_text(api_dynamic_text($cmp.header))])])])])])])])])]), api_element("div", stc14, [api_element("div", stc15, [api_static_fragment($fragment1(), 18), api_element("span", stc16, [api_text("Date"), api_element("svg", stc17, [api_element("use", {
    attrs: {
      "xlink:href": sanitizeAttribute("use", "http://www.w3.org/2000/svg", "xlink:href", "/icons/utility-sprite/svg/symbols.svg#arrowdown")
    },
    key: 21,
    svg: true
  })])]), api_static_fragment($fragment2(), 23)]), api_element("ul", stc18, api_iterator($cmp.sightingList, function (sighting) {
    return api_element("li", {
      classMap: stc19,
      attrs: {
        "role": "presentation",
        "data-id": sighting.id
      },
      key: api_key(25, sighting.id),
      on: {
        "click": _m0 || ($ctx._m0 = api_bind($cmp.handleSightingClick))
      }
    }, [api_element("a", {
      classMap: stc20,
      attrs: {
        "href": "javascript:void(0);",
        "aria-selected": "false",
        "role": "option",
        "data-id": sighting.id,
        "tabindex": "0"
      },
      key: 26
    }, [api_element("div", stc21, [api_element("span", {
      classMap: stc22,
      attrs: {
        "title": sighting.name
      },
      key: 28
    }, [api_text(api_dynamic_text(sighting.name))]), api_element("span", stc23, [api_custom_element("lightning-formatted-date-time", _lightningFormattedDateTime, {
      props: {
        "value": sighting.mostRecent
      },
      key: 30
    })])]), api_element("div", stc24, [api_element("span", {
      classMap: stc13,
      attrs: {
        "title": sighting.locations
      },
      key: 32
    }, [api_text(api_dynamic_text(sighting.locations))])])])]);
  }))])])]) : null];
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
tmpl.stylesheetToken = "my-sightings_sightings";
freezeTemplate(tmpl);
