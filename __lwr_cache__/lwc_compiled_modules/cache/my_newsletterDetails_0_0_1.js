import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./newsletterDetails.html";
class NewsletterDetails extends LightningElement {
  constructor(...args) {
    super(...args);
    this.newsletter = void 0;
  }
  get pdfFileLocation() {
    return `https://drive.google.com/file/d/${this.newsletter.pdfFile}/preview?usp=sharing`;
  }
  /*LWC compiler v2.38.1*/
}
_registerDecorators(NewsletterDetails, {
  publicProps: {
    newsletter: {
      config: 0
    }
  }
});
export default _registerComponent(NewsletterDetails, {
  tmpl: _tmpl
});