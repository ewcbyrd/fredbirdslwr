import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./news.html";
import { getFeed, getNewsFeeds } from 'data/restdbService';
class News extends LightningElement {
  constructor(...args) {
    super(...args);
    this.url = void 0;
    this.news = [];
    this.dropdown = 'All About Birds';
    this.dropdownOptions = void 0;
    this.elapsed = 0;
    this.interval = void 0;
  }
  connectedCallback() {
    getNewsFeeds().then(response => {
      return response.json();
    }).then(results => {
      this.dropdownOptions = results;
      this.url = results[0].url;
      this.fetchNews();
    }).catch(error => {
      console.log(error);
    });
  }
  fetchNews() {
    getFeed(this.url).then(response => {
      return response.json();
    }).then(results => {
      for (let i = 0; i < results.items.length; i++) {
        results.items[i].id = i;
      }
      this.news = results.items;
      this.interval = setInterval(() => {
        this.elapsed++;
      }, 60000);
    }).catch(error => {
      console.log(error);
    });
  }
  get birdNews() {
    this.news.forEach(item => {
      item.isLink = item.link !== undefined;
      if (!item.enclosure) {
        item.enclosure = {};
      }
    });
    return this.news;
  }
  get showFooter() {
    return this.home === 'true';
  }
  get numItems() {
    return this.news.length;
  }
  get timeElapsed() {
    const mins = this.elapsed !== 1 ? 'minutes' : 'minute';
    return `${this.elapsed} ${mins} ago`;
  }
  handleListClick() {
    let classes = this.template.querySelector('.list-select').classList;
    if (classes.contains('slds-is-open')) {
      classes.remove('slds-is-open');
    } else {
      classes.add('slds-is-open');
    }
  }
  handleOptionChange(event) {
    this.elapsed = 0;
    clearInterval(this.interval);
    this.template.querySelector('.list-select').classList.remove('slds-is-open');
    this.url = this.dropdownOptions.find(item => item.title === event.currentTarget.dataset.id).url;
    this.dropdown = event.currentTarget.dataset.id;
    this.fetchNews();
  }
  refresh() {
    this.elapsed = 0;
    clearInterval(this.interval);
    this.fetchNews();
  }
  /*LWC compiler v2.38.1*/
}
_registerDecorators(News, {
  fields: ["url", "news", "dropdown", "dropdownOptions", "elapsed", "interval"]
});
export default _registerComponent(News, {
  tmpl: _tmpl
});