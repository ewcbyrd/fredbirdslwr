function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return "pre" + shadowSelector + " {white-space: pre-wrap;font-size: 0.8125rem;font-family: Arial, Helvetica, sans-serif;}table" + shadowSelector + " {table-layout: fixed;width: 100%;}";
  /*LWC compiler v2.38.1*/
}
export default [stylesheet];