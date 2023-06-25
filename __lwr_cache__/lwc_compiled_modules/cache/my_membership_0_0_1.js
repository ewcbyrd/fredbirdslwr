import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./membership.html";
class Membership extends LightningElement {
  constructor(...args) {
    super(...args);
    this.showModal = false;
    this.modalDetail = {};
  }
  handleMemberEvent(event) {
    this.showModal = true;
    this.modalDetail = event.detail;
  }
  handleOkClick() {
    this.showModal = false;
  }
  /*LWC compiler v2.38.1*/
}
_registerDecorators(Membership, {
  fields: ["showModal", "modalDetail"]
});
export default _registerComponent(Membership, {
  tmpl: _tmpl
});