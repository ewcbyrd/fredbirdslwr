function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return "table" + shadowSelector + " {table-layout: fixed;width: 100%;}.rare" + shadowSelector + " {color: red;font-weight: bold;}";
  /*LWC compiler v2.38.1*/
}
export default [stylesheet];