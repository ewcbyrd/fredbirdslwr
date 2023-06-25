function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return "lightning-formatted-rich-text" + shadowSelector + " {white-space: pre-wrap;font-size: 1rem;font-family: Arial, Helvetica, sans-serif;}";
  /*LWC compiler v2.38.1*/
}
export default [stylesheet];