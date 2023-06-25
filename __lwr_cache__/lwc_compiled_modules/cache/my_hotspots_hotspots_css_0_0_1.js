function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ".body" + shadowSelector + " {max-height: 450px;}";
  /*LWC compiler v2.38.1*/
}
export default [stylesheet];