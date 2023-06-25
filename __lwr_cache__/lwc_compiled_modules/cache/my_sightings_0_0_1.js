import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./sightings.html";
class Sightings extends LightningElement {
  constructor(...args) {
    super(...args);
    this.sightings = void 0;
    this.header = void 0;
    this.viewtype = void 0;
    this.filter = void 0;
    this.rarebirds = new Set(JSON.parse(sessionStorage.getItem('rarebirds')).map(item => item['Scientific Name']));
  }
  get sightingList() {
    if (!this.sightings || this.sightings.length === 0) {
      return [{
        id: '0',
        name: 'None'
      }];
    }
    let filteredList = [];
    const speciesSet = new Set(this.sightings.map(item => item.comName));
    speciesSet.forEach(species => {
      let matches = this.sightings.filter(item => item.comName === species);
      let locations = this.viewtype === 'us' ? [...new Set(matches.map(item => `${item.subnational2Name}, ${item.subnational1Name}`))].sort() : new Set(matches.map(item => item.subnational2Name));
      if (this.filter === 'rare' && this.rarebirds.has(matches[0].sciName) || this.filter === 'notable' || this.filter === 'all') {
        filteredList.push({
          id: matches[0].speciesCode,
          name: species,
          locations: this.viewtype === 'us' ? Array.from(locations).join('; ') : Array.from(locations).join(', '),
          mostRecent: Math.max(...matches.map(e => new Date(e.obsDt))),
          scientific: matches[0].sciName,
          class: this.rarebirds.has(matches[0].sciName) && this.filter !== 'rare' ? 'slds-cell-wrap rare' : 'slds-cell-wrap'
        });
      }
    });
    return filteredList.sort((a, b) => {
      return a.name > b.name ? 1 : -1;
    });
  }
  handleSightingClick(event) {
    const code = event.currentTarget.dataset.id;
    const sightings = this.sightings.filter(item => item.speciesCode === code);
    this.dispatchEvent(new CustomEvent('sightingselected', {
      detail: sightings
    }));
  }
  get showLocations() {
    return this.viewtype !== 'nearby';
  }
  get numSightings() {
    return this.sightingList === undefined ? 0 : this.sightingList.length;
  }
  /*LWC compiler v2.38.1*/
}
_registerDecorators(Sightings, {
  publicProps: {
    sightings: {
      config: 0
    },
    header: {
      config: 0
    },
    viewtype: {
      config: 0
    },
    filter: {
      config: 0
    },
    numSightings: {
      config: 1
    }
  },
  fields: ["rarebirds"]
});
export default _registerComponent(Sightings, {
  tmpl: _tmpl
});