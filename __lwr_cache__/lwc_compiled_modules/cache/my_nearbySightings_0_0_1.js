import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./nearbySightings.html";
import { getNearbyNotableObservations } from 'data/ebirdService';
class NearbySightings extends LightningElement {
  constructor(...args) {
    super(...args);
    this.localSightings = [];
  }
  connectedCallback() {
    this.getLocalSightings();
  }
  getLocalSightings() {
    const opts = {
      lat: 38.31,
      long: -77.46,
      daysBack: 7,
      dist: 30
    };
    getNearbyNotableObservations(opts).then(result => {
      const sightingsMap = new Map();
      result.forEach(item => {
        item.obsDt = new Date(item.obsDt);
        sightingsMap.set(item.obsId, item);
      });
      console.log();
      this.localSightings = sightingsMap.values();
    });
  }
  handleViewAllSightingsClick() {
    this.dispatchEvent(new CustomEvent('viewall', {
      detail: 'sightings',
      bubbles: true,
      composed: true
    }));
  }
  /*LWC compiler v2.38.1*/
}
_registerDecorators(NearbySightings, {
  fields: ["localSightings"]
});
export default _registerComponent(NearbySightings, {
  tmpl: _tmpl
});