import _tmpl from "./pageLink.html";
import { registerComponent as _registerComponent, LightningElement } from "lwc";
import { NavigationMixin } from 'lightning/navigation';
class PageLink extends NavigationMixin(LightningElement) {
  handleClick(event) {
    // Navigate when the link is clicked
    event.preventDefault();
    const pageRef = {
      type: event.target.title
    };
    //this[NavigationMixin.GenerateUrl](pageRef).then((url) => console.log(url));
    this[NavigationMixin.Navigate](pageRef);
  }
  /*LWC compiler v2.38.1*/
}
export default _registerComponent(PageLink, {
  tmpl: _tmpl
});