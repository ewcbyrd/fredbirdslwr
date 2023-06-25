import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./events.css";

import _implicitScopedStylesheets from "./events.scoped.css?scoped=true";

import _lightningHelptext from "lightning/helptext";
import {parseFragment, registerTemplate, sanitizeAttribute} from "lwc";
const $fragment1 = parseFragment`<span class="slds-assistive-text${0}"${2}>Description of icon when needed</span>`;
const $fragment2 = parseFragment`<option value="2023"${3}>2023</option>`;
const $fragment3 = parseFragment`<option value="2022"${3}>2022</option>`;
const $fragment4 = parseFragment`<option value="2021"${3}>2021</option>`;
const $fragment5 = parseFragment`<option value="2020"${3}>2020</option>`;
const $fragment6 = parseFragment`<option value="2019"${3}>2019</option>`;
const $fragment7 = parseFragment`<option value="2018"${3}>2018</option>`;
const $fragment8 = parseFragment`<option value="2017"${3}>2017</option>`;
const $fragment9 = parseFragment`<option value="2016"${3}>2016</option>`;
const $fragment10 = parseFragment`<option value="2015"${3}>2015</option>`;
const $fragment11 = parseFragment`<div class="slds-spinner_container${0}"${2}><div role="status" class="slds-spinner slds-spinner_medium slds-spinner_brand${0}"${2}><span class="slds-assistive-text${0}"${2}>Loading</span><div class="slds-spinner__dot-a${0}"${2}></div><div class="slds-spinner__dot-b${0}"${2}></div></div></div>`;
const $fragment12 = parseFragment`<thead${3}><tr class="slds-text-heading--label${0}"${2}><th scope="col"${3}><span class="slds-truncate${0}"${2}>Date(s)</span></th><th scope="col"${3}><span class="slds-truncate${0}"${2}>Event</span></th></tr></thead>`;
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
    "slds-card__header-title": true
  },
  key: 10
};
const stc8 = {
  classMap: {
    "slds-var-p-left_small": true
  },
  props: {
    "content": "Select a year from the dropdown to view a list of events for that year. Click on an event to view event details and/or the trip report for the event."
  },
  key: 30
};
const stc9 = {
  classMap: {
    "slds-card__body": true
  },
  key: 31
};
const stc10 = {
  classMap: {
    "slds-scrollable--y": true,
    "slds-is-relative": true
  },
  key: 32
};
const stc11 = {
  classMap: {
    "fixed_header": true,
    "slds-table": true,
    "slds-table_cell-buffer": true,
    "slds-table_bordered": true,
    "slds-table_col-bordered": true
  },
  key: 35
};
const stc12 = {
  key: 38
};
const stc13 = {
  "slds-hint-parent": true
};
const stc14 = {
  classMap: {
    "slds-cell-wrap": true
  },
  key: 40
};
const stc15 = {
  classMap: {
    "slds-float_right": true
  },
  key: 41
};
const stc16 = {
  classMap: {
    "slds-media__figure": true
  },
  key: 42
};
const stc17 = {
  classMap: {
    "slds-icon_container": true,
    "slds-icon-custom-custom60": true
  },
  attrs: {
    "title": "Cancelled"
  },
  key: 43
};
const stc18 = {
  classMap: {
    "slds-icon": true,
    "slds-icon_x-small": true
  },
  attrs: {
    "aria-hidden": "true"
  },
  key: 44,
  svg: true
};
const stc19 = {
  classMap: {
    "slds-float_right": true
  },
  key: 46
};
const stc20 = {
  classMap: {
    "slds-media__figure": true
  },
  key: 47
};
const stc21 = {
  classMap: {
    "slds-icon_container": true,
    "slds-icon-standard-knowledge": true
  },
  attrs: {
    "title": "Trip Report"
  },
  key: 48
};
const stc22 = {
  classMap: {
    "slds-icon": true,
    "slds-icon_x-small": true
  },
  attrs: {
    "aria-hidden": "true"
  },
  key: 49,
  svg: true
};
const stc23 = {
  classMap: {
    "slds-float_right": true
  },
  key: 51
};
const stc24 = {
  classMap: {
    "slds-media__figure": true
  },
  key: 52
};
const stc25 = {
  classMap: {
    "slds-icon_container": true,
    "slds-icon-standard-address": true
  },
  attrs: {
    "title": "Details"
  },
  key: 53
};
const stc26 = {
  classMap: {
    "slds-icon": true,
    "slds-icon_x-small": true
  },
  attrs: {
    "aria-hidden": "true"
  },
  key: 54,
  svg: true
};
const stc27 = {
  classMap: {
    "slds-cell-wrap": true
  },
  key: 56
};
const stc28 = {
  classMap: {
    "slds-card__footer": true
  },
  key: 57
};
const stc29 = {
  "slds-card__footer-action": true
};
const stc30 = {
  "href": "#"
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {h: api_element, st: api_static_fragment, t: api_text, b: api_bind, c: api_custom_element, k: api_key, d: api_dynamic_text, i: api_iterator} = $api;
  const {_m0, _m1, _m2} = $ctx;
  return [$cmp.yearEvents ? api_element("div", stc0, [api_element("div", stc1, [api_element("div", stc2, [api_element("div", stc3, [api_element("span", stc4, [api_element("svg", stc5, [api_element("use", {
    attrs: {
      "xlink:href": sanitizeAttribute("use", "http://www.w3.org/2000/svg", "xlink:href", "/icons/standard-sprite/svg/symbols.svg#event")
    },
    key: 6,
    svg: true
  })]), api_static_fragment($fragment1(), 8)]), api_element("div", stc6, [api_element("h2", stc7, [$cmp.isHome ? api_text("Upcoming Events") : null, !$cmp.isHome ? api_element("select", {
    key: 11,
    on: {
      "change": _m0 || ($ctx._m0 = api_bind($cmp.handleYearChange))
    }
  }, [api_static_fragment($fragment2(), 13), api_static_fragment($fragment3(), 15), api_static_fragment($fragment4(), 17), api_static_fragment($fragment5(), 19), api_static_fragment($fragment6(), 21), api_static_fragment($fragment7(), 23), api_static_fragment($fragment8(), 25), api_static_fragment($fragment9(), 27), api_static_fragment($fragment10(), 29)]) : null, !$cmp.isHome ? api_text("  Calendar of Events") : null, !$cmp.isHome ? api_custom_element("lightning-helptext", _lightningHelptext, stc8) : null])])])]), api_element("div", stc9, [api_element("div", stc10, [$cmp.loading ? api_static_fragment($fragment11(), 34) : null, api_element("table", stc11, [api_static_fragment($fragment12(), 37), api_element("tbody", stc12, api_iterator($cmp.yearEvents, function (event) {
    return api_element("tr", {
      classMap: stc13,
      attrs: {
        "data-item": event.id
      },
      key: api_key(39, event.id),
      on: {
        "click": _m1 || ($ctx._m1 = api_bind($cmp.handleEventClick))
      }
    }, [api_element("td", stc14, [api_text(api_dynamic_text(event.date)), api_element("div", stc15, [event.cancelled ? api_element("div", stc16, [api_element("span", stc17, [api_element("svg", stc18, [api_element("use", {
      attrs: {
        "xlink:href": sanitizeAttribute("use", "http://www.w3.org/2000/svg", "xlink:href", "/icons/custom-sprite/svg/symbols.svg#custom60")
      },
      key: 45,
      svg: true
    })])])]) : null]), api_element("div", stc19, [event.pdfFile ? api_element("div", stc20, [api_element("span", stc21, [api_element("svg", stc22, [api_element("use", {
      attrs: {
        "xlink:href": sanitizeAttribute("use", "http://www.w3.org/2000/svg", "xlink:href", "/icons/standard-sprite/svg/symbols.svg#knowledge")
      },
      key: 50,
      svg: true
    })])])]) : null]), api_element("div", stc23, [event.details ? api_element("div", stc24, [api_element("span", stc25, [api_element("svg", stc26, [api_element("use", {
      attrs: {
        "xlink:href": sanitizeAttribute("use", "http://www.w3.org/2000/svg", "xlink:href", "/icons/standard-sprite/svg/symbols.svg#address")
      },
      key: 55,
      svg: true
    })])])]) : null])]), api_element("td", stc27, [api_text(api_dynamic_text(event.event))])]);
  }))])])]), $cmp.isHome ? api_element("footer", stc28, [api_element("a", {
    classMap: stc29,
    attrs: stc30,
    key: 58,
    on: {
      "click": _m2 || ($ctx._m2 = api_bind($cmp.handleViewAllEventsClick))
    }
  }, [api_text("View All Events")])]) : null])]) : null];
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
tmpl.stylesheetToken = "my-events_events";
freezeTemplate(tmpl);
