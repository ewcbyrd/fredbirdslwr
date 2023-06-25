import{registerTemplate as u,parseFragment as s,freezeTemplate as m,registerComponent as p,LightningElement as g}from"/1/bundle/esm/l/en-US/bi/0/module/mi/lwc%2Fv%2F2_38_1/s/183b29ac1be89ec47e9ba9b34652a5cce805de96/bundle_lwc.js";function b(t,n,d){var i=t?"["+t+"]":"";return"div"+i+" {font-size: 1rem;background: white;}img"+i+" {padding-right: 16px;;}"}var l=[b];const f=s`<div class="slds-float_left${0}"${2}><img src="/images/vso.png"${3}></div>`,v=s`<a href="https://www.virginiabirds.org/" target="_blank"${3}>VSO</a>`,y=s`<a href="https://www.virginiabirds.org/publications/birding-ethics" target="_blank"${3}>Principles of Birding Ethics</a>`,w={classMap:{"slds-p-around_large":!0},key:0},_={href:"#"};function e(t,n,d,i){const{st:r,t:a,b:h,h:o}=t,{_m0:c}=i;return[o("div",w,[r(f(),2),a("The Fredericksburg Birding Club (FBC) is made up of about 30 active members from the greater Fredericksburg area.  We are a local chapter of the Virginia Society of Ornithology ("),r(v(),4),a(") with several of our members active in the organization.   In May of 2009 the FBC organized and hosted the annual meeting of the VSO. Many opportunities are provided for members to enjoy birds locally and across the state.  Club Coordinator, Sally Knight, and other FBC members lead numerous field trips throughout the year (see our "),o("a",{attrs:_,key:5,on:{click:c||(i._m0=h(n.handleViewEventsClick))}},[a("Calendar of Events")]),a(").  In addition to these, the FBC participates with fellow VSO chapters in birding activities.  Our trip leaders and members are always happy to help beginning birders develop their love of birding and grow more familiar with our local birds.  Speaking engagements on bird research and conservation are also offered. The FBC supports the mission of the VSO and its "),r(y(),7),a(".  We also support environmental education and the conservation of birds and their habitats through financial donations and volunteering time to various organizations. As a member of the FBC, your benefits include numerous birding and educational activities and the opportunity to share your interest with other bird enthusiasts in the area.")])]}var C=u(e);e.stylesheets=[],l&&e.stylesheets.push.apply(e.stylesheets,l),e.stylesheetToken="my-about_about",m(e);class k extends g{handleViewEventsClick(){this.dispatchEvent(new CustomEvent("viewall",{detail:"events",bubbles:!0,composed:!0}))}}var F=p(k,{tmpl:C});export default F;
