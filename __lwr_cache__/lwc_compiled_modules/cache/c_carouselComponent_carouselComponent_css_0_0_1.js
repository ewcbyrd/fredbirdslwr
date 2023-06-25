function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ".slds-carousel__panel.panel-hide" + shadowSelector + " {display: none;}.slds-carousel__panel" + shadowSelector + " {background-color: grey;}.slds-carousel__panel" + shadowSelector + " img" + shadowSelector + " {max-height: 70vh !important;width: auto;margin: auto;display: block;}.slds-carousel__image" + shadowSelector + " {object-fit: cover;}";
  /*LWC compiler v2.38.1*/
}
export default [stylesheet];