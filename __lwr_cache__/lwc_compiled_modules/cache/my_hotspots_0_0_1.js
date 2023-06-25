import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./hotspots.html";
import { getNearbyHotspots } from 'data/ebirdService';
class Hotspots extends LightningElement {
  constructor(...args) {
    super(...args);
    this.hotspots = [];
    this.regions = void 0;
    this.locations = [];
    this.selectedId = '';
  }
  connectedCallback() {
    const hotspots = sessionStorage.getItem('hotspots');
    this.regions = JSON.parse(sessionStorage.getItem('regions'));
    if (hotspots) {
      this.hotspots = JSON.parse(hotspots);
      this.locations = this.setLocations();
      this.selectedId = this.locations[0].value;
    } else {
      const opts = {
        lat: 38.31,
        long: -77.46
      };
      getNearbyHotspots(opts).then(result => {
        this.hotspots = result;
        sessionStorage.setItem('hotspots', JSON.stringify(result));
        this.locations = this.setLocations();
        this.selectedId = this.locations[0].value;
      });
    }
  }
  setLocations() {
    let options = [];
    let codes = new Set(this.hotspots.map(item => item.subnational2Code));
    codes.delete(undefined);
    codes.forEach(item => {
      let label = this.regions.find(region => item === region.code);
      options.push({
        value: item,
        label: label.name
      });
    });
    return options.sort((a, b) => a.label > b.label ? 1 : -1);
  }
  get filteredHotspots() {
    return this.hotspots.filter(item => item.subnational2Code === this.selectedId);
  }
  handleLocationChange(event) {
    this.selectedId = event.target.value;
    this.dispatchEvent(new CustomEvent('locationchange'));
  }
  handleHotspotClick(event) {
    this.dispatchEvent(new CustomEvent('hotspotclick', {
      bubbles: true,
      composed: true,
      detail: event.currentTarget.dataset.item
    }));
  }
  get showHotspots() {
    return this.hotspots.length > 0;
  }
  /*LWC compiler v2.38.1*/
}
_registerDecorators(Hotspots, {
  fields: ["hotspots", "regions", "locations", "selectedId"]
});
export default _registerComponent(Hotspots, {
  tmpl: _tmpl
});