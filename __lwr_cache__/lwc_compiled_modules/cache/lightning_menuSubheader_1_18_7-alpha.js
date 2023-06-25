import { registerDecorators as _registerDecorators, registerComponent as _registerComponent, LightningElement } from "lwc";
import _tmpl from "./menuSubheader.html";
/**
 * Creates a subheader in the list of items in lightning-button-menu.
 */
class LightningMenuSubheader extends LightningElement {
  constructor(...args) {
    super(...args);
    /**
     * The text displayed in the subheader.
     * @type {string}
     */
    this.label = void 0;
  }
  connectedCallback() {
    this.setAttribute('role', 'separator');
  }
  /*LWC compiler v2.38.1*/
}
_registerDecorators(LightningMenuSubheader, {
  publicProps: {
    label: {
      config: 0
    }
  }
});
export default _registerComponent(LightningMenuSubheader, {
  tmpl: _tmpl
});