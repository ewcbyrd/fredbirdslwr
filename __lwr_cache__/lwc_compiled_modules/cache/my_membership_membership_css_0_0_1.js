function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ".main" + shadowSelector + " {background-color: white;font-size: 1rem;}";
  /*LWC compiler v2.38.1*/
}
export default [stylesheet];