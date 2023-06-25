function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  var suffixToken = token ? ("-" + token) : "";
  return ".contact-us" + shadowSelector + " {background-color: white;border-color: black;border-width: 2px;border-style: solid;}img" + shadowSelector + " {margin-left: auto;margin-right: auto;height: 100%;width: 100%;border-color: black;border-width: 2px;border-style: solid;}.img-left" + shadowSelector + " {border-right-style: none;}.img-right" + shadowSelector + " {border-left-style: none;}@media only screen and (max-width: 800px) {.no-show" + shadowSelector + " {display: none;}}";
  /*LWC compiler v2.38.1*/
}
export default [stylesheet];