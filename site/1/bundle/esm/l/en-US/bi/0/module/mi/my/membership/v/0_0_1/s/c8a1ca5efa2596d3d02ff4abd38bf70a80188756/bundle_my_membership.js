import{registerTemplate as h,parseFragment as r,sanitizeAttribute as g,freezeTemplate as v,registerComponent as _,LightningElement as f,registerDecorators as y}from"/1/bundle/esm/l/en-US/bi/0/module/mi/lwc%2Fv%2F2_38_1/s/183b29ac1be89ec47e9ba9b34652a5cce805de96/bundle_lwc.js";function $(l,e,m){var i=l?"["+l+"]":"";return".main"+i+" {background-color: white;font-size: 1rem;}"}var c=[$];const w=r`<span class="slds-assistive-text${0}"${2}>Close</span>`,k=r`<div class="slds-backdrop slds-backdrop_open${0}"${2}></div>`,M=r`<div class="slds-grid slds-wrap${0}"${2}><div class="slds-small-size_1-of-1 slds-large-size_7-of-12 slds-p-left_large slds-p-right_large${0}"${2}><div class="slds-text-heading_large slds-p-top_x-small${0}"${2}>FBC Membership</div><div${3}>Are you a new birder looking to gain exerpience? Are you a veteran birder looking for a group to share your love of birding with? Or, are you just looking to get outdoors with nice people? We have some great news! The Fredericksburg Birding Club delivers all of this and more.</div><div class="slds-p-top_x-small${0}"${2}>There are two levels of membership in the club, Basic and Full. Both allow full participation in field trips and access to the club web site.</div><div class="slds-text-heading_medium slds-p-top_x-small${0}"${2}>Basic Membership</div><div${3}>Basic Membership is our free level. It is designed for individuals who will occasionally participate in club events. It provides for:</div><ul class="slds-list_dotted${0}"${2}><li${3}>Participation in regular club field trips</li><li${3}>Access to basic web site features</li></ul><div class="slds-text-heading_medium slds-p-top_x-small${0}"${2}>Full Membership</div><div${3}>Full Membership is our paid level. It is designed for individuals who will be regular participants in club events. Annual membership dues are $20 for an individual or $25 for a family. It provides for:</div><ul class="slds-list_dotted${0}"${2}><li${3}>Participation in regular and Full Member-only club field trips</li><li${3}>Access to all web site features</li><li${3}>Voting rights at club meetings</li><li${3}>Eligibility for club officer positions</li></ul><div class="slds-p-top_x-small${0}"${2}>Our club is open to anyone who would like to join. Just fill in the form to the right and click submit. This will add you as a non-paying member. If you desire to become a paid member, please send a check made out to Fredericksburg Birding Club to:<div class="slds-p-top_small${0}"${2}>Linda Chaney<br${3}>Fredericksburg Birding Club<br${3}>PO Box 115<br${3}>Partlow, VA 22534</div></div></div><div class="slds-small-size_1-of-1 slds-large-size_5-of-12 slds-p-top_x-small${0}"${2}><iframe style="height: 670px; width: 100%" src="https://cdn.forms-content.sg-form.com/7af3b17c-c85b-11eb-8dc8-7eae1ceb606b"${3}></iframe></div></div>`,x={classMap:{"slds-p-around_medium":!0,main:!0},key:0},F={"slds-modal":!0,"slds-fade-in-open":!0},C={classMap:{"slds-modal__container":!0},key:2},B={classMap:{"slds-modal__header":!0},key:3},A={classMap:{"slds-button":!0,"slds-button_icon":!0,"slds-modal__close":!0,"slds-button_icon-inverse":!0},attrs:{title:"Close"},key:4},z={classMap:{"slds-button__icon":!0,"slds-button__icon_large":!0},attrs:{"aria-hidden":"true"},key:5,svg:!0},D={"slds-modal__title":!0,"slds-hyphenate":!0},O={"slds-modal__content":!0,"slds-p-around_medium":!0},T={key:11},I={classMap:{"slds-modal__footer":!0},key:12},P={"slds-button":!0,"slds-button_brand":!0};function t(l,e,m,i){const{gid:a,h:s,st:o,d:n,t:d,b:p}=l,{_m0:b}=i;return[s("div",x,[e.showModal?s("section",{classMap:F,attrs:{role:"dialog",tabindex:"-1","aria-labelledby":a("modal-heading-01"),"aria-modal":"true","aria-describedby":a("modal-content-id-1")},key:1},[s("div",C,[s("header",B,[s("button",A,[s("svg",z,[s("use",{attrs:{"xlink:href":g("use","http://www.w3.org/2000/svg","xlink:href","/icons/utility-sprite/svg/symbols.svg#close")},key:6,svg:!0})]),o(w(),8)]),s("h2",{classMap:D,attrs:{id:a("modal-heading-01")},key:9},[d(n(e.modalDetail.header))])]),s("div",{classMap:O,attrs:{id:a("modal-content-id-1")},key:10},[s("p",T,[d(n(e.modalDetail.message))])]),s("footer",I,[s("button",{classMap:P,key:13,on:{click:b||(i._m0=p(e.handleOkClick))}},[d("OK")])])])]):null,e.showModal?o(k(),15):null,o(M(),17)])]}var S=h(t);t.stylesheets=[],c&&t.stylesheets.push.apply(t.stylesheets,c),t.stylesheetToken="my-membership_membership",v(t);class u extends f{constructor(...e){super(...e);this.showModal=!1,this.modalDetail={}}handleMemberEvent(e){this.showModal=!0,this.modalDetail=e.detail}handleOkClick(){this.showModal=!1}}y(u,{fields:["showModal","modalDetail"]});var j=_(u,{tmpl:S});export default j;
