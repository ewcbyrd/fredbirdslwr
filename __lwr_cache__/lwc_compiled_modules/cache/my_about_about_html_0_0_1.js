import { freezeTemplate } from "lwc";

import _implicitStylesheets from "./about.css";

import _implicitScopedStylesheets from "./about.scoped.css?scoped=true";

import {parseFragment, registerTemplate} from "lwc";
const $fragment1 = parseFragment`<div class="slds-float_left${0}"${2}><img src="/images/vso.png"${3}></div>`;
const $fragment2 = parseFragment`<a href="https://www.virginiabirds.org/" target="_blank"${3}>VSO</a>`;
const $fragment3 = parseFragment`<a href="https://www.virginiabirds.org/publications/birding-ethics" target="_blank"${3}>Principles of Birding Ethics</a>`;
const stc0 = {
  classMap: {
    "slds-p-around_large": true
  },
  key: 0
};
const stc1 = {
  "href": "#"
};
function tmpl($api, $cmp, $slotset, $ctx) {
  const {st: api_static_fragment, t: api_text, b: api_bind, h: api_element} = $api;
  const {_m0} = $ctx;
  return [api_element("div", stc0, [api_static_fragment($fragment1(), 2), api_text("The Fredericksburg Birding Club (FBC) is made up of about 30 active members from the greater Fredericksburg area.  We are a local chapter of the Virginia Society of Ornithology ("), api_static_fragment($fragment2(), 4), api_text(") with several of our members active in the organization.   In May of 2009 the FBC organized and hosted the annual meeting of the VSO. Many opportunities are provided for members to enjoy birds locally and across the state.  Club Coordinator, Sally Knight, and other FBC members lead numerous field trips throughout the year (see our "), api_element("a", {
    attrs: stc1,
    key: 5,
    on: {
      "click": _m0 || ($ctx._m0 = api_bind($cmp.handleViewEventsClick))
    }
  }, [api_text("Calendar of Events")]), api_text(").  In addition to these, the FBC participates with fellow VSO chapters in birding activities.  Our trip leaders and members are always happy to help beginning birders develop their love of birding and grow more familiar with our local birds.  Speaking engagements on bird research and conservation are also offered. The FBC supports the mission of the VSO and its "), api_static_fragment($fragment3(), 7), api_text(".  We also support environmental education and the conservation of birds and their habitats through financial donations and volunteering time to various organizations. As a member of the FBC, your benefits include numerous birding and educational activities and the opportunity to share your interest with other bird enthusiasts in the area.")])];
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
tmpl.stylesheetToken = "my-about_about";
freezeTemplate(tmpl);
