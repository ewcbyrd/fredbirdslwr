function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ".main" + shadowSelector + " {background-color: white;}.opening" + shadowSelector + " {font-size: 1rem;}.slds-carousel__panel.panel-hide" + shadowSelector + "{display: none;}.slds-carousel__panel" + shadowSelector + " img" + shadowSelector + "{max-height: 60vh !important;}.ebird" + shadowSelector + " {width: 178px;height: 85px;}";
  /*LWC compiler v2.38.1*/
}
export default [stylesheet];