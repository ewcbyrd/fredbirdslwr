import _tmpl from "./newsletterParent.html";
import { registerComponent as _registerComponent, LightningElement } from "lwc";
class NewsletterParent extends LightningElement {
  handleNewsletterClickEvent(event) {
    const details = this.template.querySelector('my-newsletter-details');
    details.newsletter = event.detail;
  }
  /*LWC compiler v2.38.1*/
}
export default _registerComponent(NewsletterParent, {
  tmpl: _tmpl
});