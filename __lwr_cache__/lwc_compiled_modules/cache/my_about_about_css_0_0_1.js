function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return "div" + shadowSelector + " {font-size: 1rem;background: white;}img" + shadowSelector + " {padding-right: 16px;;}";
  /*LWC compiler v2.38.1*/
}
export default [stylesheet];