function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return "div[role='region']" + shadowSelector + " {outline: none;}";
  /*LWC compiler v2.38.1*/
}
export default [stylesheet];