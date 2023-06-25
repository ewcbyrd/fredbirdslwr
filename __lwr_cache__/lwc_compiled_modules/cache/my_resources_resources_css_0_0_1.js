function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ".state-combobox" + shadowSelector + " {width: 150px;margin: auto;text-align: left;}.slds-modal__content" + shadowSelector + " {overflow: initial;}";
  /*LWC compiler v2.38.1*/
}
export default [stylesheet];