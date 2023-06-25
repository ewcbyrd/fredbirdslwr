import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./contact.html";
import { sendEmail } from 'data/restdbService';
class App extends LightningElement {
  constructor(...args) {
    super(...args);
    this.name = '';
    this.email = '';
    this.topic = '';
    this.message = '';
    this.emailMap = new Map().set('membership', 'membership@fredbirds.com').set('website', 'admin@fredbirds.com').set('event', 'events@fredbirds.com').set('birding', 'communications@fredbirds.com').set('other', 'communications@fredbirds.com');
  }
  get options() {
    return [{
      label: 'Membership',
      value: 'membership'
    }, {
      label: 'Birding',
      value: 'birding'
    }, {
      label: 'Event',
      value: 'event'
    }, {
      label: 'Web Site',
      value: 'website'
    }, {
      label: 'Other',
      value: 'other'
    }];
  }
  handleSubmit() {
    const valid = [...this.template.querySelectorAll('lightning-input,  lightning-combobox, lightning-textarea')].reduce((validSoFar, inputField) => {
      inputField.reportValidity();
      return validSoFar && inputField.checkValidity();
    }, true);
    if (valid) {
      const emailAddr = this.emailMap.get(this.topic);
      const emailBody = JSON.stringify({
        to: emailAddr,
        from: {
          email: 'admin@fredbirds.com',
          name: 'Contact Us Message'
        },
        subject: 'Contact Us Message',
        content: [{
          type: 'text/plain',
          value: `Name: ${this.name}\nEmail: ${this.email}\nMessage: ${this.message}`
        }]
      });
      sendEmail(emailBody).then(response => {
        console.log(response);
        this.clearForm();
      }).catch(error => {
        console.log(error);
      });
    }
  }
  handleFormChange(event) {
    this[event.target.name] = event.target.value;
  }
  clearForm() {
    this.name = '';
    this.email = '';
    this.topic = '';
    this.message = '';
  }
  /*LWC compiler v2.38.1*/
}
_registerDecorators(App, {
  fields: ["name", "email", "topic", "message", "emailMap"]
});
export default _registerComponent(App, {
  tmpl: _tmpl
});