import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./eventParent.html";
class EventParent extends LightningElement {
  constructor(...args) {
    super(...args);
    this.selectedEvent = void 0;
  }
  handleEventClick(event) {
    this.selectedEvent = event.detail;
    this.template.querySelector('my-event-details').resetSelected(this.selectedEvent.details !== undefined && this.selectedEvent.details !== '', this.selectedEvent.pdfFile !== undefined && this.selectedEvent.pdfFile !== '');
  }
  handleYearChange() {
    this.selectedEvent = undefined;
  }
  /*LWC compiler v2.38.1*/
}
_registerDecorators(EventParent, {
  fields: ["selectedEvent"]
});
export default _registerComponent(EventParent, {
  tmpl: _tmpl
});