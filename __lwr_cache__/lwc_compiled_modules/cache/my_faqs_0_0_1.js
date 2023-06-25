import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./faqs.html";
import { getFaqs } from 'data/restdbService';
class Events extends LightningElement {
  constructor(...args) {
    super(...args);
    this.faqs = {};
    this.category = 'Membership';
    this.options = [];
    this.selectedFaqs = [];
  }
  connectedCallback() {
    const faqs = sessionStorage.getItem('faqs');
    if (faqs) {
      this.faqs = JSON.parse(faqs);
      this.getOptions();
      this.getSelectedFaqs();
    } else {
      getFaqs().then(response => {
        return response.json();
      }).then(results => {
        const faqObj = {};
        results.forEach(faq => {
          if (!faqObj[faq.category]) {
            faqObj[faq.category] = [];
          }
          faqObj[faq.category].push(faq);
        });
        this.faqs = faqObj;
        sessionStorage.setItem('faqs', JSON.stringify(faqObj));
        this.getOptions();
        this.getSelectedFaqs();
      }).catch(error => console.log(error));
    }
  }
  getOptions() {
    let options = [];
    // Build options for dropdown
    for (const key in this.faqs) {
      options.push({
        label: key,
        value: key
      });
    }
    console.log(options);
    this.options = options;
  }
  getSelectedFaqs() {
    this.selectedFaqs = this.faqs[this.category];
  }
  handleCategoryChange(event) {
    this.category = event.target.value;
    this.getSelectedFaqs();
  }
  /*LWC compiler v2.38.1*/
}
_registerDecorators(Events, {
  fields: ["faqs", "category", "options", "selectedFaqs"]
});
export default _registerComponent(Events, {
  tmpl: _tmpl
});