import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./news.css";

import _implicitScopedStylesheets from "./news.scoped.css?scoped=true";

import _lightningFormattedDateTime from "lightning/formattedDateTime";
import {parseFragment, registerTemplate, sanitizeAttribute} from "lwc";
const $fragment1 = parseFragment`<span${3}>Birding News</span>`;
const $fragment2 = parseFragment`<span class="slds-assistive-text${0}"${2}>Switch list view</span>`;
const $fragment3 = parseFragment`<div class="slds-page-header__col-actions${0}"${2}><div class="slds-page-header__controls${0}"${2}><div class="slds-page-header__control${0}"${2}></div></div></div>`;
const $fragment4 = parseFragment`<span class="slds-assistive-text${0}"${2}>Refresh List</span>`;
const $fragment5 = parseFragment`<div class="slds-media__body${0}"${2}><h2 class="slds-card__header-title${0}"${2}>Birding News</h2></div>`;
const stc0 = {
  classMap: {
    "slds-grid": true,
    "slds-gutters": true,
    "slds-wrap": true,
    "slds-var-p-around_medium": true
  },
  key: 0
};
const stc1 = {
  classMap: {
    "slds-large-size_1-of-1": true,
    "slds-small-size_1-of-1": true,
    "slds-col": true
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
    "slds-icon-standard-news": true
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
  attrs: {
    "href": "#",
    "role": "menuitem",
    "tabindex": "0"
  },
  key: 27
};
const stc23 = {
  "slds-truncate": true
};
const stc24 = {
  classMap: {
    "slds-page-header__row": true
  },
  key: 31
};
const stc25 = {
  classMap: {
    "slds-page-header__col-meta": true
  },
  key: 32
};
const stc26 = {
  classMap: {
    "slds-page-header__meta-text": true
  },
  key: 33
};
const stc27 = {
  classMap: {
    "slds-page-header__col-controls": true
  },
  key: 35
};
const stc28 = {
  classMap: {
    "slds-page-header__controls": true
  },
  key: 36
};
const stc29 = {
  classMap: {
    "slds-page-header__control": true
  },
  key: 37
};
const stc30 = {
  "slds-button": true,
  "slds-button_icon": true,
  "slds-button_icon-border-filled": true
};
const stc31 = {
  "title": "Refresh List"
};
const stc32 = {
  classMap: {
    "slds-button__icon": true
  },
  attrs: {
    "aria-hidden": "true"
  },
  key: 39,
  svg: true
};
const stc33 = {
  classMap: {
    "slds-large-size_1-of-1": true,
    "slds-small-size_1-of-1": true,
    "slds-col": true,
    "slds-var-p-top_small": true
  },
  key: 43
};
const stc34 = {
  classMap: {
    "slds-card": true
  },
  key: 44
};
const stc35 = {
  classMap: {
    "slds-card__header": true,
    "slds-grid": true
  },
  key: 45
};
const stc36 = {
  classMap: {
    "slds-media": true,
    "slds-media_center": true,
    "slds-has-flexi-truncate": true
  },
  key: 46
};
const stc37 = {
  classMap: {
    "slds-media__figure": true
  },
  key: 47
};
const stc38 = {
  classMap: {
    "slds-icon_container": true,
    "slds-icon-standard-news": true
  },
  attrs: {
    "title": "news"
  },
  key: 48
};
const stc39 = {
  classMap: {
    "slds-icon": true,
    "slds-icon_medium": true
  },
  attrs: {
    "aria-hidden": "true"
  },
  key: 49,
  svg: true
};
const stc40 = {
  classMap: {
    "slds-card__body": true,
    "slds-card__body_inner": true,
    "slds-scrollable_y": true
  },
  styleDecls: [["height", "600px", false]],
  key: 53
};
const stc41 = {
  "slds-p-bottom_small": true
};
const stc42 = {
  classMap: {
    "slds-text-heading_medium": true
  },
  key: 56
};
const stc43 = {
  key: 57
};
const stc44 = {
  classMap: {
    "slds-card__footer": true
  },
  key: 58
};
const stc45 = {
  "slds-card__footer-action": true
};
const stc46 = {
  "href": "javascript:void(0);"
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {h: api_element, st: api_static_fragment, d: api_dynamic_text, t: api_text, b: api_bind, k: api_key, i: api_iterator, c: api_custom_element} = $api;
  const {_m0, _m1, _m2, _m3} = $ctx;
  return [api_element("div", stc0, [api_element("div", stc1, [api_element("div", stc2, [api_element("div", stc3, [api_element("div", stc4, [api_element("div", stc5, [api_element("div", stc6, [api_element("span", stc7, [api_element("svg", stc8, [api_element("use", {
    attrs: {
      "xlink:href": sanitizeAttribute("use", "http://www.w3.org/2000/svg", "xlink:href", "/icons/standard-sprite/svg/symbols.svg#news")
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
  })]), api_static_fragment($fragment2(), 23)]), api_element("div", stc19, [api_element("ul", stc20, api_iterator($cmp.dropdownOptions, function (option) {
    return api_element("li", {
      classMap: stc21,
      attrs: {
        "role": "presentation",
        "data-id": option.title
      },
      key: api_key(26, option._id),
      on: {
        "click": _m1 || ($ctx._m1 = api_bind($cmp.handleOptionChange))
      }
    }, [api_element("a", stc22, [api_element("span", {
      classMap: stc23,
      attrs: {
        "title": option.title
      },
      key: 28
    }, [api_text(api_dynamic_text(option.title))])])]);
  }))])])])])])])]), api_static_fragment($fragment3(), 30)]), api_element("div", stc24, [api_element("div", stc25, [api_element("p", stc26, [api_text(api_dynamic_text($cmp.numItems) + " items • Updated " + api_dynamic_text($cmp.timeElapsed)), api_custom_element("lightning-formatted-date-time", _lightningFormattedDateTime, {
    props: {
      "value": $cmp.lastUpdatedDate,
      "year": "numeric",
      "month": "long",
      "day": "2-digit",
      "hour": "2-digit",
      "minute": "2-digit",
      "hour12": "true"
    },
    key: 34
  })])]), api_element("div", stc27, [api_element("div", stc28, [api_element("div", stc29, [api_element("button", {
    classMap: stc30,
    attrs: stc31,
    key: 38,
    on: {
      "click": _m2 || ($ctx._m2 = api_bind($cmp.refresh))
    }
  }, [api_element("svg", stc32, [api_element("use", {
    attrs: {
      "xlink:href": sanitizeAttribute("use", "http://www.w3.org/2000/svg", "xlink:href", "/icons/utility-sprite/svg/symbols.svg#refresh")
    },
    key: 40,
    svg: true
  })]), api_static_fragment($fragment4(), 42)])])])])])])]), api_element("div", stc33, [$cmp.news ? api_element("article", stc34, [api_element("div", stc35, [api_element("header", stc36, [api_element("div", stc37, [api_element("span", stc38, [api_element("svg", stc39, [api_element("use", {
    attrs: {
      "xlink:href": sanitizeAttribute("use", "http://www.w3.org/2000/svg", "xlink:href", "/icons/standard-sprite/svg/symbols.svg#news")
    },
    key: 50,
    svg: true
  })])])]), api_static_fragment($fragment5(), 52)])]), api_element("div", stc40, api_iterator($cmp.birdNews, function (item) {
    return api_element("div", {
      classMap: stc41,
      key: api_key(54, item.id)
    }, [item.isLink ? api_element("a", {
      attrs: {
        "href": item.link,
        "target": "_blank"
      },
      key: 55
    }, [api_element("div", stc42, [api_text(api_dynamic_text(item.title))])]) : null, item.isLink ? api_element("div", stc43, [api_text(api_dynamic_text(item.contentSnippet))]) : null]);
  })), $cmp.showFooter ? api_element("footer", stc44, [api_element("a", {
    classMap: stc45,
    attrs: stc46,
    key: 59,
    on: {
      "click": _m3 || ($ctx._m3 = api_bind($cmp.handleViewAllClick))
    }
  }, [api_text("View All News")])]) : null]) : null])])];
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
tmpl.stylesheetToken = "my-news_news";
freezeTemplate(tmpl);
