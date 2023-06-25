import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./carouselComponent.html";
/*
MIT License

Copyright (c) 2020 Playground, https://www.playg.app

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
class CarouselComponent extends LightningElement {
  constructor(...args) {
    super(...args);
    this.items = void 0;
    this.options = void 0;
    this.components = void 0;
    this.showPlayIcon = void 0;
    this.activeComponent = 0;
    this.loaded = false;
    this.autoScroll = void 0;
    this.intervalVar = void 0;
  }
  navigate(event) {
    this.activeComponent = parseInt(event.target.dataset.id);
    this.arrangeComponents();
  }
  arrangeComponents() {
    let untrackedComponents = [];
    let iterator = 0;
    this.items.forEach(item => {
      let temp = _objectSpread({}, item);
      temp.id = iterator;
      temp.contentId = 'content-id-' + iterator;
      temp.indicatorId = 'indicator-id-' + iterator;
      if (temp.href) {
        temp.href = 'javascript:void(0);';
      }
      if (iterator === this.activeComponent) {
        temp.hidden = false;
        temp.tabindex = 0;
        temp.active = true;
        temp.indicatorClass = 'slds-carousel__indicator-action slds-is-active';
        temp.contentClass = 'slds-carousel__panel';
      } else {
        temp.hidden = true;
        temp.tabindex = -1;
        temp.active = false;
        temp.indicatorClass = 'slds-carousel__indicator-action';
        temp.contentClass = 'slds-carousel__panel panel-hide';
      }
      untrackedComponents.push(temp);
      iterator++;
    });
    this.components = untrackedComponents;
  }
  togglePlay() {
    if (!this.showPlayIcon) {
      clearInterval(this.intervalVar);
      this.showPlayIcon = true;
    } else {
      this.checkOptions();
    }
  }
  checkOptions() {
    if (this.options) {
      if (this.options.autoScroll && this.options.autoScrollTime) {
        this.autoScroll = true;
        this.showPlayIcon = false;
        this.intervalVar = setInterval(() => {
          if (this.activeComponent === this.components.length - 1) {
            this.activeComponent = 0;
          } else {
            this.activeComponent++;
          }
          this.arrangeComponents();
        }, this.options.autoScrollTime * 1000);
      }
    }
  }
  renderedCallback() {
    if (!this.loaded) {
      this.arrangeComponents();
      this.checkOptions();
      this.loaded = true;
    }
  }
  /*LWC compiler v2.38.1*/
}
_registerDecorators(CarouselComponent, {
  publicProps: {
    items: {
      config: 0
    },
    options: {
      config: 0
    }
  },
  track: {
    components: 1,
    showPlayIcon: 1
  },
  fields: ["activeComponent", "loaded", "autoScroll", "intervalVar"]
});
export default _registerComponent(CarouselComponent, {
  tmpl: _tmpl
});