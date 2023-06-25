import _tmpl from "./about.html";
import { registerComponent as _registerComponent, LightningElement } from "lwc";
class About extends LightningElement {
  handleViewEventsClick() {
    this.dispatchEvent(new CustomEvent('viewall', {
      detail: 'events',
      bubbles: true,
      composed: true
    }));
  }
  /*LWC compiler v2.38.1*/
}
export default _registerComponent(About, {
  tmpl: _tmpl
});