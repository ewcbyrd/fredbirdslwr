import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./hotspotDetails.html";
class HotspotDetails extends LightningElement {
  constructor(...args) {
    super(...args);
    this.hotspot = void 0;
    this.sightings = [];
  }
  get showHotspot() {
    return this.hotspot !== undefined && this.hotspot !== null;
  }
  get mapUrl() {
    return `https://www.google.com/maps/embed/v1/place?key=AIzaSyCB3Q5szLx_1-UE-WIkFSgA3fFi7-KWFAM&q=${this.hotspot.latitude},${this.hotspot.longitude}&zoom=14`;
  }
  get ebirdLink() {
    return `https://ebird.org/hotspot/${this.hotspot.locId}`;
  }
  get showSpeciesList() {
    return this.sightings !== undefined && this.sightings !== null;
  }
  /*LWC compiler v2.38.1*/
}
_registerDecorators(HotspotDetails, {
  publicProps: {
    hotspot: {
      config: 0
    },
    sightings: {
      config: 0
    }
  }
});
export default _registerComponent(HotspotDetails, {
  tmpl: _tmpl
});