import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./newsletters.html";
import { getNewsletters } from 'data/restdbService';
class Newsletters extends LightningElement {
  constructor(...args) {
    super(...args);
    this.newsletters = [];
  }
  connectedCallback() {
    const newsletters = sessionStorage.getItem('newsletters');
    if (newsletters) {
      this.newsletters = JSON.parse(newsletters);
    } else {
      this.retrieveNewsletters();
    }
  }
  handleNewsletterClick(event) {
    const id = event.currentTarget.dataset.item;
    const newsletter = this.newsletters.find(item => item._id === id);
    this.setSelectedStyle(id);
    this.dispatchEvent(new CustomEvent('newsletterclick', {
      detail: newsletter
    }));
  }
  get numNewsletters() {
    return this.newsletters.length;
  }
  retrieveNewsletters() {
    getNewsletters().then(response => {
      return response.json();
    }).then(results => {
      this.newsletters = results;
      sessionStorage.setItem('newsletters', JSON.stringify(results));
      sessionStorage.setItem('newslettersRetrieved', new Date().getTime());
    }).catch(error => {
      console.log(error);
    });
  }
  get retrieved() {
    return sessionStorage.getItem('newslettersRetrieved');
  }
  setSelectedStyle(id) {
    const items = this.template.querySelectorAll('.item');
    items.forEach(item => {
      if (item.dataset.item === id) {
        item.ariaSelected = 'true';
      } else {
        item.ariaSelected = 'false';
      }
    });
    console.log(items[0].dataset.item);
  }
  /*LWC compiler v2.38.1*/
}
_registerDecorators(Newsletters, {
  fields: ["newsletters"]
});
export default _registerComponent(Newsletters, {
  tmpl: _tmpl
});