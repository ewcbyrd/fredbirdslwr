import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./omni_supervisor.css";

import _implicitScopedStylesheets from "./omni_supervisor.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M67.225 28.893C60.804 31.476 57.416 37.717 57.036 48h10.216a8 8 0 110 4H57.036c.38 10.283 3.768 16.524 10.19 19.107a8 8 0 11.14 4.291C58.27 72.62 53.483 64.663 53.035 52H47a2 2 0 110-4h6.035c.448-12.662 5.236-20.62 14.33-23.399a8 8 0 11-.14 4.291zM75 31a4 4 0 100-8 4 4 0 000 8zm0 46a4 4 0 100-8 4 4 0 000 8zm0-23a4 4 0 100-8 4 4 0 000 8zM45.074 68H22.463C19.933 68 18 65.62 18 62.942c.149-4.016 4.314-6.099 8.628-8.033 2.975-1.339 3.422-2.38 3.422-3.719s-.893-2.529-1.786-3.421c-1.785-1.637-2.677-3.868-2.677-6.546 0-4.909 2.975-9.223 8.33-9.223 5.356 0 8.33 4.314 8.33 9.223 0 2.678-.892 4.91-2.677 6.546-1.041.892-1.785 2.082-1.785 3.421 0 1.19.446 2.38 3.422 3.72 4.314 1.933 8.479 4.016 8.628 8.032C49.537 65.62 47.603 68 45.075 68z"
  },
  key: 2,
  svg: true
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 100 100",
      "part": "icon"
    },
    key: 0,
    svg: true
  }, [api_element("g", stc0, [api_element("path", stc1)])])];
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_omni_supervisor";
freezeTemplate(tmpl);
