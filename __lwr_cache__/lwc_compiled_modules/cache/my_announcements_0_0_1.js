import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./announcements.html";
import { getAnnouncements } from 'data/restdbService';
class Announcements extends LightningElement {
  constructor(...args) {
    super(...args);
    this.home = false;
    this.numRows = 2;
    this.announcements = [];
    this.announcement = void 0;
  }
  connectedCallback() {
    this.fetchAnnouncements();
  }
  fetchAnnouncements() {
    const announcements = sessionStorage.getItem('announcements');
    if (announcements) {
      this.announcements = this.home ? JSON.parse(announcements).splice(0, this.numRows) : this.announcements = JSON.parse(announcements);
    } else {
      getAnnouncements().then(result => {
        let rows = result.length < this.numRows ? result.length : this.numRows;
        sessionStorage.setItem('announcements', JSON.stringify(result));
        this.announcements = this.home || result.length === 1 ? result.splice(0, rows) : result;
      }).catch(error => {
        console.log(error);
      });
    }
  }
  get showFooter() {
    return this.home === 'true';
  }
  handleViewAllClick() {
    this.dispatchEvent(new CustomEvent('viewall', {
      detail: 'announcements',
      bubbles: true,
      composed: true
    }));
  }
  /*LWC compiler v2.38.1*/
}
_registerDecorators(Announcements, {
  publicProps: {
    home: {
      config: 0
    },
    numRows: {
      config: 0
    }
  },
  fields: ["announcements", "announcement"]
});
export default _registerComponent(Announcements, {
  tmpl: _tmpl
});