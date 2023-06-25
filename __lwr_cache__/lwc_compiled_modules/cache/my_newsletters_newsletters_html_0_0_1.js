import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./newsletters.css";

import _implicitScopedStylesheets from "./newsletters.scoped.css?scoped=true";

import _lightningFormattedDateTime from "lightning/formattedDateTime";
import {parseFragment, registerTemplate, sanitizeAttribute} from "lwc";
const $fragment1 = parseFragment`<span class="slds-assistive-text${0}"${2}>Newsletters</span>`;
const $fragment2 = parseFragment`<div class="slds-media__body${0}"${2}><h1 class="slds-text-heading_small slds-text-color_default slds-p-right_x-small${0}"${2}><button class="slds-button slds-button_reset slds-type-focus slds-truncate${0}" aria-haspopup="true" title=""${2}><span class="slds-grid slds-has-flexi-truncate slds-grid_vertical-align-center${0}"${2}><span class="slds-truncate${0}" title="Newsletters"${2}>Newsletters</span></span></button></h1></div>`;
const $fragment3 = parseFragment`<span class="slds-assistive-text${0}"${2}>Refresh List</span>`;
const $fragment4 = parseFragment`<span class="slds-assistive-text${0}"${2}>Sorted by:</span>`;
const $fragment5 = parseFragment`<span class="slds-assistive-text${0}"${2}>- Descending</span>`;
const stc0 = {
  classMap: {
    "slds-size_1-of-1": true
  },
  key: 0
};
const stc1 = {
  styleDecls: [["display", "flex", false], ["width", "100%", false], ["height", "42rem", false]],
  key: 1
};
const stc2 = {
  classMap: {
    "slds-split-view_container": true,
    "slds-is-open": true
  },
  key: 2
};
const stc3 = {
  "slds-split-view": true,
  "slds-grid": true,
  "slds-grid_vertical": true,
  "slds-grow": true
};
const stc4 = {
  classMap: {
    "slds-split-view__header": true
  },
  key: 4
};
const stc5 = {
  classMap: {
    "slds-grid": true,
    "slds-grid_vertical-align-center": true,
    "slds-m-bottom_xx-small": true
  },
  key: 5
};
const stc6 = {
  classMap: {
    "slds-has-flexi-truncate": true
  },
  key: 6
};
const stc7 = {
  classMap: {
    "slds-media": true,
    "slds-media_center": true
  },
  key: 7
};
const stc8 = {
  classMap: {
    "slds-media__figure": true
  },
  key: 8
};
const stc9 = {
  classMap: {
    "slds-icon_container": true,
    "slds-icon-standard-document": true
  },
  key: 9
};
const stc10 = {
  classMap: {
    "slds-icon": true
  },
  attrs: {
    "aria-hidden": "true"
  },
  key: 10,
  svg: true
};
const stc11 = {
  classMap: {
    "slds-grid": true,
    "slds-grid_vertical-align-center": true
  },
  key: 16
};
const stc12 = {
  classMap: {
    "slds-text-body_small": true,
    "slds-text-color_weak": true
  },
  key: 17
};
const stc13 = {
  classMap: {
    "slds-no-flex": true,
    "slds-grid": true,
    "slds-col_bump-left": true
  },
  key: 19
};
const stc14 = {
  classMap: {
    "slds-button-group": true
  },
  key: 20
};
const stc15 = {
  "slds-button": true,
  "slds-button_icon": true,
  "slds-button_icon": true,
  "slds-button_icon-container": true
};
const stc16 = {
  "title": "Refresh List"
};
const stc17 = {
  classMap: {
    "slds-button__icon": true
  },
  attrs: {
    "aria-hidden": "true"
  },
  key: 22,
  svg: true
};
const stc18 = {
  classMap: {
    "slds-grid": true,
    "slds-grid_vertical": true
  },
  key: 26
};
const stc19 = {
  classMap: {
    "slds-split-view__list-header": true,
    "slds-grid": true
  },
  key: 27
};
const stc20 = {
  key: 30
};
const stc21 = {
  classMap: {
    "slds-icon": true,
    "slds-icon_xx-small": true,
    "slds-icon-text-default": true,
    "slds-align-top": true
  },
  attrs: {
    "aria-hidden": "true"
  },
  key: 31,
  svg: true
};
const stc22 = {
  classMap: {
    "slds-scrollable_y": true
  },
  attrs: {
    "aria-multiselectable": "true",
    "role": "listbox",
    "aria-label": "Select an item to open it in a new workspace tab."
  },
  key: 35
};
const stc23 = {
  "slds-split-view__list-item": true
};
const stc24 = {
  "item": true,
  "slds-split-view__list-item-action": true,
  "slds-grow": true,
  "slds-has-flexi-truncate": true
};
const stc25 = {
  classMap: {
    "slds-grid": true,
    "slds-wrap": true
  },
  key: 38
};
const stc26 = {
  "slds-truncate": true,
  "slds-text-body_regular": true,
  "slds-text-color_default": true
};
const stc27 = {
  classMap: {
    "slds-grid": true,
    "slds-wrap": true
  },
  key: 40
};
const stc28 = {
  "slds-truncate": true
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {gid: api_scoped_id, h: api_element, st: api_static_fragment, d: api_dynamic_text, t: api_text, c: api_custom_element, b: api_bind, k: api_key, i: api_iterator} = $api;
  const {_m0, _m1} = $ctx;
  return [$cmp.newsletters ? api_element("div", stc0, [api_element("div", stc1, [api_element("div", stc2, [api_element("article", {
    classMap: stc3,
    attrs: {
      "aria-hidden": "false",
      "id": api_scoped_id("split-view-id")
    },
    key: 3
  }, [api_element("header", stc4, [api_element("div", stc5, [api_element("div", stc6, [api_element("div", stc7, [api_element("div", stc8, [api_element("div", stc9, [api_element("svg", stc10, [api_element("use", {
    attrs: {
      "xlink:href": sanitizeAttribute("use", "http://www.w3.org/2000/svg", "xlink:href", "/icons/standard-sprite/svg/symbols.svg#document")
    },
    key: 11,
    svg: true
  })]), api_static_fragment($fragment1(), 13)])]), api_static_fragment($fragment2(), 15)])])]), api_element("div", stc11, [api_element("p", stc12, [api_text(api_dynamic_text($cmp.numNewsletters) + " items • Updated "), api_custom_element("lightning-formatted-date-time", _lightningFormattedDateTime, {
    props: {
      "value": $cmp.retrieved,
      "year": "numeric",
      "month": "numeric",
      "day": "numeric",
      "hour": "2-digit",
      "minute": "2-digit",
      "hour12": "true"
    },
    key: 18
  })]), api_element("div", stc13, [api_element("div", stc14, [api_element("button", {
    classMap: stc15,
    attrs: stc16,
    key: 21,
    on: {
      "click": _m0 || ($ctx._m0 = api_bind($cmp.retrieveNewsletters))
    }
  }, [api_element("svg", stc17, [api_element("use", {
    attrs: {
      "xlink:href": sanitizeAttribute("use", "http://www.w3.org/2000/svg", "xlink:href", "/icons/utility-sprite/svg/symbols.svg#refresh")
    },
    key: 23,
    svg: true
  })]), api_static_fragment($fragment3(), 25)])])])])]), api_element("div", stc18, [api_element("div", stc19, [api_static_fragment($fragment4(), 29), api_element("span", stc20, [api_text("Date"), api_element("svg", stc21, [api_element("use", {
    attrs: {
      "xlink:href": sanitizeAttribute("use", "http://www.w3.org/2000/svg", "xlink:href", "/icons/utility-sprite/svg/symbols.svg#arrowdown")
    },
    key: 32,
    svg: true
  })])]), api_static_fragment($fragment5(), 34)]), api_element("ul", stc22, api_iterator($cmp.newsletters, function (newsletter) {
    return api_element("li", {
      classMap: stc23,
      attrs: {
        "role": "presentation",
        "data-item": newsletter._id
      },
      key: api_key(36, newsletter._id),
      on: {
        "click": _m1 || ($ctx._m1 = api_bind($cmp.handleNewsletterClick))
      }
    }, [api_element("a", {
      classMap: stc24,
      attrs: {
        "href": "javascript:void(0);",
        "aria-selected": "false",
        "role": "option",
        "data-item": newsletter._id,
        "tabindex": "0"
      },
      key: 37
    }, [api_element("div", stc25, [api_element("span", {
      classMap: stc26,
      attrs: {
        "title": newsletter.title
      },
      key: 39
    }, [api_text(api_dynamic_text(newsletter.title))])]), api_element("div", stc27, [api_element("span", {
      classMap: stc28,
      attrs: {
        "title": newsletter.year
      },
      key: 41
    }, [api_text("Volume " + api_dynamic_text(newsletter.year) + ", Issue " + api_dynamic_text(newsletter.issue))])])])]);
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
tmpl.stylesheetToken = "my-newsletters_newsletters";
freezeTemplate(tmpl);
