import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./resources.css";

import _implicitScopedStylesheets from "./resources.scoped.css?scoped=true";

import _lightningFormattedDateTime from "lightning/formattedDateTime";
import _mySightings from "my/sightings";
import _mySightingsDetails from "my/sightingsDetails";
import _lightningRadioGroup from "lightning/radioGroup";
import _lightningCombobox from "lightning/combobox";
import {parseFragment, registerTemplate, sanitizeAttribute} from "lwc";
const $fragment1 = parseFragment`<span${3}>Sightings</span>`;
const $fragment2 = parseFragment`<span class="slds-assistive-text${0}"${2}>Switch list view</span>`;
const $fragment3 = parseFragment`<span class="slds-truncate${0}" title="Menu Item One"${2}>Nearby</span>`;
const $fragment4 = parseFragment`<span class="slds-truncate${0}" title="Menu Item Two"${2}>Local</span>`;
const $fragment5 = parseFragment`<span class="slds-truncate${0}" title="Menu Item Three"${2}>State</span>`;
const $fragment6 = parseFragment`<span class="slds-truncate${0}" title="Menu Item Three"${2}>County</span>`;
const $fragment7 = parseFragment`<div class="slds-page-header__col-actions${0}"${2}><div class="slds-page-header__controls${0}"${2}><div class="slds-page-header__control${0}"${2}></div></div></div>`;
const $fragment8 = parseFragment`<span class="slds-assistive-text${0}"${2}>Refresh List</span>`;
const $fragment9 = parseFragment`<span class="slds-assistive-text${0}"${2}>Filters</span>`;
const $fragment10 = parseFragment`<span class="slds-assistive-text${0}"${2}>Close</span>`;
const $fragment11 = parseFragment`<div class="slds-backdrop slds-backdrop_open${0}"${2}></div>`;
const stc0 = {
  classMap: {
    "slds-grid": true,
    "slds-wrap": true,
    "slds-gutters": true
  },
  key: 0
};
const stc1 = {
  classMap: {
    "slds-size_1-of-1": true,
    "slds-p-left_x-small": true
  },
  key: 1
};
const stc2 = {
  classMap: {
    "slds-page-header": true
  },
  key: 2
};
const stc3 = {
  classMap: {
    "slds-page-header__row": true
  },
  key: 3
};
const stc4 = {
  classMap: {
    "slds-page-header__col-title": true
  },
  key: 4
};
const stc5 = {
  classMap: {
    "slds-media": true
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
    "slds-icon": true,
    "slds-page-header__icon": true
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
    "slds-page-header__name": true
  },
  key: 11
};
const stc11 = {
  classMap: {
    "slds-page-header__name-title": true
  },
  key: 12
};
const stc12 = {
  key: 13
};
const stc13 = {
  "slds-page-header__title": true,
  "slds-truncate": true
};
const stc14 = {
  classMap: {
    "slds-page-header__name-switcher": true
  },
  key: 17
};
const stc15 = {
  classMap: {
    "list-select": true,
    "slds-dropdown-trigger": true,
    "slds-dropdown-trigger_click": true
  },
  key: 18
};
const stc16 = {
  "slds-button": true,
  "slds-button_icon": true,
  "slds-button_icon-small": true
};
const stc17 = {
  "aria-haspopup": "true",
  "title": "Switch list view"
};
const stc18 = {
  classMap: {
    "slds-button__icon": true,
    "slds-icon_x-small": true
  },
  attrs: {
    "aria-hidden": "true"
  },
  key: 20,
  svg: true
};
const stc19 = {
  classMap: {
    "slds-dropdown": true,
    "slds-dropdown_left": true
  },
  key: 24
};
const stc20 = {
  classMap: {
    "slds-dropdown__list": true
  },
  attrs: {
    "role": "menu",
    "aria-label": "Show More"
  },
  key: 25
};
const stc21 = {
  "slds-dropdown__item": true
};
const stc22 = {
  "role": "presentation",
  "data-id": "nearby"
};
const stc23 = {
  "role": "presentation",
  "data-id": "local"
};
const stc24 = {
  "role": "presentation",
  "data-id": "state"
};
const stc25 = {
  "role": "presentation",
  "data-id": "county"
};
const stc26 = {
  classMap: {
    "slds-page-header__row": true
  },
  key: 44
};
const stc27 = {
  classMap: {
    "slds-page-header__col-meta": true
  },
  key: 45
};
const stc28 = {
  classMap: {
    "slds-page-header__meta-text": true
  },
  key: 46
};
const stc29 = {
  classMap: {
    "slds-page-header__col-controls": true
  },
  key: 48
};
const stc30 = {
  classMap: {
    "slds-page-header__controls": true
  },
  key: 49
};
const stc31 = {
  classMap: {
    "slds-page-header__control": true
  },
  key: 50
};
const stc32 = {
  "slds-button": true,
  "slds-button_icon": true,
  "slds-button_icon-border-filled": true
};
const stc33 = {
  "title": "Refresh List"
};
const stc34 = {
  classMap: {
    "slds-button__icon": true
  },
  attrs: {
    "aria-hidden": "true"
  },
  key: 52,
  svg: true
};
const stc35 = {
  classMap: {
    "slds-page-header__control": true
  },
  key: 56
};
const stc36 = {
  classMap: {
    "slds-button-group-list": true
  },
  key: 57
};
const stc37 = {
  key: 58
};
const stc38 = {
  "title": "Filters"
};
const stc39 = {
  classMap: {
    "slds-button__icon": true
  },
  attrs: {
    "aria-hidden": "true"
  },
  key: 60,
  svg: true
};
const stc40 = {
  classMap: {
    "slds-col": true,
    "slds-size_1-of-1": true,
    "slds-large-size_1-of-3": true,
    "slds-var-p-top_small": true
  },
  key: 64
};
const stc41 = {
  key: 65
};
const stc42 = {
  classMap: {
    "slds-col": true,
    "slds-large-size_2-of-3": true,
    "slds-size_1-of-1": true,
    "slds-var-p-top_small": true
  },
  key: 67
};
const stc43 = {
  "slds-modal": true,
  "slds-fade-in-open": true
};
const stc44 = {
  classMap: {
    "slds-modal__container": true
  },
  key: 70
};
const stc45 = {
  classMap: {
    "slds-modal__header": true
  },
  key: 71
};
const stc46 = {
  classMap: {
    "slds-button": true,
    "slds-button_icon": true,
    "slds-modal__close": true,
    "slds-button_icon-inverse": true
  },
  attrs: {
    "title": "Close"
  },
  key: 72
};
const stc47 = {
  classMap: {
    "slds-button__icon": true,
    "slds-button__icon_large": true
  },
  attrs: {
    "aria-hidden": "true"
  },
  key: 73,
  svg: true
};
const stc48 = {
  "slds-modal__title": true,
  "slds-hyphenate": true
};
const stc49 = {
  "slds-modal__content": true,
  "slds-p-around_medium": true
};
const stc50 = {
  classMap: {
    "slds-grid": true,
    "slds-gutters_x-small": true
  },
  key: 79
};
const stc51 = {
  classMap: {
    "slds-size_1-of-3": true,
    "slds-col": true
  },
  key: 80
};
const stc52 = {
  "category": true
};
const stc53 = {
  classMap: {
    "slds-size_1-of-3": true,
    "slds-col": true
  },
  key: 82
};
const stc54 = {
  "state": true
};
const stc55 = {
  classMap: {
    "slds-size_1-of-3": true,
    "slds-col": true
  },
  key: 84
};
const stc56 = {
  "county": true
};
const stc57 = {
  classMap: {
    "slds-modal__footer": true
  },
  key: 86
};
const stc58 = {
  "slds-button": true,
  "slds-button_neutral": true
};
const stc59 = {
  "slds-button": true,
  "slds-button_brand": true
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {h: api_element, st: api_static_fragment, d: api_dynamic_text, t: api_text, b: api_bind, fid: api_scoped_frag_id, c: api_custom_element, gid: api_scoped_id} = $api;
  const {_m0, _m1, _m2, _m3, _m4, _m5, _m6, _m7, _m8, _m9, _m10} = $ctx;
  return [api_element("div", stc0, [api_element("div", stc1, [api_element("div", stc2, [api_element("div", stc3, [api_element("div", stc4, [api_element("div", stc5, [api_element("div", stc6, [api_element("span", stc7, [api_element("svg", stc8, [api_element("use", {
    attrs: {
      "xlink:href": sanitizeAttribute("use", "http://www.w3.org/2000/svg", "xlink:href", "/icons/standard-sprite/svg/symbols.svg#forecasts")
    },
    key: 9,
    svg: true
  })])])]), api_element("div", stc9, [api_element("div", stc10, [api_element("div", stc11, [api_element("h1", stc12, [api_static_fragment($fragment1(), 15), api_element("span", {
    classMap: stc13,
    attrs: {
      "title": $cmp.dropdown
    },
    key: 16
  }, [api_text(api_dynamic_text($cmp.dropdown))])])]), api_element("div", stc14, [api_element("div", stc15, [api_element("button", {
    classMap: stc16,
    attrs: stc17,
    key: 19,
    on: {
      "click": _m0 || ($ctx._m0 = api_bind($cmp.handleListClick))
    }
  }, [api_element("svg", stc18, [api_element("use", {
    attrs: {
      "xlink:href": sanitizeAttribute("use", "http://www.w3.org/2000/svg", "xlink:href", "/icons/utility-sprite/svg/symbols.svg#down")
    },
    key: 21,
    svg: true
  })]), api_static_fragment($fragment2(), 23)]), api_element("div", stc19, [api_element("ul", stc20, [api_element("li", {
    classMap: stc21,
    attrs: stc22,
    key: 26,
    on: {
      "click": _m1 || ($ctx._m1 = api_bind($cmp.handleSightingsChange))
    }
  }, [api_element("a", {
    attrs: {
      "href": api_scoped_frag_id("#"),
      "role": "menuitem",
      "tabindex": "0"
    },
    key: 27
  }, [api_static_fragment($fragment3(), 29)])]), api_element("li", {
    classMap: stc21,
    attrs: stc23,
    key: 30,
    on: {
      "click": _m2 || ($ctx._m2 = api_bind($cmp.handleSightingsChange))
    }
  }, [api_element("a", {
    attrs: {
      "href": api_scoped_frag_id("#"),
      "role": "menuitem",
      "tabindex": "-1"
    },
    key: 31
  }, [api_static_fragment($fragment4(), 33)])]), api_element("li", {
    classMap: stc21,
    attrs: stc24,
    key: 34,
    on: {
      "click": _m3 || ($ctx._m3 = api_bind($cmp.handleSightingsChange))
    }
  }, [api_element("a", {
    attrs: {
      "href": api_scoped_frag_id("#"),
      "role": "menuitem",
      "tabindex": "-1"
    },
    key: 35
  }, [api_static_fragment($fragment5(), 37)])]), api_element("li", {
    classMap: stc21,
    attrs: stc25,
    key: 38,
    on: {
      "click": _m4 || ($ctx._m4 = api_bind($cmp.handleSightingsChange))
    }
  }, [api_element("a", {
    attrs: {
      "href": api_scoped_frag_id("#"),
      "role": "menuitem",
      "tabindex": "-1"
    },
    key: 39
  }, [api_static_fragment($fragment6(), 41)])])])])])])])])])]), api_static_fragment($fragment7(), 43)]), api_element("div", stc26, [api_element("div", stc27, [api_element("p", stc28, [api_text(api_dynamic_text($cmp.numSightings) + " items • Updated"), api_custom_element("lightning-formatted-date-time", _lightningFormattedDateTime, {
    props: {
      "value": $cmp.lastUpdatedDate,
      "year": "numeric",
      "month": "long",
      "day": "2-digit",
      "hour": "2-digit",
      "minute": "2-digit",
      "hour12": "true"
    },
    key: 47
  })])]), api_element("div", stc29, [api_element("div", stc30, [api_element("div", stc31, [api_element("button", {
    classMap: stc32,
    attrs: stc33,
    key: 51,
    on: {
      "click": _m5 || ($ctx._m5 = api_bind($cmp.loadSightings))
    }
  }, [api_element("svg", stc34, [api_element("use", {
    attrs: {
      "xlink:href": sanitizeAttribute("use", "http://www.w3.org/2000/svg", "xlink:href", "/icons/utility-sprite/svg/symbols.svg#refresh")
    },
    key: 53,
    svg: true
  })]), api_static_fragment($fragment8(), 55)])]), api_element("div", stc35, [api_element("ul", stc36, [api_element("li", stc37, [api_element("button", {
    classMap: stc32,
    attrs: stc38,
    key: 59,
    on: {
      "click": _m6 || ($ctx._m6 = api_bind($cmp.handleFilterClick))
    }
  }, [api_element("svg", stc39, [api_element("use", {
    attrs: {
      "xlink:href": sanitizeAttribute("use", "http://www.w3.org/2000/svg", "xlink:href", "/icons/utility-sprite/svg/symbols.svg#filterList")
    },
    key: 61,
    svg: true
  })]), api_static_fragment($fragment9(), 63)])])])])])])])])]), api_element("div", stc40, [api_element("div", stc41, [api_custom_element("my-sightings", _mySightings, {
    props: {
      "sightings": $cmp.sightings,
      "header": $cmp.sightingsHeader,
      "viewtype": $cmp.setting.view,
      "filter": $cmp.setting.filter
    },
    key: 66,
    on: {
      "sightingselected": _m7 || ($ctx._m7 = api_bind($cmp.handleSightingsSelected))
    }
  })])]), api_element("div", stc42, [api_custom_element("my-sightings-details", _mySightingsDetails, {
    props: {
      "sightings": $cmp.selectedSightings,
      "viewtype": $cmp.view
    },
    key: 68
  })])]), $cmp.showFilterModal ? api_element("section", {
    classMap: stc43,
    attrs: {
      "role": "dialog",
      "tabindex": "-1",
      "aria-labelledby": api_scoped_id("modal-heading-01"),
      "aria-modal": "true",
      "aria-describedby": api_scoped_id("modal-content-id-1")
    },
    key: 69
  }, [api_element("div", stc44, [api_element("header", stc45, [api_element("button", stc46, [api_element("svg", stc47, [api_element("use", {
    attrs: {
      "xlink:href": sanitizeAttribute("use", "http://www.w3.org/2000/svg", "xlink:href", "icons/utility-sprite/svg/symbols.svg#close")
    },
    key: 74,
    svg: true
  })]), api_static_fragment($fragment10(), 76)]), api_element("h1", {
    classMap: stc48,
    attrs: {
      "id": api_scoped_id("modal-heading-01")
    },
    key: 77
  }, [api_text("Filter Sightings")])]), api_element("div", {
    classMap: stc49,
    attrs: {
      "id": api_scoped_id("modal-content-id-1")
    },
    key: 78
  }, [api_element("div", stc50, [api_element("div", stc51, [api_custom_element("lightning-radio-group", _lightningRadioGroup, {
    classMap: stc52,
    props: {
      "label": "Category",
      "options": $cmp.filterOptions,
      "value": $cmp.setting.filter,
      "type": "radio"
    },
    key: 81
  })]), api_element("div", stc53, [api_custom_element("lightning-combobox", _lightningCombobox, {
    classMap: stc54,
    props: {
      "options": $cmp.stateOptions,
      "value": $cmp.setting.state,
      "label": "State",
      "disabled": $cmp.stateSelectDisabled
    },
    key: 83,
    on: {
      "change": _m8 || ($ctx._m8 = api_bind($cmp.handleStateChange))
    }
  })]), api_element("div", stc55, [api_custom_element("lightning-combobox", _lightningCombobox, {
    classMap: stc56,
    props: {
      "options": $cmp.filteredCounties,
      "value": $cmp.setting.county,
      "label": "County/City",
      "disabled": $cmp.countySelectDisabled
    },
    key: 85
  })])])]), api_element("footer", stc57, [api_element("button", {
    classMap: stc58,
    key: 87,
    on: {
      "click": _m9 || ($ctx._m9 = api_bind($cmp.handleFilterModalCancelClick))
    }
  }, [api_text("Cancel")]), api_element("button", {
    classMap: stc59,
    key: 88,
    on: {
      "click": _m10 || ($ctx._m10 = api_bind($cmp.handleApplyClick))
    }
  }, [api_text("Apply")])])])]) : null, $cmp.showFilterModal ? api_static_fragment($fragment11(), 90) : null];
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
tmpl.stylesheetToken = "my-resources_resources";
freezeTemplate(tmpl);
