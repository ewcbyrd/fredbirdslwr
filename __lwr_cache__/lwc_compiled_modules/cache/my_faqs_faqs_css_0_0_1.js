function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ".main" + shadowSelector + " {background-color: white;}img" + shadowSelector + " {margin-left: auto;margin-right: auto;width: 100%;border-color: black;border-width: 2px;border-style: solid;}.select" + shadowSelector + " {width: 200px;margin: auto;font-size: 1rem;}.question" + shadowSelector + " {font-size: 1.25rem;font-weight: bold;}.answer" + shadowSelector + " {font-size: 1rem;}@media only screen and (max-width: 800px) {.no-show" + shadowSelector + " {display: none;}}";
  /*LWC compiler v2.38.1*/
}
export default [stylesheet];