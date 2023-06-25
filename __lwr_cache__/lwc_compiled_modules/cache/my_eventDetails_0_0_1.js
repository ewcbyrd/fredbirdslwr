import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./eventDetails.html";
class EventDetails extends LightningElement {
  constructor(...args) {
    super(...args);
    this.selectedEvent = void 0;
    this.detailsSelected = void 0;
    this.tripReportSelected = void 0;
  }
  get eventCancelled() {
    return this.selectedEvent.cancelled;
  }
  get tripReport() {
    return this.selectedEvent.pdfFile;
  }
  get showDetails() {
    return this.selectedEvent !== undefined;
  }
  get detailsDisabled() {
    return this.selectedEvent.details === undefined || this.selectedEvent.details === '';
  }
  get tripReportDisabled() {
    return this.selectedEvent.pdfFile === undefined || this.selectedEvent.pdfFile === '';
  }
  get showButtons() {
    return this.selectedEvent.pdfFile !== undefined && this.selectedEvent.pdfFile !== '' || this.selectedEvent.details !== '' && this.selectedEvent.details !== undefined;
  }
  resetSelected(details, tripReport) {
    if (details) {
      this.detailsSelected = true;
      this.tripReportSelected = false;
    } else if (tripReport) {
      this.detailsSelected = false;
      this.tripReportSelected = true;
    } else {
      this.detailsSelected = false;
      this.tripReportSelected = false;
    }
  }
  get pdfFileLocation() {
    return `https://drive.google.com/file/d/${this.selectedEvent.pdfFile}/preview?usp=sharing`;
  }
  handleTypeChange(event) {
    const type = event.target.value;
    if (type === 'details') {
      this.detailsSelected = true;
      this.tripReportSelected = false;
    } else {
      this.detailsSelected = false;
      this.tripReportSelected = true;
    }
  }
  /*LWC compiler v2.38.1*/
}
_registerDecorators(EventDetails, {
  publicProps: {
    selectedEvent: {
      config: 0
    }
  },
  publicMethods: ["resetSelected"],
  fields: ["detailsSelected", "tripReportSelected"]
});
export default _registerComponent(EventDetails, {
  tmpl: _tmpl
});