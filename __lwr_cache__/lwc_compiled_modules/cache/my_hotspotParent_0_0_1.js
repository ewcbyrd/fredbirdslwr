import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./hotspotParent.html";
import { getHotspotDetails, getSpeciesDetailsByLocation } from 'data/ebirdService';
class HotspotParent extends LightningElement {
  constructor(...args) {
    super(...args);
    this.hotspot = void 0;
    this.sightings = void 0;
  }
  handleHotspotClick(event) {
    getHotspotDetails({
      locId: event.detail
    }).then(results => {
      this.hotspot = results;
      getSpeciesDetailsByLocation({
        locId: this.hotspot.locId
      }).then(species => {
        this.sightings = species.sort((a, b) => {
          return a.comName > b.comName ? 1 : -1;
        });
      });
    });
  }
  handleLocationChange() {
    this.hotspot = undefined;
    this.sightings = undefined;
  }
  /*LWC compiler v2.38.1*/
}
_registerDecorators(HotspotParent, {
  fields: ["hotspot", "sightings"]
});
export default _registerComponent(HotspotParent, {
  tmpl: _tmpl
});