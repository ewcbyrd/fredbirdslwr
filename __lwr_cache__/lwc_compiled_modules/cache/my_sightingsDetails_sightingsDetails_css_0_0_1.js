function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ".slds-card__footer" + shadowSelector + " {height: 250px;}";
  /*LWC compiler v2.38.1*/
}
export default [stylesheet];