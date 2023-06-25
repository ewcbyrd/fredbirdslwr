import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./carouselComponent.css";

import _implicitScopedStylesheets from "./carouselComponent.scoped.css?scoped=true";

import {registerTemplate, sanitizeAttribute} from "lwc";
const stc0 = {
  classMap: {
    "slds-carousel": true
  },
  key: 0
};
const stc1 = {
  classMap: {
    "slds-carousel__stage": true
  },
  key: 1
};
const stc2 = {
  classMap: {
    "slds-carousel__autoplay": true
  },
  key: 2
};
const stc3 = {
  "slds-button": true,
  "slds-button_icon": true,
  "slds-button_icon-border-filled": true,
  "slds-button_icon-x-small": true
};
const stc4 = {
  "title": "Stop auto-play"
};
const stc5 = {
  classMap: {
    "slds-button__icon": true
  },
  attrs: {
    "aria-hidden": "true"
  },
  key: 4,
  svg: true
};
const stc6 = {
  "title": "resume auto-play"
};
const stc7 = {
  classMap: {
    "slds-button__icon": true
  },
  attrs: {
    "aria-hidden": "true"
  },
  key: 7,
  svg: true
};
const stc8 = {
  classMap: {
    "slds-carousel__panels": true
  },
  styleDecls: [["transform", "translateX(-0%)", false]],
  key: 9
};
const stc9 = {
  "slds-carousel__panel-action": true,
  "slds-text-link_reset": true
};
const stc10 = {
  key: 12
};
const stc11 = {
  classMap: {
    "slds-carousel__content": true
  },
  key: 14
};
const stc12 = {
  classMap: {
    "slds-carousel__content-title": true
  },
  key: 15
};
const stc13 = {
  key: 16
};
const stc14 = {
  classMap: {
    "slds-carousel__image": true
  },
  key: 18
};
const stc15 = {
  classMap: {
    "slds-carousel__content": true
  },
  key: 20
};
const stc16 = {
  classMap: {
    "slds-carousel__content-title": true
  },
  key: 21
};
const stc17 = {
  key: 22
};
const stc18 = [];
function tmpl($api, $cmp, $slotset, $ctx) {
  const {b: api_bind, h: api_element, gid: api_scoped_id, k: api_key, ti: api_tab_index, d: api_dynamic_text, t: api_text, fid: api_scoped_frag_id, i: api_iterator} = $api;
  const {_m0, _m1} = $ctx;
  return [api_element("div", stc0, [api_element("div", stc1, [$cmp.autoScroll ? api_element("span", stc2, [!$cmp.showPlayIcon ? api_element("button", {
    classMap: stc3,
    attrs: stc4,
    key: 3,
    on: {
      "click": _m0 || ($ctx._m0 = api_bind($cmp.togglePlay))
    }
  }, [api_element("svg", stc5, [api_element("use", {
    attrs: {
      "xlink:href": sanitizeAttribute("use", "http://www.w3.org/2000/svg", "xlink:href", "/icons/utility-sprite/svg/symbols.svg#pause")
    },
    key: 5,
    svg: true
  })])]) : null, $cmp.showPlayIcon ? api_element("button", {
    classMap: stc3,
    attrs: stc6,
    key: 6,
    on: {
      "click": _m1 || ($ctx._m1 = api_bind($cmp.togglePlay))
    }
  }, [api_element("svg", stc7, [api_element("use", {
    attrs: {
      "xlink:href": sanitizeAttribute("use", "http://www.w3.org/2000/svg", "xlink:href", "/icons/utility-sprite/svg/symbols.svg#play")
    },
    key: 8,
    svg: true
  })])]) : null]) : null, api_element("div", stc8, $cmp.components ? api_iterator($cmp.components, function (component) {
    return api_element("div", {
      className: component.contentClass,
      attrs: {
        "id": api_scoped_id(component.contentId),
        "role": "tabpanel",
        "aria-hidden": component.hidden,
        "aria-labelledby": api_scoped_id(component.indicatorId)
      },
      key: api_key(10, component.contentId)
    }, [component.video ? api_element("div", {
      classMap: stc9,
      attrs: {
        "tabindex": api_tab_index(component.tabindex)
      },
      key: 11
    }, [api_element("div", stc10, [api_element("iframe", {
      attrs: {
        "height": "400px",
        "width": "100%",
        "src": component.video,
        "frameborder": "0",
        "allow": "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
        "allowfullscreen": ""
      },
      key: 13
    })]), api_element("div", stc11, [api_element("h2", stc12, [api_text(api_dynamic_text(component.header))]), api_element("p", stc13, [api_text(api_dynamic_text(component.description))])])]) : null, !component.video ? api_element("a", {
      classMap: stc9,
      attrs: {
        "href": api_scoped_frag_id(component.href),
        "tabindex": api_tab_index(component.tabindex)
      },
      key: 17
    }, [api_element("div", stc14, [api_element("img", {
      attrs: {
        "src": component.image,
        "alt": component.header
      },
      key: 19
    })]), api_element("div", stc15, [api_element("h2", stc16, [api_text(api_dynamic_text(component.header))]), api_element("p", stc17, [api_text(api_dynamic_text(component.description))])])]) : null]);
  }) : stc18)])])];
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
tmpl.stylesheetToken = "c-carouselComponent_carouselComponent";
freezeTemplate(tmpl);
