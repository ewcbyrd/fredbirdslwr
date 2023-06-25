import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./eventDetails.css";

import _implicitScopedStylesheets from "./eventDetails.scoped.css?scoped=true";

import _lightningFormattedRichText from "lightning/formattedRichText";
import {parseFragment, registerTemplate, sanitizeAttribute} from "lwc";
const $fragment1 = parseFragment`<span class="slds-assistive-text${0}"${2}>error</span>`;
const $fragment2 = parseFragment`<div class="slds-media__body${0}"${2}><p${3}>This event was cancelled</p></div>`;
const $fragment3 = parseFragment`<span class="slds-radio_faux${0}"${2}>Details</span>`;
const $fragment4 = parseFragment`<span class="slds-radio_faux${0}"${2}>Trip Report</span>`;
const $fragment5 = parseFragment`<span class="slds-assistive-text${0}"${2}>warning</span>`;
const $fragment6 = parseFragment`<div class="slds-media__body${0}"${2}><p${3}>There are no event details or a trip report for this event</p></div>`;
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
    "slds-media__figure": true
  },
  key: 3
};
const stc4 = {
  classMap: {
    "slds-icon_container": true,
    "slds-icon-standard-account": true
  },
  attrs: {
    "title": "account"
  },
  key: 4
};
const stc5 = {
  classMap: {
    "slds-icon": true,
    "slds-icon_medium": true
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
  key: 7
};
const stc7 = {
  classMap: {
    "slds-card__header-title": true
  },
  key: 8
};
const stc8 = {
  classMap: {
    "slds-card__body": true,
    "slds-card__body_inner": true
  },
  key: 9
};
const stc9 = {
  classMap: {
    "slds-scrollable--y": true
  },
  styleDecls: [["max-height", "650px", false]],
  key: 10
};
const stc10 = {
  classMap: {
    "slds-scoped-notification": true,
    "slds-media": true,
    "slds-media_center": true,
    "slds-theme_error": true
  },
  attrs: {
    "role": "status"
  },
  key: 11
};
const stc11 = {
  classMap: {
    "slds-media__figure": true
  },
  key: 12
};
const stc12 = {
  classMap: {
    "slds-icon_container": true,
    "slds-icon-utility-error": true
  },
  attrs: {
    "title": "error"
  },
  key: 13
};
const stc13 = {
  classMap: {
    "slds-icon": true,
    "slds-icon_small": true
  },
  attrs: {
    "aria-hidden": "true"
  },
  key: 14,
  svg: true
};
const stc14 = {
  classMap: {
    "slds-p-top_small": true,
    "slds-p-bottom_small": true
  },
  key: 20
};
const stc15 = {
  classMap: {
    "slds-form-element": true
  },
  key: 21
};
const stc16 = {
  classMap: {
    "slds-form-element__control": true
  },
  key: 22
};
const stc17 = {
  classMap: {
    "slds-radio_button-group": true
  },
  key: 23
};
const stc18 = {
  classMap: {
    "slds-button": true,
    "slds-radio_button": true
  },
  key: 24
};
const stc19 = {
  "slds-radio_button__label": true
};
const stc20 = {
  classMap: {
    "slds-button": true,
    "slds-radio_button": true
  },
  key: 29
};
const stc21 = {
  classMap: {
    "slds-text-body_small": true
  },
  key: 34
};
const stc22 = {
  classMap: {
    "slds-scoped-notification": true,
    "slds-media": true,
    "slds-media_center": true,
    "slds-theme_warning": true
  },
  attrs: {
    "role": "status"
  },
  key: 35
};
const stc23 = {
  classMap: {
    "slds-media__figure": true
  },
  key: 36
};
const stc24 = {
  classMap: {
    "slds-icon_container": true,
    "slds-icon-utility-warning": true
  },
  attrs: {
    "title": "warning"
  },
  key: 37
};
const stc25 = {
  classMap: {
    "slds-icon": true,
    "slds-icon_small": true
  },
  attrs: {
    "aria-hidden": "true"
  },
  key: 38,
  svg: true
};
const stc26 = {
  styleDecls: [["overflow", "auto", true], ["-webkit-overflow-scrolling", "touch", true]],
  key: 45
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {h: api_element, d: api_dynamic_text, t: api_text, st: api_static_fragment, gid: api_scoped_id, b: api_bind, c: api_custom_element} = $api;
  const {_m0, _m1} = $ctx;
  return [$cmp.showDetails ? api_element("article", stc0, [api_element("div", stc1, [api_element("header", stc2, [api_element("div", stc3, [api_element("span", stc4, [api_element("svg", stc5, [api_element("use", {
    attrs: {
      "xlink:href": sanitizeAttribute("use", "http://www.w3.org/2000/svg", "xlink:href", "/icons/standard-sprite/svg/symbols.svg#knowledge")
    },
    key: 6,
    svg: true
  })])])]), api_element("div", stc6, [api_element("h2", stc7, [api_text(api_dynamic_text($cmp.selectedEvent.event))])])])]), api_element("div", stc8, [api_element("div", stc9, [$cmp.eventCancelled ? api_element("div", stc10, [api_element("div", stc11, [api_element("span", stc12, [api_element("svg", stc13, [api_element("use", {
    attrs: {
      "xlink:href": sanitizeAttribute("use", "http://www.w3.org/2000/svg", "xlink:href", "/icons/utility-sprite/svg/symbols.svg#error")
    },
    key: 15,
    svg: true
  })]), api_static_fragment($fragment1(), 17)])]), api_static_fragment($fragment2(), 19)]) : null, $cmp.showButtons ? api_element("div", stc14, [api_element("fieldset", stc15, [api_element("div", stc16, [api_element("div", stc17, [api_element("span", stc18, [api_element("input", {
    attrs: {
      "type": "radio",
      "name": "event",
      "id": api_scoped_id("details"),
      "disabled": $cmp.detailsDisabled ? "" : null
    },
    props: {
      "value": "details",
      "checked": $cmp.detailsSelected
    },
    key: 25,
    on: {
      "change": _m0 || ($ctx._m0 = api_bind($cmp.handleTypeChange))
    }
  }), api_element("label", {
    classMap: stc19,
    attrs: {
      "for": api_scoped_id("details")
    },
    key: 26
  }, [api_static_fragment($fragment3(), 28)])]), api_element("span", stc20, [api_element("input", {
    attrs: {
      "type": "radio",
      "name": "event",
      "id": api_scoped_id("tripReport"),
      "disabled": $cmp.tripReportDisabled ? "" : null
    },
    props: {
      "value": "tripReport",
      "checked": $cmp.tripReportSelected
    },
    key: 30,
    on: {
      "change": _m1 || ($ctx._m1 = api_bind($cmp.handleTypeChange))
    }
  }), api_element("label", {
    classMap: stc19,
    attrs: {
      "for": api_scoped_id("tripReport")
    },
    key: 31
  }, [api_static_fragment($fragment4(), 33)])])])])])]) : null, api_element("div", stc21, [!$cmp.eventCancelled ? !$cmp.showButtons ? api_element("div", stc22, [api_element("div", stc23, [api_element("span", stc24, [api_element("svg", stc25, [api_element("use", {
    attrs: {
      "xlink:href": sanitizeAttribute("use", "http://www.w3.org/2000/svg", "xlink:href", "/icons/utility-sprite/svg/symbols.svg#warning")
    },
    key: 39,
    svg: true
  })]), api_static_fragment($fragment5(), 41)])]), api_static_fragment($fragment6(), 43)]) : null : null, !$cmp.eventCancelled ? $cmp.detailsSelected ? api_custom_element("lightning-formatted-rich-text", _lightningFormattedRichText, {
    props: {
      "value": $cmp.selectedEvent.details
    },
    key: 44
  }) : null : null, !$cmp.eventCancelled ? $cmp.tripReportSelected ? api_element("div", stc26, [api_element("iframe", {
    attrs: {
      "src": $cmp.pdfFileLocation,
      "width": "100%",
      "height": "600px"
    },
    key: 46
  })]) : null : null])])])]) : null];
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
tmpl.stylesheetToken = "my-eventDetails_eventDetails";
freezeTemplate(tmpl);
